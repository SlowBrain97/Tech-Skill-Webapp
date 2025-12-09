import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Cron } from '@nestjs/schedule';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as webpush from 'web-push';
import { SubscribersService } from '../subscribers/subscribers.service';
import { Subscriber } from '../subscribers/subscriber.schema';
import { Topic, TopicDocument } from '../topics/topic.schema';
import { Question, QuestionDocument } from '../questions/question.schema';

// Static topics that exist in frontend
const STATIC_TOPICS = [
    'javascript',
    'typescript',
    'react',
    'java',
    'spring-boot',
    'nosql',
    'rdbms',
    'microservices',
    'mysql',
    'postgres'
]

interface PushPayload {
    type: 'static' | 'dynamic';
    topicId: string;
    questions?: any[];
}

@Injectable()
export class PushService {
    private readonly logger = new Logger(PushService.name);

    constructor(
        private configService: ConfigService,
        private subscribersService: SubscribersService,
        @InjectModel(Topic.name) private topicModel: Model<TopicDocument>,
        @InjectModel(Question.name) private questionModel: Model<QuestionDocument>,
    ) {
        // Initialize VAPID
        const publicKey = this.configService.get<string>('VAPID_PUBLIC_KEY');
        const privateKey = this.configService.get<string>('VAPID_PRIVATE_KEY');
        const subject = this.configService.get<string>('VAPID_SUBJECT') || 'mailto:admin@example.com';

        if (publicKey && privateKey) {
            webpush.setVapidDetails(subject, publicKey, privateKey);
            this.logger.log('VAPID configured successfully');
        } else {
            this.logger.warn('VAPID keys not configured');
        }
    }

    /**
     * Get random topic payload (static or dynamic)
     */
    async getRandomTopicPayload(subscriber: Subscriber): Promise<PushPayload | null> {
        try {
            // Get all available topics
            const mongoTopics = await this.topicModel.find({ isActive: true });

            // Build combined topic list
            const allTopics: Array<{ id: string; type: 'static' | 'dynamic'; mongoId?: string }> = [
                ...STATIC_TOPICS.map(t => ({ id: t, type: 'static' as const })),
                ...mongoTopics.map(t => ({ id: t.name, type: 'dynamic' as const, mongoId: t._id.toString() })),
            ];

            // Filter by selected topics if any
            const filteredTopics = subscriber.selectedTopics.length > 0
                ? allTopics.filter(t => subscriber.selectedTopics.includes(t.id))
                : allTopics;

            if (filteredTopics.length === 0) {
                this.logger.warn(`No topics available for subscriber ${subscriber.deviceUUID}`);
                return null;
            }

            // Random select
            const selected = filteredTopics[Math.floor(Math.random() * filteredTopics.length)];

            if (selected.type === 'static') {
                return {
                    type: 'static',
                    topicId: selected.id,
                };
            } else {
                // Get questions from MongoDB for dynamic topic
                const questions = await this.questionModel.find({
                    topic: selected.id,
                    difficulty: subscriber.difficulty,
                }).limit(10);

                return {
                    type: 'dynamic',
                    topicId: selected.id,
                    questions: questions.map(q => ({
                        id: q._id.toString(),
                        difficulty: q.difficulty,
                        content: q.content,
                    })),
                };
            }
        } catch (error) {
            this.logger.error('Error generating topic payload:', error);
            return null;
        }
    }

    /**
     * Calculate notification schedule based on subscriber settings
     */
    calculateSchedule(subscriber: Subscriber): string[] {
        const { timeStart, timeEnd, pushPerDay } = subscriber;

        const [startH, startM] = timeStart.split(':').map(Number);
        const [endH, endM] = timeEnd.split(':').map(Number);

        const startMinutes = startH * 60 + startM;
        const endMinutes = endH * 60 + endM;

        if (endMinutes <= startMinutes || pushPerDay <= 0) {
            return [];
        }

        const interval = (endMinutes - startMinutes) / pushPerDay;

        return Array.from({ length: pushPerDay }, (_, i) => {
            const mins = Math.round(startMinutes + i * interval);
            const h = Math.floor(mins / 60);
            const m = mins % 60;
            return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
        });
    }

    /**
     * Send push notification to a subscriber
     */
    async sendPush(subscriber: Subscriber, payload: PushPayload): Promise<boolean> {
        try {
            await webpush.sendNotification(
                subscriber.pushSubscription,
                JSON.stringify(payload),
            );
            this.logger.log(`Push sent to ${subscriber.deviceUUID}`);
            return true;
        } catch (error: any) {
            if (error.statusCode === 410 || error.statusCode === 404) {
                // Subscription expired or invalid
                this.logger.warn(`Subscription expired for ${subscriber.deviceUUID}`);
                await this.subscribersService.markInactive(subscriber.deviceUUID);
            } else {
                this.logger.error(`Push failed for ${subscriber.deviceUUID}:`, error.message);
            }
            return false;
        }
    }

    /**
     * Cron job - runs every minute to send scheduled notifications
     */
    @Cron('* * * * *')
    async triggerScheduledNotifications() {
        const now = new Date();
        const currentTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;

        this.logger.debug(`Cron running at ${currentTime}`);

        const subscribers = await this.subscribersService.findAllActive();
        let sentCount = 0;

        for (const subscriber of subscribers) {
            try {
                const schedule = this.calculateSchedule(subscriber);

                if (!schedule.includes(currentTime)) {
                    continue;
                }

                this.logger.log(`Sending push to ${subscriber.deviceUUID} at ${currentTime}`);

                const payload = await this.getRandomTopicPayload(subscriber);
                if (!payload) continue;

                const sent = await this.sendPush(subscriber, payload);
                if (sent) sentCount++;

            } catch (error) {
                this.logger.error(`Error processing subscriber ${subscriber.deviceUUID}:`, error);
            }
        }

        if (sentCount > 0) {
            this.logger.log(`Sent ${sentCount} push notifications at ${currentTime}`);
        }
    }

    /**
     * Manual trigger for testing
     */
    async testPush(deviceUUID: string): Promise<boolean> {
        const subscriber = await this.subscribersService.findByUUID(deviceUUID);
        if (!subscriber) {
            this.logger.warn(`Subscriber not found: ${deviceUUID}`);
            return false;
        }

        const payload = await this.getRandomTopicPayload(subscriber);
        if (!payload) return false;

        return this.sendPush(subscriber, payload);
    }
}
