import { minimumLevel } from "../../types/minimumLevel"
import { IsNotEmpty, IsString, IsNumber } from 'class-validator'

export class CreateBossDto {


    @IsNotEmpty()
    @IsString()
    bossName: string

    
    @IsNumber()
    @IsNotEmpty()
    estimatedTime: number

    @IsString()
    spoilerLink: string
    
    
    minimumLevel: minimumLevel
}