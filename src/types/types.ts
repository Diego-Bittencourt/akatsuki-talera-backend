import { TypeOrmModule } from "@nestjs/typeorm";
import { Quest } from "../quest/entity/quest.entity";

export const TypeOrmModuleConfig: TypeOrmModule = {
    type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'admin',
      password: 'admin',
      database: 'akatsuki',
      entities: [Quest],
      synchronize: true,
}