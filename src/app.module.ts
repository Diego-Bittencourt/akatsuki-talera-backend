import { Module } from '@nestjs/common';
import { PlayersModule } from './online-players/players.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import { TypeOrmModuleConfig } from './types/types'
import { EventosModule } from './eventos/eventos.module';
import { DataSource } from 'typeorm';
import { TeamModule } from './team/team.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(TypeOrmModuleConfig),
    PlayersModule,
    EventosModule,
    TeamModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
