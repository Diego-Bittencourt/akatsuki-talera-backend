import { IsArray, IsNumber, IsObject, IsString } from "class-validator";
import { TeamPlayers } from "../../types/teamPlayers";

export class CreateTeamDto {

    @IsNumber()
    eventoId: number
    //foreign key to the eventos table

    @IsString()
    date: string

    @IsObject()
    teamMembers: TeamPlayers

    @IsString()
    notes: string
}