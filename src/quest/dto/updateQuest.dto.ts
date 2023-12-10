import { IsNotEmpty, IsString, IsNumber, ValidateIf, IsEnum } from "class-validator"

export class UpdateQuestDto {

    @IsNotEmpty()
    @IsNumber()
    questId: number

    @IsString()
    questName: string

    @IsEnum({
        quest: 'quest',
        boss: 'boss',
        outro: 'outro'
    })
    type: string

    @IsString()
    questSection: string

    @IsNumber()
    timeToFinnish: number 
    //minutes

    @IsString()
    spoilerLink: string
}