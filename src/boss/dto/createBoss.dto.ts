import { minimumLevel } from "../../types/minimumLevel"
import { IsNotEmpty, IsString, IsNumber } from 'class-validator'
import { numberOfPlayers } from "../../types/numberOfPlayers"

export class CreateBossDto {


    @IsNotEmpty()
    @IsString()
    bossName: string
    
    @IsNumber()
    @IsNotEmpty()
    estimatedTime: number 
    //minutes

    @IsNotEmpty()
    numberOfPlayers: numberOfPlayers
    
    @IsNotEmpty()
    minimumLevel: minimumLevel

    @IsString()
    spoilerLink: string
}