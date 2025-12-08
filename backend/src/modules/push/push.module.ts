import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PushController } from './push.controller';
import { PushService } from './push.service';
import { SubscribersModule } from '../subscribers/subscribers.module';
import { Topic, TopicSchema } from '../topics/topic.schema';
import { Question, QuestionSchema } from '../questions/question.schema';

@Module({
    imports: [
        SubscribersModule,
        MongooseModule.forFeature([
            { name: Topic.name, schema: TopicSchema },
            { name: Question.name, schema: QuestionSchema },
        ]),
    ],
    controllers: [PushController],
    providers: [PushService],
    exports: [PushService],
})
export class PushModule { }
