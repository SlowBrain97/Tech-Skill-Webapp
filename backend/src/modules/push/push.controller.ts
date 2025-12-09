import { Controller, Post, Put, Delete, Body, Param, HttpCode, HttpStatus } from '@nestjs/common';
import { SubscribersService } from '../subscribers/subscribers.service';
import { PushService } from './push.service';
import { SubscribeDto, UpdateSettingsDto } from '../subscribers/subscriber.dto';
import { Logger } from '@nestjs/common';

@Controller('api/push')
export class PushController {
    private readonly logger = new Logger(PushController.name);
    constructor(
        private subscribersService: SubscribersService,
        private pushService: PushService,
    ) { }

    /**
     * Subscribe a device to push notifications
     */
    @Post('subscribe')
    async subscribe(@Body() dto: SubscribeDto) {
        const subscriber = await this.subscribersService.subscribe(dto);
        this.logger.log(`Subscribed device: ${subscriber.deviceUUID}`);
        return {
            success: true,
            deviceUUID: subscriber.deviceUUID,
        };
    }

    /**
     * Update device settings
     */
    @Put('settings/:uuid')
    async updateSettings(
        @Param('uuid') uuid: string,
        @Body() dto: UpdateSettingsDto,
    ) {
        const subscriber = await this.subscribersService.updateSettings(uuid, dto);
        if (!subscriber) {
            return { success: false, message: 'Subscriber not found' };
        }
        return { success: true };
    }

    /**
     * Unsubscribe a device
     */
    @Delete('unsubscribe/:uuid')
    @HttpCode(HttpStatus.OK)
    async unsubscribe(@Param('uuid') uuid: string) {
        const success = await this.subscribersService.unsubscribe(uuid);
        return { success };
    }

    /**
     * Test push notification (for debugging)
     */
    @Post('test/:uuid')
    async testPush(@Param('uuid') uuid: string) {
        const success = await this.pushService.testPush(uuid);
        return { success };
    }
}
