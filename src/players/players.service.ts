import { HttpService } from '@nestjs/axios';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { catchError, lastValueFrom, map } from 'rxjs';
import { HighscoreDto } from './dto/highscore.dto';

@Injectable()
export class PlayersService {
  constructor(private readonly httpService: HttpService) {}

  async getGuildPlayers(guildName: string | null) {

    const guild = guildName ? guildName : 'akatsuki';
    const data = await this.httpService
    .get(`https://api.tibiadata.com/v4/guild/${guild}`)
    .pipe(
      map((res) => {
        return res.data?.guild.members;
      }),
    )
    .pipe(
      catchError(() => {
        throw new ForbiddenException(
          "Service not available or guild doesn't exist",
        );
      }),
    );
  return await lastValueFrom(data);
  }

  async getPlayersOnline(guildName: string | null) {
    const guildPlayerList = await this.getGuildPlayers(guildName)

    return guildPlayerList.filter((player) => player.status === 'online');
  }

  async playerInfo(playerName: string) {
    const data = await this.httpService
      .get(`https://api.tibiadata.com/v4/character/${playerName}`)
      .pipe(
        map((res) => {
          return res.data?.characters.character;
        }),
      )
      
      
    const { name, vocation, level } = await lastValueFrom(data);
    return { name, vocation, level };
  }

  async getGuildHighscores(highscore: HighscoreDto) {

    const { vocacao = 'all', category = 'experience', guild = 'akatsuki', world = 'talera'} = highscore;
    const guildPlayers = await this.getGuildPlayers(guild)
        
    const guildPlayersNames = guildPlayers.map(player => player.name)
  console.log(world, category, vocacao)

    const page = [...Array(22).keys()]
    page.shift()

    //there is an edge case in which the page 21 doesn't show for experience. fix this later
    if (category === 'experience') {
      page.pop()
    }
    const highscoreList =  await Promise.all(page.map(async (index) => {
      const highscorePage = await this.httpService.get(`https://api.tibiadata.com/v4/highscores/${world}/${category}/${vocacao}/${index}`)
      .pipe(
        map((res) => {
          return res.data?.highscores?.highscore_list
        })
      )
      .pipe(
        catchError((err) => {
          console.log(err)
          return err
        }),
      );

      const thePage = await lastValueFrom(highscorePage)
      return thePage
    }))
    const filteredList = []
    highscoreList.forEach(list => filteredList.push(...list))
          
        // console.log(highscoreList[0], guildPlayersNames.includes('Cara Sincero'))

    return filteredList.filter(player => guildPlayersNames.includes(player.name))
    // return highscoreList;
    
  }
}
