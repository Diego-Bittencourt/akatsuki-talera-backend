import { IsString, IsNotEmpty, IsNumber } from "class-validator"
import { minimumLevel } from "../types"

export class AddQuestDto {

    @IsNotEmpty()
    @IsString()
    questName: string

    @IsString()
    questNick: string

    @IsNotEmpty()
    @IsString()
    section: string

    @IsNotEmpty()
    @IsNumber()
    minPlayers: number

    minimumLevel: minimumLevel

}