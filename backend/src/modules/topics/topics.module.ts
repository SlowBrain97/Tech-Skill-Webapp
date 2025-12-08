import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TopicsController } from './topics.controller';
import { Topic, TopicSchema } from './topic.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Topic.name, schema: TopicSchema },
        ]),
    ],
    controllers: [TopicsController],
    exports: [MongooseModule],
})
export class TopicsModule { }
