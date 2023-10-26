import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"
import { minimumLevel } from "../types"

@Entity()
export class Quest extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    questName: string

    @Column()
    questSection: string

    @Column()
    timeToFinnish: number

    @Column()
    levelRecommended: minimumLevel
}