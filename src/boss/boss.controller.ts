import { Controller, Query, Body, Get, Post, Patch, Delete } from "@nestjs/common";
import { CreateBossDto } from "./dto/createBoss.dto";
import { UpdateBossDto } from "./dto/updateBoss.dto"



@Controller('boss')
export class BossController {
    constructor() {}

    @Get()
    async getBossById(@Query('id') id: number) {
        return await 'boss by id'
    }

    @Get('all') 
    async getBossList() {
        return await 'all bosses'
    } 

    @Post()
    async createBoss(@Body() dto: CreateBossDto) {
        return await 'boss created'
    }

    @Patch()
    async updateBoss(@Body() dto: UpdateBossDto) {
        return await 'boss updated'
    }

    @Delete() 
    async deleteBoss() {
        return await 'boss deleted'
    }
    
}