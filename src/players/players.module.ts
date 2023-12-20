import { Module } from "@nestjs/common";
import { PlayersController } from "./players.controller";
import { PlayersService } from "./players.service";
import { HttpModule } from "@nestjs/axios";

@Module({
    imports: [HttpModule],
    controllers: [PlayersController],
    providers: [PlayersService],
    exports: [PlayersService]
})

export class PlayersModule {}