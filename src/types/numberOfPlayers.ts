export type numberOfPlayers = {
    minPlayers: number,
    maxPlayers: number | 'no limit',
    blokers: number | 'no minimum',
    healers: number | 'no minimum',
    shooters: number | 'no minimum'
}