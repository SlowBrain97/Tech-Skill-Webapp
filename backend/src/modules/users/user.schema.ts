import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
class UserSettings {
    @Prop({ default: 3, min: 1, max: 15 })
    pushesPerDay: number;

    @Prop({ default: '09:00' })
    notificationTimeStart: string;

    @Prop({ default: '21:00' })
    notificationTimeEnd: string;

    @Prop({ type: [String], default: ['fresher'], enum: ['fresher', 'junior', 'middle', 'senior'] })
    difficulty: string[];

    @Prop({ default: 'en', enum: ['en', 'jp', 'vi'] })
    language: string;

    @Prop({ type: [String], default: [] })
    selectedTopics: string[];

    @Prop({ default: 50, min: 0, max: 100 })
    staticDynamicRatio: number; // Percentage of static questions (0-100)
}

@Schema({ timestamps: true })
export class User {
    @Prop({ required: true, unique: true })
    email: string;

    @Prop({ required: true })
    passwordHash: string;

    @Prop({ default: 'user', enum: ['user', 'admin'] })
    role: string;

    @Prop({ type: UserSettings, default: () => ({}) })
    settings: UserSettings;

    @Prop({
        type: [{
            questionId: { type: String, required: true },
            completedAt: { type: Date, default: Date.now }
        }],
        default: []
    })
    completedQuestions: Array<{ questionId: string; completedAt: Date }>;

    @Prop({ type: Object })
    pushSubscription: any; // Store VAPID subscription object
}

export const UserSchema = SchemaFactory.createForClass(User);
