import { Module } from '@nestjs/common';
import { PlayersModule } from './online-players/players.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import { TypeOrmModuleConfig } from './types/types'
import { QuestModule } from './quest/quest.module';
import { DataSource } from 'typeorm';
import { BossModule } from './boss/boss.module';
import { TeamQuestModule } from './team-quest/teamQuest.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(TypeOrmModuleConfig),
    PlayersModule,
    QuestModule,
    BossModule,
    TeamQuestModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
