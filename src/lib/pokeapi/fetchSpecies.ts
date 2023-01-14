import { pokeapi } from './pokeapi'

export interface SpeciesResponse {
  base_happiness: number
  capture_rate: number
  color: SpeciesResponseColor
  egg_groups: SpeciesResponseColor[]
  evolution_chain: SpeciesResponseEvolutionChain
  evolves_from_species: null
  flavor_text_entries: SpeciesResponseFlavorTextEntry[]
  form_descriptions: any[]
  forms_switchable: boolean
  gender_rate: number
  genera: SpeciesResponseGenus[]
  generation: SpeciesResponseColor
  growth_rate: SpeciesResponseColor
  habitat: SpeciesResponseColor
  has_gender_differences: boolean
  hatch_counter: number
  id: number
  is_baby: boolean
  is_legendary: boolean
  is_mythical: boolean
  name: string
  names: SpeciesResponseName[]
  order: number
  pal_park_encounters: SpeciesResponsePalParkEncounter[]
  pokedex_numbers: SpeciesResponsePokedexNumber[]
  shape: SpeciesResponseColor
  varieties: SpeciesResponseVariety[]
}

export interface SpeciesResponseColor {
  name: string
  url: string
}

export interface SpeciesResponseEvolutionChain {
  url: string
}

export interface SpeciesResponseFlavorTextEntry {
  flavor_text: string
  language: SpeciesResponseColor
  version: SpeciesResponseColor
}

export interface SpeciesResponseGenus {
  genus: string
  language: SpeciesResponseColor
}

export interface SpeciesResponseName {
  language: SpeciesResponseColor
  name: string
}

export interface SpeciesResponsePalParkEncounter {
  area: SpeciesResponseColor
  base_score: number
  rate: number
}

export interface SpeciesResponsePokedexNumber {
  entry_number: number
  pokedex: SpeciesResponseColor
}

export interface SpeciesResponseVariety {
  is_default: boolean
  pokemon: SpeciesResponseColor
}

/**
 * @param name ID or name
 */
export const fetchPokemon = (name: string) => {
  pokeapi.get<SpeciesResponse>(`pokemon-species/${name}`)
}
