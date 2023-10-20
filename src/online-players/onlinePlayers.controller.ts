import { Controller, Get, Query } from "@nestjs/common";
import { OnlinePlayersService } from "./onlinePlayers.service";


@Controller('online')
export class OnlinePlayersController {
    constructor(private onlinePlayersService: OnlinePlayersService) {}

    @Get()
    getOnlinePlayers(@Query('guildName') guildName: string | null) {

        return this.onlinePlayersService.getPlayersOnline(guildName || 'akatsuki')
    }
} 