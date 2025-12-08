import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Question, QuestionDocument } from './question.schema';

@Injectable()
export class QuestionsService {
    constructor(@InjectModel(Question.name) private questionModel: Model<QuestionDocument>) { }

    async create(createQuestionDto: any): Promise<Question> {
        const createdQuestion = new this.questionModel(createQuestionDto);
        return createdQuestion.save();
    }

    async findAll(): Promise<Question[]> {
        return this.questionModel.find().exec();
    }

    async findRandom(topic: string, difficulty: string, language: string): Promise<Question | null> {
        // Simple random implementation. For better performance with large datasets, use aggregation $sample
        const count = await this.questionModel.countDocuments({ topic, difficulty });
        if (count === 0) return null;
        const random = Math.floor(Math.random() * count);
        return this.questionModel.findOne({ topic, difficulty }).skip(random).exec();
    }

    async count(): Promise<number> {
        return this.questionModel.countDocuments().exec();
    }
}
