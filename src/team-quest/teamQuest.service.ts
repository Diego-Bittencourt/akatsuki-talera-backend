import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TeamQuest } from "./entity/teamQuest.entity"
import { Repository } from 'typeorm';
import { CreateTeamQuestDto } from './dto/createTeamQuest.dto';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';
import { arrayParse } from '../helpers/arrayParse';


@Injectable()
export class TeamQuestService {
    constructor(
        @InjectRepository(TeamQuest)
        private teamQuest: Repository<TeamQuest>
    ) {}

    async getTeamQuestList() {
        return 'team quest list'
    }

    async createTeamQuest(dto: CreateTeamQuestDto) {
        const {questId, date, teamMembers, notes} = dto;

        const data = {
            questId,
            date: new Date(date),
            teamMembers: JSON.stringify({...teamMembers}),
            notes
        }
        return await this.teamQuest.save(data)
    }

    async addPlayerToTeamQuest(id: number, player: string) {
        const teamQuest = await this.teamQuest.findOne({where: { id }});

        if (!teamQuest) {
            throw new ForbiddenException('Time não encontrado.');
        }

        const data = arrayParse(teamQuest.teamMembers)

        if (data.includes(player)) {
            throw new ForbiddenException('O jogador já faz parte do time.')
        }
        data.push(player)


        return await this.teamQuest.update(id, {teamMembers: JSON.stringify({...data})})
    }
    
}