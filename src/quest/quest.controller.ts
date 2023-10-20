import { Controller, Get, Body, Post } from "@nestjs/common";
import { QuestService } from "./quest.service";
import { AddQuestDto } from "./dto/addQuest.dto";




@Controller('quest')
export class QuestController {
    constructor(private questService: QuestService) {}


    @Get('list')
    getQuestList() {
        return this.questService.getQuestList()
    }

    @Post('list')
    addQuest(@Body() dto: AddQuestDto) {
        return this.questService.addQuest(dto)
    }
}
