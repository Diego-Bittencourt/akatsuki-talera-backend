import { HttpService } from '@nestjs/axios';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { catchError, lastValueFrom, map } from 'rxjs';

@Injectable()
export class PlayersService {
  constructor(private readonly httpService: HttpService) {}

  async getPlayersOnline(guildName: string) {
    const data = await this.httpService
      .get(`https://api.tibiadata.com/v3/guild/${guildName}`)
      .pipe(
        map((res) => {
          return res.data?.guilds.guild.members;
        }),
      )
      .pipe(
        catchError(() => {
          throw new ForbiddenException(
            "Service not available or guild doesn't exist",
          );
        }),
      );
    const guildPlayerList = await lastValueFrom(data);

    return guildPlayerList.filter((player) => player.status === 'online');
  }

  async playerInfo(playerName: string) {
    const data = await this.httpService
      .get(`https://api.tibiadata.com/v3/character/${playerName}`)
      .pipe(
        map((res) => {
          return res.data?.characters.character;
        }),
      );
      
    const { name, vocation, level } = await lastValueFrom(data);
    return { name, vocation, level };
  }
}
