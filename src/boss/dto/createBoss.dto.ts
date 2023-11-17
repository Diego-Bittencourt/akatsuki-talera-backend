import { Level } from "../../types/minimumLevel"
import { IsNotEmpty, IsString, IsNumber } from 'class-validator'
import { Team } from "../../types/numberOfPlayers"

export class CreateBossDto {


    @IsNotEmpty()
    @IsString()
    bossName: string
    
    @IsNumber()
    @IsNotEmpty()
    estimatedTime: number 
    //minutes

    @IsNotEmpty()
    numberOfPlayers: Team
    
    @IsNotEmpty()
    minimumLevel: Level

    @IsString()
    spoilerLink: string
}