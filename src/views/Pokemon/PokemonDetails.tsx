import { QueryGuard } from '@/components/QueryGuard'
import { fetchPokemon } from '@/lib/pocketbase/fetchPokemon'
import { FC } from 'react'
import { useQuery } from 'react-query'
import { PokemonDetailsDisplay } from './PokemonDetailsDisplay'

export interface PokemonDetailsProps {
  name: string
}

export const PokemonDetails: FC<PokemonDetailsProps> = (props) => {
  const query = useQuery(['fetchPokemon', props.name], () => {
    return fetchPokemon(props.name)
  })

  return (
    <QueryGuard query={query}>
      {(res) => <PokemonDetailsDisplay pokemon={res} />}
    </QueryGuard>
  )
}
