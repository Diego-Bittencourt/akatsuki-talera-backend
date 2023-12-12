import { IsNotEmpty, IsString, IsNumber, ValidateIf, IsEnum, IsOptional } from "class-validator"

export class UpdateQuestDto {

    @IsNotEmpty()
    @IsNumber()
    questId: number

    @IsOptional()
    @IsString()
    questName: string

    @IsOptional()
    @IsEnum({
        quest: 'quest',
        boss: 'boss',
        outro: 'outro'
    })
    type: string

    @IsOptional()
    @IsString()
    questSection: string

    @IsOptional()
    @IsNumber()
    timeToFinnish: number 
    //minutes

    @IsOptional()
    @IsString()
    spoilerLink: string
}