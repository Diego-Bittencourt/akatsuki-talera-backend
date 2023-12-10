import { ForbiddenException, Injectable } from '@nestjs/common';
import { AddQuestDto } from './dto/addQuest.dto';
import { Quest } from './entity/quest.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateQuestDto } from './dto/updateQuest.dto';
import { QuestIdDto } from './dto/questId.dto';
import { ChangeQuestTeam } from './dto/changeQuestTeam.dto';
import { ChangeQuestLevel } from './dto/changeQuestLevel.dto';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';

@Injectable()
export class QuestService {
  constructor(
    // @InjectRepository(QuestRepository)
    // private questRepository: QuestRepository,

    @InjectRepository(Quest)
    private quest: Repository<Quest>,
  ) {}

  async getQuestList() {
    return await this.quest.find();
  }

  async getQuestById(questId: number) {
    return this.quest.findOne({
      where: {
        id: questId,
      },
    });
  }

  async addQuest(dto: AddQuestDto) {
    //check if the same section already exists
    const alreadyRegistered = await this.quest.find({
      where: {
        questSection: dto.questSection,
      },
    });

    if (alreadyRegistered.length) {
      throw new ForbiddenException('A quest ja foi registrada');
    }

    const newQuest = {
      questName: dto.questName,
      questSection: dto.questSection,
      timeToFinnish: dto.timeToFinnish,
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

    return await this.quest.save(newQuest);
    // return 'success'
  }

 async doesQuestExist(id: number) {
  const isValid = await this.quest.findOne({
    where: {
      id
    },
  });

  return !isValid?.id

 }

  async updateQuest(dto: UpdateQuestDto) {
    const { questId } = dto;
    delete dto.questId;

   if(this.doesQuestExist) { throw new ForbiddenException('Quest nao existe') }

    return await this.quest.update(questId, {...dto});
  }

  async changeQuestTeam(dto: ChangeQuestTeam) {
    const { questId } = dto;
    delete dto.questId;

    if(this.doesQuestExist) { throw new ForbiddenException('Quest nao existe') }

    return await this.quest.update(questId, {team: {...dto}})

  }

  async changeQuestLevel(dto: ChangeQuestLevel) {
    const { questId } = dto;
    delete dto.questId;

    if(this.doesQuestExist) { throw new ForbiddenException('Quest nao existe') }

    return await this.quest.update(questId, {level: {...dto}})

  }

  async deleteQuest(questId: number) {
    const isValid = await this.quest.findOne({ where: { id: questId } });

    if (!isValid?.id) {
      throw new ForbiddenException('Quest nao existe');
    }
    return await this.quest.delete({ id: questId });
  }
}
