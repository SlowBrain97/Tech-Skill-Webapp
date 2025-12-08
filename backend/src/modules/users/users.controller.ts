import { Controller, Get, Put, Post, Body, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from './users.service';

@Controller('user')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @UseGuards(AuthGuard('jwt'))
    @Get('settings')
    async getSettings(@Request() req) {
        const user = await this.usersService.findOne(req.user.email);
        return user?.settings || {};
    }

    @UseGuards(AuthGuard('jwt'))
    @Put('settings')
    async updateSettings(@Request() req, @Body() settings: any) {
        const user = await this.usersService.findOne(req.user.email);
        if (user) {
            const updatedSettings = await this.usersService.updateSettings(user._id.toString(), settings);
            return updatedSettings;
        }
        return null;
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('completed-questions')
    async getCompletedQuestions(@Request() req) {
        const user = await this.usersService.findOne(req.user.email);
        if (user) {
            return await this.usersService.getCompletedQuestions(user._id.toString());
        }
        return [];
    }

    @UseGuards(AuthGuard('jwt'))
    @Post('completed-questions')
    async addCompletedQuestion(@Request() req, @Body() body: { questionId: string }) {
        const user = await this.usersService.findOne(req.user.email);
        if (user) {
            await this.usersService.addCompletedQuestion(user._id.toString(), body.questionId);
            return { success: true };
        }
        return { success: false };
    }

    @UseGuards(AuthGuard('jwt'))
    @Post('completed-questions/sync')
    async syncCompletedQuestions(@Request() req, @Body() body: { questions: Array<{ questionId: string; completedAt: Date }> }) {
        const user = await this.usersService.findOne(req.user.email);
        if (user) {
            await this.usersService.syncCompletedQuestions(user._id.toString(), body.questions);
            return { success: true };
        }
        return { success: false };
    }
}
