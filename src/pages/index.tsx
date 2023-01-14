import { PokemonDetails } from '@/views/Pokemon/PokemonDetails'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Pokédex</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <PokemonDetails name="Squirtle" />
      </main>
    </>
  )
}
