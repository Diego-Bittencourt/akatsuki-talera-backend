import { Column } from "typeorm"

export class Team {

    @Column({nullable: true})
    min: number

    @Column({nullable: true})
    max: number

    @Column({default: 0, nullable: true})
    blokers: number

    @Column({default: 0, nullable: true})
    healers: number

    @Column({default: 0, nullable: true})
    shooters: number
}