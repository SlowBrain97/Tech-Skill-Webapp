import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type QuestionDocument = Question & Document;

@Schema()
class ContentDetail {
    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    body: string;

    @Prop({ required: true })
    solution: string;
}

@Schema()
class MultiLangContent {
    @Prop({ type: ContentDetail, required: true })
    en: ContentDetail;

    @Prop({ type: ContentDetail, required: true })
    jp: ContentDetail;

    @Prop({ type: ContentDetail, required: true })
    vi: ContentDetail;
}

@Schema({ timestamps: true })
export class Question {
    @Prop({ required: true })
    topic: string; // e.g., 'js', 'react', 'node'

    @Prop({ required: true, enum: ['fresher', 'junior', 'middle', 'senior'] })
    difficulty: string;

    @Prop([String])
    tags: string[];

    @Prop({ type: MultiLangContent, required: true })
    content: MultiLangContent;
}

export const QuestionSchema = SchemaFactory.createForClass(Question);
