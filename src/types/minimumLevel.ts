import { Column } from 'typeorm'

export class minimumLevel {

    @Column()
    knightLvl: number

    @Column()
    paladinLvl: number

    @Column()
    sorcererLvl: number

    @Column()
    druidLvl: number
}

