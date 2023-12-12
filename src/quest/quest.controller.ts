import { Controller, Get, Body, Post, Patch, Delete, Query, Param } from "@nestjs/common";
import { QuestService } from "./quest.service";
import { AddQuestDto } from "./dto/addQuest.dto";
import { UpdateQuestDto } from "./dto/updateQuest.dto";
import { ChangeQuestTeam } from "./dto/changeQuestTeam.dto";
import { ChangeQuestLevel } from "./dto/changeQuestLevel.dto";




@Controller('quest')
export class QuestController {
    constructor(private questService: QuestService) {}

    @Get()
    async getQuestById(@Query('id') id: number) {
        return await this.questService.getQuestById(id)
    }

    @Get('list')
    async getQuestList() {
        return await this.questService.getQuestList()
    }

    @Post('add')
    async addQuest(@Body() dto: AddQuestDto) {
        return await this.questService.addQuest(dto)
    }

    @Patch('update')
    async updateQuest(@Body() dto: UpdateQuestDto) {
        return await this.questService.updateQuest(dto)
    }

    @Patch('change-team')
    async changeQuestTeam(@Body() dto: ChangeQuestTeam) {
        return await this.questService.changeQuestTeam(dto)
    }

    @Patch('change-level')
    async changeQuestLevel(@Body() dto: ChangeQuestLevel) {
        return await this.questService.changeQuestLevel(dto)
    }
    
    @Delete() 
    async deleteQuest(@Body('questId') questId: number) {
        return await this.questService.deleteQuest(questId)
    }
    
}
