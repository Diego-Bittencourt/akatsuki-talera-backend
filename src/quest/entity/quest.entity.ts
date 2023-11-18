import { Optional } from "@nestjs/common"
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Team } from "../../types/numberOfPlayers"
import { Level } from "../../types/minimumLevel"
import { TeamQuest } from "../../team-quest/entity/teamQuest.entity"

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

    @OneToMany(() => TeamQuest, (teamQuest) => teamQuest.questId)
    teamQuests: TeamQuest[]
}