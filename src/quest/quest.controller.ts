import { Controller, Get, Body, Post } from "@nestjs/common";
import { QuestService } from "./quest.service";
import { AddQuestDto } from "./dto/addQuest.dto";




@Controller('quest')
export class QuestController {
    constructor(private questService: QuestService) {}


    @Get()
    getTest() {
        return 'testing'
    }


    @Get('list')
    getQuestList() {
        return this.questService.getQuestList()
    }

    @Post('list')
    async addQuest(@Body() dto: AddQuestDto) {
        return await this.questService.addQuest(dto)
    }
}
