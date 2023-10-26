import { Module } from '@nestjs/common';
import { onlinePlayersModule } from './online-players/onlinePlayers.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import { TypeOrmModuleConfig } from './types/types'

@Module({
  imports: [
    TypeOrmModule.forRoot(TypeOrmModuleConfig),
    onlinePlayersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
