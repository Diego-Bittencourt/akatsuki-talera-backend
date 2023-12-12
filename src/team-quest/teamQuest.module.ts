import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TeamQuest } from "./entity/teamQuest.entity";
import { TeamQuestController } from "./teamQuest.controller";
import { TeamQuestService } from "./teamQuest.service";
import { PlayersService } from "../online-players/players.service";
import { PlayersModule } from "../online-players/players.module";
import { QuestModule } from "../quest/quest.module";

@Module({
    imports: [TypeOrmModule.forFeature([TeamQuest]), PlayersModule, QuestModule],
    exports: [TypeOrmModule],
    controllers: [TeamQuestController],
    providers: [TeamQuestService]
})


export class TeamQuestModule {}