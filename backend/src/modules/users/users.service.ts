import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }

    async create(createUserDto: any): Promise<UserDocument> {
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(createUserDto.password, salt);
        const createdUser = new this.userModel({
            email: createUserDto.email,
            passwordHash,
            role: createUserDto.role || 'user',
        });
        return createdUser.save();
    }

    async findOne(email: string): Promise<UserDocument | null> {
        return this.userModel.findOne({ email }).exec();
    }

    async findById(userId: string): Promise<UserDocument | null> {
        return this.userModel.findById(userId).exec();
    }

    async updateSettings(userId: string, settings: any): Promise<any> {
        const user = await this.userModel.findById(userId);
        if (user) {
            user.settings = { ...user.settings, ...settings };
            await user.save();
            return user.settings;
        }
        return null;
    }

    async addCompletedQuestion(userId: string, questionId: string): Promise<void> {
        await this.userModel.findByIdAndUpdate(
            userId,
            {
                $push: {
                    completedQuestions: {
                        questionId,
                        completedAt: new Date()
                    }
                }
            }
        );
    }

    async getCompletedQuestions(userId: string): Promise<Array<{ questionId: string; completedAt: Date }>> {
        const user = await this.userModel.findById(userId);
        return user?.completedQuestions || [];
    }

    async syncCompletedQuestions(userId: string, questions: Array<{ questionId: string; completedAt: Date }>): Promise<void> {
        await this.userModel.findByIdAndUpdate(
            userId,
            { completedQuestions: questions }
        );
    }

    async updatePushSubscription(userId: string, subscription: any): Promise<void> {
        await this.userModel.findByIdAndUpdate(
            userId,
            { pushSubscription: subscription }
        );
    }

    async removePushSubscription(userId: string): Promise<void> {
        await this.userModel.findByIdAndUpdate(
            userId,
            { pushSubscription: null }
        );
    }

    async findAllWithSubscriptions(): Promise<UserDocument[]> {
        return this.userModel.find({ pushSubscription: { $ne: null } }).exec();
    }
}
