import { TypeOrmModule } from "@nestjs/typeorm";
import { Evento } from "../eventos/entity/evento.entity";
import { Team } from "../team/entity/team.entity";

export const TypeOrmModuleConfig: TypeOrmModule = {
    type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT || 3306,
      username: process.env.MYSQL_USER|| 'root',
      password: process.env.MYSQL_PASSWORD || '123456',
      database: process.env.DB_NAME || 'akatsuki',
      entities: [Evento, Team],
      synchronize: true,
      autoLoadEntities: true
}