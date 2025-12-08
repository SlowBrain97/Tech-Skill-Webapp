import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TopicDocument = Topic & Document;

@Schema()
export class DisplayName {
    @Prop({ required: true })
    en: string;

    @Prop({ required: true })
    vi: string;

    @Prop({ required: true })
    jp: string;
}

@Schema({ timestamps: true })
export class Topic {
    @Prop({ required: true, unique: true })
    name: string;

    @Prop({ type: DisplayName })
    displayName: DisplayName;

    @Prop({ default: true })
    isActive: boolean;
}

export const TopicSchema = SchemaFactory.createForClass(Topic);
