import { Injectable } from "@nestjs/common";
import { AddQuestDto } from "./dto/addQuest.dto";
import { Quest } from './entity/quest.entity'
import { InjectRepository } from "@nestjs/typeorm";
import { QuestRepository } from "./quest.repository";
import { Repository } from "typeorm";


@Injectable()
export class QuestService {
    constructor(
        // @InjectRepository(QuestRepository)
        // private questRepository: QuestRepository,

        @InjectRepository(Quest)
        private quest: Repository<Quest>
    ) {}

    async getQuestList() {
        return await this.quest.find();
    }

    async addQuest(dto: AddQuestDto) {
        console.log(dto)
        return await this.quest.save(dto);
        // return 'success'
    }

    async getQuestById(questId: number) {
        return this.quest.find({
            where: {
                id: questId
            }
        })
    }
}