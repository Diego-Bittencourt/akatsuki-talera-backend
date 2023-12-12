import { IsNotEmpty, IsNumber } from "class-validator";

export class ChangeQuestTeam {

    @IsNotEmpty()
    @IsNumber()
    questId: number

    @IsNumber()
    min: number

    @IsNumber()
    max: number

    @IsNumber()
    blokers: number
    
    @IsNumber()
    shooters: number

    @IsNumber()
    healers: number
}