import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Boss } from './entity/boss.entity';
import { CreateBossDto } from './dto/createBoss.dto';
import { UpdateBossDto } from './dto/updateBoss.dto';
import { BossIdDto } from './dto/bossId.dto';

@Injectable()
export class BossService {
  constructor(
    @InjectRepository(Boss)
    private boss: Repository<Boss>,
  ) {}

  
  async getBossById(bossId: BossIdDto) {
    const { id } = bossId
    const boss =  await this.boss.find({
      where: {
        id
      }
    });


    if(boss.length !== 1) {
      throw new ForbiddenException('Boss não existe.')
    }

    return boss
  }

  async getBossList() {
    return await this.boss.find();
  }

  async createBoss(dto: CreateBossDto) {

    //I need to create some verifications here.

    //create a verification to check if the boss already exists


    //create a verification if the team number match.



    return await this.boss.save(dto);
  }

  async updateBoss(dto: UpdateBossDto) {

    //add some verifications here

    //check if the team numbers match


    //check if the boss name already exists


    
    const id = dto.bossId;
    const data = {...dto};
    delete data.bossId;
    return await this.boss.update(id, data);
  }

  async deleteBoss(id: number) {
    return await this.boss.delete(id);
  }
}
