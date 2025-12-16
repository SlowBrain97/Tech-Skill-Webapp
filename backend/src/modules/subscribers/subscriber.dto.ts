import { IsString, IsArray, IsNumber, IsOptional, IsObject, Min, Max, IsEnum } from 'class-validator';

export class PushSubscriptionKeysDto {
    @IsString()
    p256dh: string;

    @IsString()
    auth: string;
}

export class PushSubscriptionDto {
    @IsString()
    endpoint: string;

    @IsObject()
    keys: PushSubscriptionKeysDto;
}

export class SubscribeDto {
    @IsString()
    deviceUUID: string;

    @IsObject()
    pushSubscription: PushSubscriptionDto;

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    selectedTopics?: string[];

    @IsOptional()
    @IsEnum(['fresher', 'junior', 'middle', 'senior'])
    difficulty?: string;

    @IsOptional()
    @IsNumber()
    @Min(1)
    @Max(15)
    pushPerDay?: number;

    @IsOptional()
    @IsString()
    timeStart?: string;

    @IsOptional()
    @IsString()
    timeEnd?: string;

    @IsOptional()
    @IsString()
    timeZone?: string;
}

export class UpdateSettingsDto {
    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    selectedTopics?: string[];

    @IsOptional()
    @IsEnum(['fresher', 'junior', 'middle', 'senior'])
    difficulty?: string;

    @IsOptional()
    @IsNumber()
    @Min(1)
    @Max(15)
    pushPerDay?: number;

    @IsOptional()
    @IsString()
    timeStart?: string;

    @IsOptional()
    @IsString()
    timeEnd?: string;

    @IsOptional()
    @IsString()
    timeZone?: string;
}
