
import React, { useState } from 'react'
import Header from '../components/Header/Header'
import PokemonDetails from '../components/PokemonDetails/PokemonDetails'
import usePokemon from '../hooks/usePokemon'

export default function Main (props) {
  const [id, setId] = useState(60)
  const { data, loading, error } = usePokemon(id)
  console.log(data)

  return (
    <div className='flex flex-col justify-center items-center'>
      <Header />
      <main className='max-w-7xl flex justify-center items-center'>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {
            loading
              ? <p>Loading...</p>
              : <PokemonDetails pokemon={data} />
            }
      </main>
    </div>
  )
}
