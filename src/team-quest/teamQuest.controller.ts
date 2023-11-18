import { Controller, Get, Post, Body, Patch, Delete, Query } from "@nestjs/common";
import { TeamQuestService } from "./teamQuest.service";
import { CreateTeamQuestDto } from "./dto/createTeamQuest.dto";

@Controller('team-quest')
export class TeamQuestController {
    constructor(private teamQuestService: TeamQuestService) {}

    @Get('list')
    async getTeamQuestList() {
        return await this.teamQuestService.getTeamQuestList();
    }

    @Post('create')
    async createTeamQuest(@Body() dto: CreateTeamQuestDto) {
        return this.teamQuestService.createTeamQuest(dto);
    }

    @Post('add-player')
    async addPlayerToTeamQuest(@Body('id') id: number, @Body('player') player: string) {
        return this.teamQuestService.addPlayerToTeamQuest(id, player)
    }
}
