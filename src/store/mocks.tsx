import { UserStateType } from "./types";

export const mocks = {
    user: {
        id: 0,
        name: '',
        money: 0,
        fights: 0,
        wins: 0,
        losses: 0,
        winRate: 0,
        items: {
            pokeballs: 0,
            potions: 0,
        },
        pokemons: [],
        pokedex: []
    } as UserStateType
}