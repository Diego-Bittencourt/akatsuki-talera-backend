import { Controller, Get, Post, Body, Patch, Delete, Query, Param } from "@nestjs/common";
import { TeamQuestService } from "./teamQuest.service";
import { CreateTeamQuestDto } from "./dto/createTeamQuest.dto";
import { PlayersService } from "../online-players/players.service";

@Controller('team-quest')
export class TeamQuestController {
    constructor(
        private teamQuestService: TeamQuestService
        ) {}

    @Get('list')
    async getTeamQuestList() {
        return await this.teamQuestService.getTeamQuestList();
    }

    @Post('create')
    async createTeamQuest(@Body() dto: CreateTeamQuestDto) {
        return await this.teamQuestService.createTeamQuest(dto);
    }

    @Post('add-player')
    async addPlayerToTeamQuest(@Body('id') id: number, @Body('player') player: string, @Body('position') position: string) {
        return await this.teamQuestService.addPlayerToTeamQuest(id, player, position)
    }

    @Post('update-date')
    async changeDate(@Body('id') id: number, @Body('new-date') newDate: string) {
        return await this.teamQuestService.changeDate(id, newDate)
    }

    @Delete('player') 
    async removePlayer(@Body('id') id: number, @Body('player') player: string) {
        return await this.teamQuestService.removePlayer(id, player);
    }

    @Get(':id')
    async findQuestById(@Param() params: any) {
        return await this.teamQuestService.findQuestById(params.id)
    }
    
}
