import { Module } from '@nestjs/common';
import { PlayersModule } from './players/players.module';
import { EventosModule } from './eventos/eventos.module';
import { TeamModule } from './team/team.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:admin@akatsuki.ty59eph.mongodb.net/?retryWrites=true&w=majority&appName=Akatsuki',
    ),
    UsersModule,
    // PlayersModule,
    // EventosModule,
    // TeamModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
