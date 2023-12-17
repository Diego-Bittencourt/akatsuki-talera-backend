import { ForbiddenException, Injectable } from '@nestjs/common';
import { AddEventosDto } from './dto/addEventos.dto';
import { Evento } from './entity/evento.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateEventosDto } from './dto/updateEventos.dto';
import { EventoIdDto } from './dto/eventoId.dto';
import { ChangeEventosTeam } from './dto/changeEventosTeam.dto';
import { ChangeEventosLevel } from './dto/changeEventosLevel.dto';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';

@Injectable()
export class EventosService {
  constructor(
    // @InjectRepository(QuestRepository)
    // private questRepository: QuestRepository,

    @InjectRepository(Evento)
    private evento: Repository<Evento>,
  ) {}

  async getEventosList() {
    return await this.evento.find();
  }

  async getEventoById(eventoId: number) {
    const eventoById = await this.evento.findOne({
      where: {
        id: eventoId,
      },
    });

    if (!eventoById?.id) {
      throw new ForbiddenException('Evento nao existe')
    }

    return eventoById;
  }

  async addEvento(dto: AddEventosDto) {
    //check if the same section already exists
    const alreadyRegistered = await this.evento.find({
      where: {
        eventoSection: dto.eventoSection,
      },
    });

    if (alreadyRegistered.length) {
      throw new ForbiddenException('O evento ja foi registrado');
    }

    const newQuest = {
      eventoName: dto.eventoName,
      eventoSection: dto.eventoSection,
      timeToFinnish: dto.timeToFinnish,
      type: dto.type,
      team: {
        min: dto.teamMin,
        max: dto.teamMax,
        blokers: dto.teamBlokers,
        healers: dto.teamHealers,
        shooters: dto.teamShooters,
      },
      level: {
        knight: dto.levelKnight,
        druid: dto.levelDruid,
        paladin: dto.levelPaladin,
        sorcerer: dto.levelSorcerer,
      },
      spoilerLink: dto.spoilerLink,
    };

    return await this.evento.save(newQuest);
    // return 'success'
  }

 async doesEventoExist(id: number) {
  const isValid = await this.evento.findOne({
    where: {
      id
    },
  });

  return !isValid?.id

 }

  async updateEvento(dto: UpdateEventosDto) {
    const { eventoId } = dto;
    delete dto.eventoId;

   if(await this.doesEventoExist(eventoId)) { throw new ForbiddenException('Evento nao existe') }

    return await this.evento.update(eventoId, {...dto});
  }

  async changeEventoTeam(dto: ChangeEventosTeam) {
    const { eventoId } = dto;
    delete dto.eventoId;

    if(await this.doesEventoExist(eventoId)) { throw new ForbiddenException('Evento nao existe') }

    return await this.evento.update(eventoId, {team: {...dto}})

  }

  async changeEventoLevel(dto: ChangeEventosLevel) {
    const { eventoId } = dto;
    delete dto.eventoId;

    if(await this.doesEventoExist(eventoId)) { throw new ForbiddenException('Quest nao existe') }

    return await this.evento.update(eventoId, {level: {...dto}})

  }

  async deleteEvento(eventoId: number) {
    
    if(await this.doesEventoExist(eventoId)) { throw new ForbiddenException('Quest nao existe') }

    return await this.evento.delete({ id: eventoId });
  }
}
