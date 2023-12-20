import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Team } from "./entity/team.entity";
import { TeamController } from "./team.controller";
import { TeamService } from "./team.service";
import { PlayersService } from "../players/players.service";
import { PlayersModule } from "../players/players.module";
import { EventosModule } from "../eventos/eventos.module";

@Module({
    imports: [TypeOrmModule.forFeature([Team]), PlayersModule, EventosModule],
    exports: [TypeOrmModule],
    controllers: [TeamController],
    providers: [TeamService]
})


export class TeamModule {}