import { IsArray, IsDate, IsNumber, IsString } from "class-validator";

export class CreateTeamQuestDto {

    @IsNumber()
    questId: number
    //foreign key to the quests table

    @IsString()
    date: string

    @IsArray()
    teamMembers: string[]

    @IsString()
    notes: string
}