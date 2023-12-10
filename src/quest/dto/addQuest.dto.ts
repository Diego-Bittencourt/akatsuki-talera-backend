import { IsString, IsNotEmpty, IsNumber, ValidateIf, IsEnum } from "class-validator"

export class AddQuestDto {

    @IsNotEmpty()
    @IsString()
    questName: string

    @IsString()
    questSection: string

    @IsEnum({
        quest: 'quest',
        boss: 'boss',
        outro: 'outro'
    })
    type: string

    @IsNotEmpty()
    @IsNumber()
    teamMin: number

    @IsNotEmpty()
    @ValidateIf((object, value) => value !== null)
    @IsNumber()
    teamMax: number | null

    @IsNotEmpty()
    @ValidateIf((object, value) => value !== null)
    @IsNumber()
    teamBlokers: number | null

    @IsNotEmpty()
    @ValidateIf((object, value) => value !== null)
    @IsNumber()
    teamShooters: number | null

    @IsNotEmpty()
    @ValidateIf((object, value) => value !== null)
    @IsNumber()
    teamHealers: number | null

    @IsNotEmpty()
    @IsNumber()
    timeToFinnish: number 
    //minutes

    @IsNumber()
    levelKnight: number

    @IsNumber()
    levelPaladin: number

    @IsNumber()
    levelSorcerer: number

    @IsNumber()
    levelDruid: number

    @IsString()
    spoilerLink: string
}