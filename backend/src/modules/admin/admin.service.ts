import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Question, QuestionDocument } from '../questions/question.schema';

@Injectable()
export class AdminService {
    constructor(
        @InjectModel(Question.name) private questionModel: Model<QuestionDocument>,
    ) { }

    async createQuestion(createQuestionDto: any): Promise<Question> {
        const createdQuestion = new this.questionModel(createQuestionDto);
        return createdQuestion.save();
    }

    async getAllQuestions(topic?: string, difficulty?: string): Promise<Question[]> {
        const filter: any = {};
        if (topic) filter.topic = topic;
        if (difficulty) filter.difficulty = difficulty;
        return this.questionModel.find(filter).exec();
    }

    async getQuestionById(id: string): Promise<Question | null> {
        return this.questionModel.findById(id).exec();
    }

    async updateQuestion(id: string, updateQuestionDto: any): Promise<Question | null> {
        return this.questionModel.findByIdAndUpdate(id, updateQuestionDto, { new: true }).exec();
    }

    async deleteQuestion(id: string): Promise<Question | null> {
        return this.questionModel.findByIdAndDelete(id).exec();
    }

    async getStatistics() {
        const total = await this.questionModel.countDocuments().exec();
        const byDifficulty = await this.questionModel.aggregate([
            {
                $group: {
                    _id: '$difficulty',
                    count: { $sum: 1 },
                },
            },
        ]);
        const byTopic = await this.questionModel.aggregate([
            {
                $group: {
                    _id: '$topic',
                    count: { $sum: 1 },
                },
            },
        ]);

        return {
            total,
            byDifficulty,
            byTopic,
        };
    }
}
