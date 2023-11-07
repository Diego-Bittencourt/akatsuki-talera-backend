import { IsNotEmpty, IsString, IsNumber } from "class-validator"

export class UpdateQuestDto {

    @IsNumber()
    @IsNotEmpty()
    questId: number

    @IsNotEmpty()
    @IsString()
    questName: string

    @IsString()
    questSection: string

    @IsNotEmpty()
    @IsString()
    section: string

    @IsNotEmpty()
    @IsNumber()
    minPlayers: number

    @IsNotEmpty()
    @IsNumber()
    timeToFinnish: number 
    //minutes

    @IsNumber()
    levelRecommendedKnight: number

    @IsNumber()
    levelRecommendedPaladin: number

    @IsNumber()
    levelRecommendedSorcerer: number

    @IsNumber()
    levelRecommendedDruid: number

    @IsString()
    spoilerLink: string
}