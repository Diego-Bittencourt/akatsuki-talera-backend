import { Optional } from "@nestjs/common";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Quest } from "../../quest/entity/quest.entity";


@Entity()
export class TeamQuest extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    questId: number

    @Column()
    date: Date
    //utc in server, changed to local in front

    @Column({type: "json"})
    teamMembers: string

    @Column({nullable: true})
    notes: string

    @ManyToOne(() => Quest, (quest) => quest.id)
    quest: Quest

}