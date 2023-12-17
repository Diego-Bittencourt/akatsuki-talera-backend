import { Optional } from "@nestjs/common";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Evento } from "../../eventos/entity/evento.entity";


@Entity()
export class Team extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    eventoId: number

    @Column()
    date: Date
    //utc in server, changed to local in front

    @Column()
    meetingPlace: string

    @Column({ nullable: true })
    tibiaMapsLink: string

    @Column({type: "json"})
    blokers: string

    @Column({type: "json"})
    healers: string

    @Column({type: "json"})
    shooters: string

    @Column({nullable: true})
    notes: string

    @ManyToOne(() => Evento)
    evento: Evento

}