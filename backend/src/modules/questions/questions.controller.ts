import { Controller, Get, Post, Body, Query, UseGuards } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('questions')
export class QuestionsController {
    constructor(private readonly questionsService: QuestionsService) { }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    create(@Body() createQuestionDto: any) {
        return this.questionsService.create(createQuestionDto);
    }

    @Get()
    findAll() {
        return this.questionsService.findAll();
    }

    @Get('random')
    findRandom(
        @Query('topic') topic: string,
        @Query('difficulty') difficulty: string,
        @Query('language') language: string,
    ) {
        return this.questionsService.findRandom(topic, difficulty, language);
    }

    @Get('count')
    async getCount() {
        return { count: await this.questionsService.count() };
    }
}
