import { Module } from '@nestjs/common';
import { onlinePlayersModule } from './online-players/onlinePlayers.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import { TypeOrmModuleConfig } from './types/types'
import { QuestModule } from './quest/quest.module';
import { DataSource } from 'typeorm';
import { BossModule } from './boss/boss.module';
import { TeamQuestModule } from './team-quest/teamQuest.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(TypeOrmModuleConfig),
    onlinePlayersModule,
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
