import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { QuestionsModule } from './modules/questions/questions.module';
import { AdminModule } from './modules/admin/admin.module';
import { SubscribersModule } from './modules/subscribers/subscribers.module';
import { PushModule } from './modules/push/push.module';
import { TopicsModule } from './modules/topics/topics.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost:27017/tech-skill-notification'),
    ScheduleModule.forRoot(),
    AuthModule,        // Keep for admin auth
    QuestionsModule,   // Keep for CRUD questions
    AdminModule,       // Keep for admin dashboard
    SubscribersModule, // New: device subscriptions
    PushModule,        // New: push notifications with cron
    TopicsModule,      // New: topics management
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

