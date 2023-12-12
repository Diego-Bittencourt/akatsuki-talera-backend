import { Column } from 'typeorm'

export class Level {

    @Column({default: 8})
    knight: number

    @Column({default: 8})
    paladin: number

    @Column({default: 8})
    sorcerer: number

    @Column({default: 8})
    druid: number
}

