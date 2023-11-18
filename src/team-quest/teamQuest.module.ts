import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TeamQuest } from "./entity/teamQuest.entity";
import { TeamQuestController } from "./teamQuest.controller";
import { TeamQuestService } from "./teamQuest.service";

@Module({
    imports: [TypeOrmModule.forFeature([TeamQuest])],
    exports: [TypeOrmModule],
    controllers: [TeamQuestController],
    providers: [TeamQuestService]
})


export class TeamQuestModule {}