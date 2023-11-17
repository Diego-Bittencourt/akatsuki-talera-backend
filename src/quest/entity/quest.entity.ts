import { Optional } from "@nestjs/common"
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import { numberOfPlayers } from "../../types/numberOfPlayers"
import { minimumLevel } from "../../types/minimumLevel"

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

    @Column(() => numberOfPlayers)
    numberOfPlayers: numberOfPlayers
    
    @Column(() => minimumLevel)
    minimumLevel: minimumLevel

    @Optional()
    @Column({nullable: true})
    spoilerLink: string
}