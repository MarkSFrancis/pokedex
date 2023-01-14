import { pocketbase } from './pocketbase'

export interface PokemonResponse {
  pokedexEntryId: number
  name: string
  description: string
  imageUrl: string
  type: {
    name: string
  }[]
  stats: {
    hp: number
    attack: number
    defense: number
    specialAttack: number
    specialDefence: number
    speed: number
  }
  evolutionChain: {
    name: string
  }[]
  abilities: { name: string }[]
}

export const fetchPokemon = async (name: string) => {
  const pokemon = await pocketbase
    .collection('pokemon')
    .getFirstListItem<PokemonResponse>(`name = "${name}"`)

  return pokemon
}
