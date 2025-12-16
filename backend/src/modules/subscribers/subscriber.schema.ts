import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SubscriberDocument = Subscriber & Document;

@Schema()
export class PushSubscriptionKeys {
    @Prop({ required: true })
    p256dh: string;

    @Prop({ required: true })
    auth: string;
}

@Schema()
export class PushSubscription {
    @Prop({ required: true })
    endpoint: string;

    @Prop({ type: PushSubscriptionKeys, required: true })
    keys: PushSubscriptionKeys;
}

@Schema({ timestamps: true })
export class Subscriber {
    @Prop({ required: true, unique: true, index: true })
    deviceUUID: string;

    @Prop({ type: PushSubscription, required: true })
    pushSubscription: PushSubscription;

    // Device settings for cron scheduling
    @Prop({ type: [String], default: [] })
    selectedTopics: string[];

    @Prop({ default: 'junior', enum: ['fresher', 'junior', 'middle', 'senior'] })
    difficulty: string;

    @Prop({ default: 3, min: 1, max: 15 })
    pushPerDay: number;

    @Prop({ default: '09:00' })
    timeStart: string;

    @Prop({ default: '21:00' })
    timeEnd: string;

    @Prop({ default: true })
    isActive: boolean;

    @Prop({ default: 'Asia/Tokyo' })
    timeZone: string;
}

export const SubscriberSchema = SchemaFactory.createForClass(Subscriber);
