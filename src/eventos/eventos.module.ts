import { Module } from "@nestjs/common";
import { EventosController } from "./eventos.controller";
import { EventosService } from "./eventos.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Evento } from './entity/evento.entity';
import { QuestRepository } from "./eventos.repository";


@Module({
    imports: [TypeOrmModule.forFeature([Evento])],
    exports: [TypeOrmModule],
    controllers: [EventosController],
    providers: [EventosService, QuestRepository]
})


export class EventosModule {}