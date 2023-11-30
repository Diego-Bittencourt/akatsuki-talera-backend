import { Controller, Get, Body, Post, Patch, Delete, Query } from "@nestjs/common";
import { QuestService } from "./quest.service";
import { AddQuestDto } from "./dto/addQuest.dto";
import { UpdateQuestDto } from "./dto/updateQuest.dto";
import { QuestIdDto } from "./dto/questId.dto";




@Controller('quest')
export class QuestController {
    constructor(private questService: QuestService) {}

    @Get()
    async getQuestById(@Query('id') id: QuestIdDto) {
        return await this.questService.getQuestById(id)
    }

    @Get('list')
    async getQuestList() {
        return await this.questService.getQuestList()
    }

    @Post()
    async addQuest(@Body() dto: AddQuestDto) {
        return await this.questService.addQuest(dto)
    }

    @Patch()
    async updateQuest(@Body() dto: UpdateQuestDto) {
        return await this.questService.updateQuest(dto)
    }
    
    @Delete() 
    async deleteQuest(@Body('questId') questId: number) {
        return await this.questService.deleteQuest(questId)
    }
    
}
