import { Module } from '@nestjs/common';
import { onlinePlayersModule } from './online-players/onlinePlayers.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import { TypeOrmModuleConfig } from './types/types'
import { QuestModule } from './quest/quest.module';
import { Quest } from './quest/entity/quest.entity';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(TypeOrmModuleConfig),
    onlinePlayersModule,
    QuestModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
