import { IsArray, IsNumber, IsObject, IsString } from "class-validator";
import { TeamPlayers } from "../../types/teamPlayers";

export class CreateTeamQuestDto {

    @IsNumber()
    questId: number
    //foreign key to the quests table

    @IsString()
    date: string

    @IsObject()
    teamMembers: TeamPlayers

    @IsString()
    notes: string
}