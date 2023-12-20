import { Controller, Get, Query, Post, Body, Param } from "@nestjs/common";
import { PlayersService } from "./players.service";
import { HighscoreDto } from "./dto/highscore.dto";


@Controller('player')
export class PlayersController {
    constructor(private playersService: PlayersService) {}

    @Get('online')
    async getOnlinePlayers(@Query('guildName') guildName: string | null) {

        return await this.playersService.getPlayersOnline(guildName)
    }

    @Get('details')
    async getPlayerInfo(@Query('playerName') playerName: string) {
        return await this.playersService.playerInfo(playerName)
    }

    @Post('highscores')
    async getGuildHighscores(@Body() highscore: HighscoreDto) {
        return await this.playersService.getGuildHighscores(highscore)
    }

    @Get('statistics')
    async getGuildStatistics(@Query('guild') guild : string | null) {
        return await this.playersService.getGuildStatistics(guild)
    }
} 