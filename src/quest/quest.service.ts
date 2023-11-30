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

    return await this.quest.save(dto);
    // return 'success'
  }

  async getQuestById(questId: QuestIdDto) {

    const { id } = questId
    return this.quest.find({
      where: {
        id
      },
    });
  }

  async updateQuest(dto: UpdateQuestDto) {
    const id = dto.questId;
    const data = { ...dto };
    delete data.questId;
    return await this.quest.update(id, data);
  }

  async deleteQuest(id: number) {
    return await this.quest.delete({ id });
  }
}
