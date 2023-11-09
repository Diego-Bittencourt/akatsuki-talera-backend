import { Module } from "@nestjs/common";
import { Boss } from "./entity/boss.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BossController } from "./boss.controller";
import { BossService } from "./boss.service";

@Module({
    imports: [TypeOrmModule.forFeature([Boss])],
    exports: [TypeOrmModule],
    controllers: [BossController],
    providers: [BossService]
})

export class BossModule {}