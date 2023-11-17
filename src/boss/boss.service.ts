import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Boss } from './entity/boss.entity';
import { CreateBossDto } from './dto/createBoss.dto';
import { UpdateBossDto } from './dto/updateBoss.dto';

@Injectable()
export class BossService {
  constructor(
    @InjectRepository(Boss)
    private boss: Repository<Boss>,
  ) {}

  
  async getBossById(id: number) {
    return await this.boss.find({
      where: {
        id
      }
    });
  }

  async getBossList() {
    return await this.boss.find();
  }

  async createBoss(dto: CreateBossDto) {
    return await this.boss.save(dto);
  }

  async updateBoss(dto: UpdateBossDto) {
    const id = dto.bossId;
    const data = {...dto};
    delete data.bossId;
    return await this.boss.update(id, data);
  }

  async deleteBoss(id: number) {
    return await this.boss.delete(id);
  }
}
