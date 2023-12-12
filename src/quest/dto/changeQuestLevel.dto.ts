import { IsNotEmpty, IsNumber } from "class-validator";

export class ChangeQuestLevel {

    @IsNotEmpty()
    @IsNumber()
    questId: number

    @IsNumber()
    knight: number

    @IsNumber()
    paladin: number

    @IsNumber()
    sorcerer: number

    @IsNumber()
    druid: number
}