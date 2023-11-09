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
    return await 'boss by id';
  }

  async getBossList() {
    return await 'all bosses';
  }

  async createBoss(dto: CreateBossDto) {
    return await 'boss created';
  }

  async updateBoss(dto: UpdateBossDto) {
    return await 'boss updated';
  }

  async deleteBoss(id: number) {
    return await 'boss deleted';
  }
}
