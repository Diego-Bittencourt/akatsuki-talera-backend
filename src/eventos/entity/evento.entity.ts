import { Optional } from "@nestjs/common"
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { TeamComp } from "../../types/teamComp"
import { Level } from "../../types/level"
import { Team } from "../../team/entity/team.entity"

@Entity()
export class Evento extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    eventoName: string

    @Column({unique: true})
    eventoSection: string

    @Column()
    type: string

    @Optional()
    @Column()
    timeToFinnish: number 
    //minutes

    @Column(() => TeamComp)
    team: TeamComp
    
    @Column(() => Level)
    level: Level

    @Optional()
    @Column({nullable: true})
    spoilerLink: string


}