import { Level } from "../../types/minimumLevel"
import { IsNotEmpty, IsString, IsNumber } from 'class-validator'
import { Team } from "../../types/numberOfPlayers"

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
    numberOfPlayers: Team

    @IsString()
    spoilerLink: string
    
    @IsNotEmpty()
    minimumLevel: Level
}


