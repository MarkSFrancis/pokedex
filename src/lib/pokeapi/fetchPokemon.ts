import { pokeapi } from './pokeapi'

export interface PokemonResponse {
  id: number
  name: string
  base_experience: number
  height: number
  is_default: boolean
  order: number
  weight: number
  abilities: PokemonResponseAbility[]
  forms: PokemonResponseItem[]
  game_indices: PokemonResponseGameIndex[]
  held_items: PokemonResponseHeldItem[]
  location_area_encounters: string
  moves: PokemonResponseMove[]
  species: PokemonResponseItem
  sprites: PokemonResponseSprites
  stats: PokemonResponseStat[]
  types: PokemonResponseType[]
  past_types: PokemonResponsePastType[]
}

export interface PokemonResponseAbility {
  is_hidden: boolean
  slot: number
  ability: PokemonResponseItem
}

export interface PokemonResponseItem {
  name: string
  url: string
}

export interface PokemonResponseGameIndex {
  game_index: number
  version: PokemonResponseItem
}

export interface PokemonResponseHeldItem {
  item: PokemonResponseItem
  version_details: PokemonResponseVersionDetail[]
}

export interface PokemonResponseVersionDetail {
  rarity: number
  version: PokemonResponseItem
}

export interface PokemonResponseMove {
  move: PokemonResponseItem
  version_group_details: PokemonResponseVersionGroupDetail[]
}

export interface PokemonResponseVersionGroupDetail {
  level_learned_at: number
  version_group: PokemonResponseItem
  move_learn_method: PokemonResponseItem
}

export interface PokemonResponsePastType {
  generation: PokemonResponseItem
  types: PokemonResponseType[]
}

export interface PokemonResponseType {
  slot: number
  type: PokemonResponseItem
}

export interface PokemonResponseGenerationV {
  'black-white': PokemonResponseSprites
}

export interface PokemonResponseGenerationIv {
  'diamond-pearl': PokemonResponseSprites
  'heartgold-soulsilver': PokemonResponseSprites
  platinum: PokemonResponseSprites
}

export interface PokemonResponseVersions {
  'generation-i': PokemonResponseGenerationI
  'generation-ii': PokemonResponseGenerationIi
  'generation-iii': PokemonResponseGenerationIii
  'generation-iv': PokemonResponseGenerationIv
  'generation-v': PokemonResponseGenerationV
  'generation-vi': { [key: string]: PokemonResponseHome }
  'generation-vii': PokemonResponseGenerationVii
  'generation-viii': PokemonResponseGenerationViii
}

export interface PokemonResponseSprites {
  back_default: string
  back_female: null
  back_shiny: string
  back_shiny_female: null
  front_default: string
  front_female: null
  front_shiny: string
  front_shiny_female: null
  other?: PokemonResponseOther
  versions?: PokemonResponseVersions
  animated?: PokemonResponseSprites
}

export interface PokemonResponseGenerationI {
  'red-blue': PokemonResponseRedBlue
  yellow: PokemonResponseRedBlue
}

export interface PokemonResponseRedBlue {
  back_default: string
  back_gray: string
  front_default: string
  front_gray: string
}

export interface PokemonResponseGenerationIi {
  crystal: PokemonResponseCrystal
  gold: PokemonResponseCrystal
  silver: PokemonResponseCrystal
}

export interface PokemonResponseCrystal {
  back_default: string
  back_shiny: string
  front_default: string
  front_shiny: string
}

export interface PokemonResponseGenerationIii {
  emerald: PokemonResponseEmerald
  'firered-leafgreen': PokemonResponseCrystal
  'ruby-sapphire': PokemonResponseCrystal
}

export interface PokemonResponseEmerald {
  front_default: string
  front_shiny: string
}

export interface PokemonResponseHome {
  front_default: string
  front_female: null
  front_shiny: string
  front_shiny_female: null
}

export interface PokemonResponseGenerationVii {
  icons: PokemonResponseDreamWorld
  'ultra-sun-ultra-moon': PokemonResponseHome
}

export interface PokemonResponseDreamWorld {
  front_default: string
  front_female: null
}

export interface PokemonResponseGenerationViii {
  icons: PokemonResponseDreamWorld
}

export interface PokemonResponseOther {
  dream_world: PokemonResponseDreamWorld
  home: PokemonResponseHome
  'official-artwork': PokemonResponseOfficialArtwork
}

export interface PokemonResponseOfficialArtwork {
  front_default: string
}

export interface PokemonResponseStat {
  base_stat: number
  effort: number
  stat: PokemonResponseItem
}

/**
 * @param name ID or name
 */
export const fetchPokemon = (name: string) => {
  pokeapi.get<PokemonResponse>(`pokemon/${name}`)
}
