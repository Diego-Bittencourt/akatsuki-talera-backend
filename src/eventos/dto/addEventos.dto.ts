import { IsString, IsNotEmpty, IsNumber, ValidateIf, IsEnum } from "class-validator"
import { eventoType } from "../../types/eventoType"

export class AddEventosDto {

    @IsNotEmpty()
    @IsString()
    eventoName: string

    @IsString()
    eventoSection: string

    @IsNotEmpty()
    @IsNumber()
    timeToFinnish: number 
    //minutes

    @IsString()
    spoilerLink: string

    @IsString()
    @IsEnum(eventoType)
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

    @IsNumber()
    levelKnight: number

    @IsNumber()
    levelPaladin: number

    @IsNumber()
    levelSorcerer: number

    @IsNumber()
    levelDruid: number

}