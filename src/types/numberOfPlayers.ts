import { Column } from "typeorm"

export class Team {

    @Column({nullable: true})
    Min: number

    @Column({nullable: true})
    Max: number

    @Column({default: 0})
    Blokers: number

    @Column({default: 0})
    Healers: number

    @Column({default: 0})
    Shooters: number
}