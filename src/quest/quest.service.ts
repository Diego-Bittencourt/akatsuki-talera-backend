import { Injectable } from "@nestjs/common";
import { AddQuestDto } from "./dto/addQuest.dto";


@Injectable()
export class QuestService {
    constructor() {}

    async getQuestList() {
        return 'list of quests'
    }

    async addQuest(dto: AddQuestDto) {
        return 'quest added'
    }
}