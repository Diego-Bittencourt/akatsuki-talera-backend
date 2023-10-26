import { Injectable } from "@nestjs/common";
import { AddQuestDto } from "./dto/addQuest.dto";
import { Quest } from './entity/quest.entity'
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";


@Injectable()
export class QuestService {
    constructor(
        @InjectRepository(Quest)
        public quest: Repository<Quest>
    ) {}

    async getQuestList() {
        return this.quest.find()
    }

    async addQuest(dto: AddQuestDto) {
        return this.quest.create(dto)
    }

    async getQuestById(questId: number) {
        return this.quest.find({
            where: {
                id: questId
            }
        })
    }
}