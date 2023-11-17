import { Column } from "typeorm"

export class numberOfPlayers {

    @Column()
    minPlayers: number

    @Column()
    maxPlayers: number | null

    @Column()
    blokers: number

    @Column()
    healers: number

    @Column()
    shooters: number
}