import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Team } from '../../types/numberOfPlayers';
import { Level } from '../../types/minimumLevel';


@Entity()
export class Boss extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    bossName: string

    @Column()
    estimatedTime: number 
    //minutes

    @Column(() => Team)
    team: Team
    
    @Column(() => Level)
    level: Level

    @Column({nullable: true})
    spoilerLink: string
}