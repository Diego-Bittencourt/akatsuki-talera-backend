import { ForbiddenException, Injectable } from '@nestjs/common';
import { AddQuestDto } from './dto/addQuest.dto';
import { Quest } from './entity/quest.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateQuestDto } from './dto/updateQuest.dto';
import { QuestIdDto } from './dto/questId.dto';

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
        Min: dto.teamMin,
        Max: dto.teamMax,
        Blokers: dto.teamBlokers,
        Healers: dto.teamHealers,
        Shooters: dto.teamShooters
      },
      level: {
        Knight: dto.levelKnight,
        Druid: dto.levelDruid,
        Paladin: dto.levelPaladin,
        Sorcerer: dto.levelSorcerer
      },
      spoilerLink: dto.spoilerLink,
    }

    return await this.quest.save(newQuest);
    // return 'success'
  }

  async getQuestById(questId: number) {
    return this.quest.findOne({
      where: {
        id: questId
      }
    });
  }

  async updateQuest(dto: UpdateQuestDto) {
    const { questId, updateType } = dto
    delete dto.questId
    delete dto.updateType

    const isValid = await this.quest.findOne({
      where: {
        id: questId
      }
    })

    if (!isValid?.id) {
      throw new ForbiddenException('Quest nao existe')
    } 

    if (updateType === 'basic') {

      delete isValid.level;
      delete isValid.team;
 
      const data = {
        questName: dto.questName,
        questSection: dto.questSection,
        timeToFinnish: dto.timeToFinnish,
        spoilerLink: dto.spoilerLink
      }

      return await this.quest.update(questId, data)
    } else if (updateType === 'team') {
      const data = {
        team: {
        Min: dto.teamMin,
        Max: dto.teamMax,
        Blokers: dto.teamBlokers,
        Healers: dto.teamHealers,
        Shooters: dto.teamShooters
        }
      }

      return await this.quest.update(questId, data);
    } else if (updateType === 'level') {
      const data = {
        level:  {
          Knight: dto.levelKnight,
          Paladin: dto.levelPaladin,
          Druid: dto.levelDruid,
          Sorcerer: dto.levelSorcerer
        }
      };
      
      return await this.quest.update(questId, data)
    } else {
      throw new ForbiddenException('Tipo de update incorreto')
    }
     
    return await this.quest.findOne({where: { id: questId}});
  }

  async deleteQuest(questId: number) {
    const isValid = await this.quest.findOne({where: { id: questId }})
    
    if (!isValid?.id) {
      throw new ForbiddenException('Quest nao existe')
    }
    return await this.quest.delete({ id: questId });
  }
}
