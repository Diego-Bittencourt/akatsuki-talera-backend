import { Module } from '@nestjs/common';
import { onlinePlayersModule } from './online-players/onlinePlayers.module';

@Module({
  imports: [
    onlinePlayersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
