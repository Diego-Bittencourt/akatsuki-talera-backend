import { Level } from "../../types/minimumLevel"
import { IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator'
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
    team: Team
    
    @IsNotEmpty()
    minimumLevel: Level

    @IsString()
    @IsOptional()
    spoilerLink: string
}