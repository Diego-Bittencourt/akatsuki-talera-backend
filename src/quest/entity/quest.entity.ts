import { Optional } from "@nestjs/common"
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Quest extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    questName: string

    @Column()
    questSection: string

    @Optional()
    @Column()
    timeToFinnish: number 
    //minutes

    @Optional()
    @Column({nullable: true})
    levelRecommendedKnight: number

    @Optional()
    @Column({nullable: true})
    levelRecommendedPaladin: number

    @Optional()
    @Column({nullable: true})
    levelRecommendedSorcerer: number

    @Optional()
    @Column({nullable: true})
    levelRecommendedDruid: number
}