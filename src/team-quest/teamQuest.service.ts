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
            healers: JSON.stringify(teamMembers.healers),
            blokers: JSON.stringify(teamMembers.blokers),
            shooters: JSON.stringify(teamMembers.shooters),
            notes
        }
        console.log(data)
        return await this.teamQuest.save(data)
    }

    async addPlayerToTeamQuest(id: number, player: string, position: string) {
        const teamQuest = await this.teamQuest.findOne({where: { id }});

        if (!teamQuest) {
            throw new ForbiddenException('Time não encontrado.');
        }

        const blokers = arrayParse(teamQuest.blokers);
        const healers = arrayParse(teamQuest.healers);
        const shooters = arrayParse(teamQuest.shooters);

        if (
            blokers.includes(player) ||
            shooters.includes(player) ||
            healers.includes(player)
            ) {
            throw new ForbiddenException('O jogador já faz parte do time.')
        }


        const data = {
            blokers, 
            shooters,
            healers
        }
        data[position].push(player)


        return await this.teamQuest.update(id, {[position]: JSON.stringify({...data[position]})})
    }

    async changeDate(id: number, date: string) {

        const dateNow = new Date();
        const scheduledDate = new Date(date);

        if (scheduledDate.getTime() <= dateNow.getTime()) {
            throw new ForbiddenException('Data inválida.');
        };

        return await this.teamQuest.update(id, {date: scheduledDate});
        
    }

    async removePlayer(id: number, player: string) {
        const team = await this.teamQuest.findOne({where: {id}});

        console.log(team)
        const healers = arrayParse(team.healers)
        const blokers = arrayParse(team.blokers)
        const shooters = arrayParse(team.shooters)
        console.log(blokers)

        const filteredHealers = healers.filter((p) => p !== player)
        const filteresBlokers = blokers.filter((p) => p !== player)
        const filteredShooters = shooters.filter((p) => p !== player)

        console.log(filteresBlokers)

        return await this.teamQuest.update(id, {
            healers: JSON.stringify(filteredHealers),
            blokers: JSON.stringify(filteresBlokers),
            shooters: JSON.stringify(filteredShooters)
        });
    }
    
}