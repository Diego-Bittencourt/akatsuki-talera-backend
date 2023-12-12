import { ForbiddenException, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TeamQuest } from "./entity/teamQuest.entity"
import { Repository, getRepository } from 'typeorm';
import { CreateTeamQuestDto } from './dto/createTeamQuest.dto';
import { arrayParse } from '../helpers/arrayParse';
import { PlayersService } from '../online-players/players.service';
import { isNumber } from 'class-validator';
import { Quest } from '../quest/entity/quest.entity';
import { Connection } from 'mysql2/typings/mysql/lib/Connection';


@Injectable()
export class TeamQuestService {
    constructor(
        @InjectRepository(TeamQuest)
        private teamQuest: Repository<TeamQuest>,
        @Inject(PlayersService)
        private playerService: PlayersService,
        @InjectRepository(Quest)
        private quest: Repository<Quest>
    ) {}

    async getTeamQuestList() {
        const teamList = await this.teamQuest.find({
            relations: ['quest']
        });

        teamList.forEach((team) => {
            team.blokers = JSON.parse(team.blokers)
            team.healers = JSON.parse(team.healers)
            team.shooters = JSON.parse(team.shooters)
        })

        return teamList

    }

    async createTeamQuest(dto: CreateTeamQuestDto) {
        const {questId, date, teamMembers, notes} = dto;

        const quest = await this.quest.findOne({
            where: {
                id: questId
            }
        })

        // fetching data for the players in the list 
        const teamHealers = await Promise.all(teamMembers.healers.map(async (healer) => {
            return await this.playerService.playerInfo(healer);

        }))
        
        const teamBlokers = await Promise.all(teamMembers.blokers.map( async (bloker) => {
            return await this.playerService.playerInfo(bloker);
        }))

        const teamShooters = await Promise.all(teamMembers.shooters.map( async (shooter) => {
            return await this.playerService.playerInfo(shooter);
        }))
        
        //checking if the team members match the level and number of players
        if (teamBlokers.length > quest.team.blokers && quest.team.blokers !== null) {
            throw new ForbiddenException('Numero de blokers esta acima do pertmitido');
        }

        if (teamHealers.length > quest.team.healers && quest.team.healers !== null) {
            throw new ForbiddenException('Numero de healers esta acima do permitido');
        }

        if (teamShooters.length > quest.team.shooters && quest.team.shooters !== null) {
            throw new ForbiddenException('Numero de shooters esta acima do permitido');
        }

        const wholeTeam = [...teamBlokers, ...teamHealers, ...teamShooters]
        
        if (wholeTeam.length > quest.team.max && quest.team.max !== null) {
            throw new ForbiddenException('Time tem mais players que o limite');
        }

        //checking if the array has repetitive members
        const teamNames = wholeTeam.map(player => player.name)
        if (teamNames.length !== new Set(teamNames).size) {
            throw new ForbiddenException('Tem clone no time? O mesmo player ta repetido')
        }

        //checking for player levels
        wholeTeam.forEach((player) => {
            
            let vocation: string;
            switch(player.vocation) {
                case 'Druid':
                case 'Elder Druid':
                    vocation = 'druid';
                    break;
                case 'Elite Knight':
                case 'Knight':
                    vocation = 'knight';
                    break;
                case 'Royal Paladin':
                case 'Paladin':
                    vocation = 'paladin';
                    break;
                case 'Master Sorcerer':
                case 'Sorcerer':
                    vocation = 'sorcerer';
                    break;
            }

            if(player.level < quest.level[vocation] || player.name === "") {
                throw new ForbiddenException(`O level de ${player.name} e menor que o recomendado`);
            }


        })

        const data = {
            questId,
            date: new Date(date),
            healers: JSON.stringify(teamMembers.healers),
            blokers: JSON.stringify(teamMembers.blokers),
            shooters: JSON.stringify(teamMembers.shooters),
            notes,
            quest
        }
        return await this.teamQuest.save(data)
    }

    async addPlayerToTeamQuest(id: number, player: string, position: string) {
        const teamQuest = await this.teamQuest.findOne({where: { id }});
        const quest = await this.quest.findOne({where: { id: teamQuest.questId}});
        const playerExists = await this.playerService.playerInfo(player);

        let playerVocation: string;

        switch(playerExists.vocation) {
            case 'Druid':
            case 'Elder Druid':
                playerVocation = 'druid';
                break;
            case 'Elite Knight':
            case 'Knight':
                playerVocation = 'knight';
                break;
            case 'Royal Paladin':
            case 'Paladin':
                playerVocation = 'paladin';
                break;
            case 'Master Sorcerer':
            case 'Sorcerer':
                playerVocation = 'sorcerer';
                break;
        }

        if(playerExists.level < quest.level[playerVocation]) {
            throw new ForbiddenException('Level do player nao e suficiente')
        }


        
        if (playerExists?.level === 0 ||
            playerExists?.name === "") {
                throw new ForbiddenException('Player não existe.')
            }

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
        console.log(data[position].length, "and", quest.team[position])
        if (data[position].length > quest.team[position] && quest.team[position] !== null) {
            throw new ForbiddenException('Nao tem mais espaco nesse time.')
        }


        return await this.teamQuest.update(id, {[position]: JSON.stringify([...data[position]])})
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

        const healers = arrayParse(team.healers)
        const blokers = arrayParse(team.blokers)
        const shooters = arrayParse(team.shooters)

        const filteredHealers = healers.filter((p) => p !== player)
        const filteresBlokers = blokers.filter((p) => p !== player)
        const filteredShooters = shooters.filter((p) => p !== player)

        return await this.teamQuest.update(id, {
            healers: JSON.stringify(filteredHealers),
            blokers: JSON.stringify(filteresBlokers),
            shooters: JSON.stringify(filteredShooters)
        });
    }

    async findQuestById(itemId: number) {
        const teamQuest = await this.teamQuest.findOne({
            where: {
                id: itemId
            },
            relations: ['quest']
        })

        const {id, questId, date, notes, quest } = teamQuest

        const healers = arrayParse(teamQuest.healers)
        const blokers = arrayParse(teamQuest.blokers)
        const shooters = arrayParse(teamQuest.shooters)

        const fullHealers = await Promise.all(healers.map(async (player) => {
            return await this.playerService.playerInfo(player)
        }))

        const fullBlokers = await Promise.all(blokers.map(async (player) => {
            return await this.playerService.playerInfo(player)
        }))

        const fullShooters = await Promise.all(shooters.map(async (player) => {
            return await this.playerService.playerInfo(player)
        }))

        return {
            id,
            questId,
            notes,
            date,
            team: {
                shooters: fullShooters,
                healers: fullHealers,
                blokers: fullBlokers
            },
            quest
        }
    }

    async deleteTeamQuestById(id: number) {
        return await this.teamQuest.delete(id)
    }
    
}