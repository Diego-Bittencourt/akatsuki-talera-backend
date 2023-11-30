import { Controller, Get, Query } from "@nestjs/common";
import { PlayersService } from "./players.service";


@Controller('player')
export class PlayersController {
    constructor(private playersService: PlayersService) {}

    @Get('online')
    async getOnlinePlayers(@Query('guildName') guildName: string | null) {

        return await this.playersService.getPlayersOnline(guildName || 'akatsuki')
    }

    @Get()
    async getPlayerInfo(@Query('playerName') playerName: string) {
        return await this.playersService.playerInfo(playerName)
    }
} 