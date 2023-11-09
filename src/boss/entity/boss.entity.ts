import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { numberOfPlayers } from '../../types/numberOfPlayers';
import { minimumLevel } from '../../types/minimumLevel';


@Entity()
export class Boss extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    bossName: string

    @Column()
    estimatedTime: number 
    //minutes

    @Column()
    numberOfPlayers: numberOfPlayers
    
    @Column()
    minimumLevel: minimumLevel

    @Column()
    spoilerLink: string
}