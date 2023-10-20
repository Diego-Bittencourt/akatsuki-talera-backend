import { HttpService } from "@nestjs/axios";
import { ForbiddenException, Injectable } from "@nestjs/common";
import { catchError, lastValueFrom, map } from "rxjs";


@Injectable()
export class OnlinePlayersService {
    constructor(private readonly httpService: HttpService) {}

    async getPlayersOnline(guildName: string) {
        
        console.log(guildName)
        const data = await this.httpService.get(`https://api.tibiadata.com/v3/guild/${guildName}`)
        .pipe(
            map((res) => { return res.data?.guilds.guild.members } )
        )
        .pipe(
            catchError(() => {
                throw new ForbiddenException('Service not available or guild doesn\'t exist')
            })
        )
 console.log(data)
        const guildPlayerList = await lastValueFrom(data)
        console.log(guildPlayerList)

        return guildPlayerList.filter(player => player.status === 'online')
}
}