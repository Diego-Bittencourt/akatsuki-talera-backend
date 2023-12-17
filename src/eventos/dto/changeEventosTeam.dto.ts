import { IsNotEmpty, IsNumber } from "class-validator";

export class ChangeEventosTeam {

    @IsNotEmpty()
    @IsNumber()
    eventoId: number

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