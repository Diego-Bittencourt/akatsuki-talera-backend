
import { Type } from 'class-transformer'
import { IsNotEmpty, IsNumber } from 'class-validator'


export class QuestIdDto {


    @IsNotEmpty()
    @Type(() => Number)
    @IsNumber()
    id: number
}