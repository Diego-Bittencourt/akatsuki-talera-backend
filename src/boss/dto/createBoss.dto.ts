import { Level } from "../../types/level"
import { IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator'
import { Team } from "../../types/team"

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
    level: Level

    @IsString()
    @IsOptional()
    spoilerLink: string
}