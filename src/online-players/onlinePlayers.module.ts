import { Module } from "@nestjs/common";
import { OnlinePlayersController } from "./onlinePlayers.controller";
import { OnlinePlayersService } from "./onlinePlayers.service";
import { HttpModule } from "@nestjs/axios";

@Module({
    imports: [HttpModule],
    controllers: [OnlinePlayersController],
    providers: [OnlinePlayersService]
})

export class onlinePlayersModule {}