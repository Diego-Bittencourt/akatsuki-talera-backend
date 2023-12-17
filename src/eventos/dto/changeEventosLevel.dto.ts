import { IsNotEmpty, IsNumber } from "class-validator";

export class ChangeEventosLevel {

    @IsNotEmpty()
    @IsNumber()
    eventoId: number

    @IsNumber()
    knight: number

    @IsNumber()
    paladin: number

    @IsNumber()
    sorcerer: number

    @IsNumber()
    druid: number
}