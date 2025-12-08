import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Topic, TopicDocument } from './topic.schema';

// Static topics that exist in frontend
const STATIC_TOPICS = [
    { id: 'javascript', name: 'javascript', displayName: { en: 'JavaScript', vi: 'JavaScript', jp: 'JavaScript' } },
    { id: 'typescript', name: 'typescript', displayName: { en: 'TypeScript', vi: 'TypeScript', jp: 'TypeScript' } },
    { id: 'react', name: 'react', displayName: { en: 'React', vi: 'React', jp: 'React' } },
    { id: 'java', name: 'java', displayName: { en: 'Java', vi: 'Java', jp: 'Java' } },
    { id: 'spring-boot', name: 'spring-boot', displayName: { en: 'Spring Boot', vi: 'Spring Boot', jp: 'Spring Boot' } },
    { id: 'nosql', name: 'nosql', displayName: { en: 'NoSQL', vi: 'NoSQL', jp: 'NoSQL' } },
    { id: 'rdbms', name: 'rdbms', displayName: { en: 'RDBMS', vi: 'RDBMS', jp: 'RDBMS' } },
    { id: 'microservices', name: 'microservices', displayName: { en: 'Microservices', vi: 'Microservices', jp: 'マイクロサービス' } },
];

@Controller('api/topics')
export class TopicsController {
    constructor(
        @InjectModel(Topic.name) private topicModel: Model<TopicDocument>,
    ) { }

    /**
     * Get all topics (static + dynamic) for frontend sync
     */
    @Get()
    async getAllTopics() {
        const dynamicTopics = await this.topicModel.find({ isActive: true });

        return {
            static: STATIC_TOPICS,
            dynamic: dynamicTopics.map(t => ({
                _id: t._id,
                name: t.name,
                displayName: t.displayName,
                isActive: t.isActive,
            })),
        };
    }

    /**
     * Create new topic (admin only)
     * TODO: Add JwtAuthGuard and AdminGuard
     */
    @Post()
    async createTopic(@Body() body: { name: string; displayName: { en: string; vi: string; jp: string } }) {
        const topic = await this.topicModel.create({
            name: body.name,
            displayName: body.displayName,
            isActive: true,
        });

        return topic;
    }
}
