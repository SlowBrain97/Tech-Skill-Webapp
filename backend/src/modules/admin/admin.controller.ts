import { Controller, Get, Post, Put, Delete, Body, Param, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AdminGuard } from './admin.guard';
import { AdminService } from './admin.service';

@Controller('admin')
@UseGuards(AuthGuard('jwt'), AdminGuard)
export class AdminController {
    constructor(private readonly adminService: AdminService) { }

    @Post('questions')
    async createQuestion(@Body() createQuestionDto: any) {
        return this.adminService.createQuestion(createQuestionDto);
    }

    @Get('questions')
    async getAllQuestions(
        @Query('topic') topic?: string,
        @Query('difficulty') difficulty?: string,
    ) {
        return this.adminService.getAllQuestions(topic, difficulty);
    }

    @Get('questions/:id')
    async getQuestionById(@Param('id') id: string) {
        return this.adminService.getQuestionById(id);
    }

    @Put('questions/:id')
    async updateQuestion(@Param('id') id: string, @Body() updateQuestionDto: any) {
        return this.adminService.updateQuestion(id, updateQuestionDto);
    }

    @Delete('questions/:id')
    async deleteQuestion(@Param('id') id: string) {
        return this.adminService.deleteQuestion(id);
    }

    @Get('statistics')
    async getStatistics() {
        return this.adminService.getStatistics();
    }
}
