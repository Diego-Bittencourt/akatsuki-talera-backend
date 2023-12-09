import { Column } from 'typeorm'

export class Level {

    @Column({default: 8})
    Knight: number

    @Column({default: 8})
    Paladin: number

    @Column({default: 8})
    Sorcerer: number

    @Column({default: 8})
    Druid: number
}

