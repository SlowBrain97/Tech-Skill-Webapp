import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Subscriber, SubscriberDocument } from './subscriber.schema';
import { SubscribeDto, UpdateSettingsDto } from './subscriber.dto';

@Injectable()
export class SubscribersService {
    private readonly logger = new Logger(SubscribersService.name);

    constructor(
        @InjectModel(Subscriber.name) private subscriberModel: Model<SubscriberDocument>,
    ) { }

    /**
     * Create or update a subscriber
     */
    async subscribe(dto: SubscribeDto): Promise<Subscriber> {
        const existing = await this.subscriberModel.findOne({ deviceUUID: dto.deviceUUID });

        if (existing) {
            // Update existing subscription
            existing.pushSubscription = dto.pushSubscription as any;
            if (dto.selectedTopics) existing.selectedTopics = dto.selectedTopics;
            if (dto.difficulty) existing.difficulty = dto.difficulty;
            if (dto.pushPerDay) existing.pushPerDay = dto.pushPerDay;
            if (dto.timeStart) existing.timeStart = dto.timeStart;
            if (dto.timeEnd) existing.timeEnd = dto.timeEnd;
            existing.isActive = true;

            return existing.save();
        }

        // Create new subscriber
        return this.subscriberModel.create({
            ...dto,
            isActive: true,
        });
    }

    /**
     * Update subscriber settings
     */
    async updateSettings(deviceUUID: string, dto: UpdateSettingsDto): Promise<Subscriber | null> {
        const subscriber = await this.subscriberModel.findOne({ deviceUUID });

        if (!subscriber) {
            this.logger.warn(`Subscriber not found: ${deviceUUID}`);
            return null;
        }

        if (dto.selectedTopics !== undefined) subscriber.selectedTopics = dto.selectedTopics;
        if (dto.difficulty !== undefined) subscriber.difficulty = dto.difficulty;
        if (dto.pushPerDay !== undefined) subscriber.pushPerDay = dto.pushPerDay;
        if (dto.timeStart !== undefined) subscriber.timeStart = dto.timeStart;
        if (dto.timeEnd !== undefined) subscriber.timeEnd = dto.timeEnd;

        return subscriber.save();
    }

    /**
     * Unsubscribe a device
     */
    async unsubscribe(deviceUUID: string): Promise<boolean> {
        const result = await this.subscriberModel.deleteOne({ deviceUUID });
        return result.deletedCount > 0;
    }

    /**
     * Get all active subscribers
     */
    async findAllActive(): Promise<Subscriber[]> {
        return this.subscriberModel.find({ isActive: true });
    }

    /**
     * Mark subscriber as inactive (subscription expired)
     */
    async markInactive(deviceUUID: string): Promise<void> {
        await this.subscriberModel.updateOne({ deviceUUID }, { isActive: false });
    }

    /**
     * Get subscriber by UUID
     */
    async findByUUID(deviceUUID: string): Promise<Subscriber | null> {
        return this.subscriberModel.findOne({ deviceUUID });
    }

    /**
     * Count active subscribers
     */
    async countActive(): Promise<number> {
        return this.subscriberModel.countDocuments({ isActive: true });
    }
}
