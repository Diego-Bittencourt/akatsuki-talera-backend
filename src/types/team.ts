import { Column } from "typeorm"

export class Team {

    @Column({nullable: true})
    Min: number

    @Column({nullable: true})
    Max: number

    @Column({default: 0, nullable: true})
    Blokers: number

    @Column({default: 0, nullable: true})
    Healers: number

    @Column({default: 0, nullable: true})
    Shooters: number
}