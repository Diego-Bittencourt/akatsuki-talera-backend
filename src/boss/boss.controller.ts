import { Controller, Query, Body, Get, Post, Patch, Delete } from "@nestjs/common";
import { CreateBossDto } from "./dto/createBoss.dto";
import { UpdateBossDto } from "./dto/updateBoss.dto";
import { BossService } from "./boss.service";
import { BossIdDto } from "./dto/bossId.dto";



@Controller('boss')
export class BossController {
    constructor(private bossService: BossService) {}

    @Get()
    async getBossById(@Query() id: BossIdDto) {
        return await this.bossService.getBossById(id);
    }

    @Get('all') 
    async getBossList() {
        return await this.bossService.getBossList();
    } 

    @Post()
    async createBoss(@Body() dto: CreateBossDto) {
        return await this.bossService.createBoss(dto);
    }

    @Patch()
    async updateBoss(@Body() dto: UpdateBossDto) {
        return await this.bossService.updateBoss(dto);
    }

    @Delete() 
    async deleteBoss(@Body('bossId') bossId: number) {
        return await this.bossService.deleteBoss(bossId);
    }
    
}