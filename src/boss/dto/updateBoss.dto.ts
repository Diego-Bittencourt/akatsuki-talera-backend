import { minimumLevel } from "../../types/minimumLevel"
import { IsNotEmpty, IsString, IsNumber } from 'class-validator'
import { numberOfPlayers } from "../../types/numberOfPlayers"

export class UpdateBossDto {

    @IsNumber()
    @IsNotEmpty()
    bossId: number

    @IsNotEmpty()
    @IsString()
    bossName: string
    
    @IsNumber()
    @IsNotEmpty()
    estimatedTime: number 
    //minutes

    @IsNotEmpty()
    numberOfPlayers: numberOfPlayers

    @IsString()
    spoilerLink: string
    
    @IsNotEmpty()
    minimumLevel: minimumLevel
}


