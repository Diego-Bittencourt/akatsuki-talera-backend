import { Module } from "@nestjs/common";
import { QuestController } from "./quest.controller";
import { QuestService } from "./quest.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Quest } from './entity/quest.entity';
import { QuestRepository } from "./quest.repository";


@Module({
    imports: [TypeOrmModule.forFeature([Quest])],
    exports: [TypeOrmModule],
    controllers: [QuestController],
    providers: [QuestService, QuestRepository]
})


export class QuestModule {}