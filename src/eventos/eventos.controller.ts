import { Controller, Get, Body, Post, Patch, Delete, Query, Param } from "@nestjs/common";
import { EventosService } from "./eventos.service";
import { AddEventosDto } from "./dto/addEventos.dto";
import { UpdateEventosDto } from "./dto/updateEventos.dto";
import { ChangeEventosTeam } from "./dto/changeEventosTeam.dto";
import { ChangeEventosLevel } from "./dto/changeEventosLevel.dto";




@Controller('eventos')
export class EventosController {
    constructor(private eventosService: EventosService) {}

    @Get()
    async getEventoById(@Query('id') id: number) {
        return await this.eventosService.getEventoById(id)
    }

    @Get('list')
    async getQuestList() {
        return await this.eventosService.getEventosList()
    }

    @Post('add')
    async addQuest(@Body() dto: AddEventosDto) {
        return await this.eventosService.addEvento(dto)
    }

    @Patch('update')
    async updateQuest(@Body() dto: UpdateEventosDto) {
        return await this.eventosService.updateEvento(dto)
    }

    @Patch('change-team')
    async changeQuestTeam(@Body() dto: ChangeEventosTeam) {
        return await this.eventosService.changeEventoTeam(dto)
    }

    @Patch('change-level')
    async changeQuestLevel(@Body() dto: ChangeEventosLevel) {
        return await this.eventosService.changeEventoLevel(dto)
    }
    
    @Delete() 
    async deleteQuest(@Body('eventoId') eventoId: number) {
        return await this.eventosService.deleteEvento(eventoId)
    }
    
}
