import { TypeOrmModule } from "@nestjs/typeorm";
import { Quest } from "../quest/entity/quest.entity";

export const TypeOrmModuleConfig: TypeOrmModule = {
    type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT || 3306,
      username: process.env.MYSQL_USER|| 'root',
      password: process.env.MYSQL_PASSWORD || '123456',
      database: process.env.DB_NAME || 'akatsuki',
      entities: [Quest],
      synchronize: true,
      autoLoadEntities: true
}