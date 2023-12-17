import { Controller, Get, Post, Body, Patch, Delete, Query, Param } from "@nestjs/common";
import { TeamService } from "./team.service";
import { CreateTeamDto } from "./dto/createTeam.dto";

@Controller('team')
export class TeamController {
    constructor(
        private teamService: TeamService
        ) {}

    @Get('list')
    async getTeamList() {
        return await this.teamService.getTeamList();
    }

    @Post('create')
    async createTeam(@Body() dto: CreateTeamDto) {
        return await this.teamService.createTeam(dto);
    }

    @Post('add-player')
    async addPlayerToTeam(@Body('id') id: number, @Body('player') player: string, @Body('position') position: string) {
        return await this.teamService.addPlayerToTeam(id, player, position)
    }

    @Post('update-date')
    async changeDate(@Body('id') id: number, @Body('new-date') newDate: string) {
        return await this.teamService.changeDate(id, newDate)
    }

    @Delete('player') 
    async removePlayer(@Body('id') id: number, @Body('player') player: string) {
        return await this.teamService.removePlayer(id, player);
    }

    @Get(':id')
    async findQuestById(@Param() params: any) {
        return await this.teamService.findQuestById(params.id)
    }

    @Delete(':id')
    async deleteTeamById(@Param() params: any) {
        return await this.teamService.deleteTeamById(params.id)
    }
    
}
