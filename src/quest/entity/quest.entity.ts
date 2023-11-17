import { Optional } from "@nestjs/common"
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import { Team } from "../../types/numberOfPlayers"
import { Level } from "../../types/minimumLevel"

@Entity()
export class Quest extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    questName: string

    @Column({unique: true})
    questSection: string

    @Optional()
    @Column()
    timeToFinnish: number 
    //minutes

    @Column(() => Team)
    team: Team
    
    @Column(() => Level)
    level: Level

    @Optional()
    @Column({nullable: true})
    spoilerLink: string
}