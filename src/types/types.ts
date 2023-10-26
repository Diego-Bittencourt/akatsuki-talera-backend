import { TypeOrmModule } from "@nestjs/typeorm";

export const TypeOrmModuleConfig: TypeOrmModule = {
    type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [],
      synchronize: true,
}