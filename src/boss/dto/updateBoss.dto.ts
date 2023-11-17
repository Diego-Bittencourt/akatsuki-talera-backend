import { Level } from "../../types/minimumLevel"
import { IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator'
import { Team } from "../../types/numberOfPlayers"

export class UpdateBossDto {

    @IsNumber()
    @IsNotEmpty()
    bossId: number

    @IsOptional()
    @IsString()
    bossName: string
    
    @IsNumber()
    @IsOptional()
    estimatedTime: number 
    //minutes

    @IsOptional()
    team: Team

    @IsString()
    @IsOptional()
    spoilerLink: string
    
    @IsOptional()
    minimumLevel: Level
}


