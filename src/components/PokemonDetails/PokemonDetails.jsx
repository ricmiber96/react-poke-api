import React from 'react'
import Backgroud from '../Background/Background'
import DetailsCard from '../DetailsCard/DetailsCard'
import EvolutionsCard from '../EvolutionsCard/EvolutionsCard'
import StatsCard from '../StatsCard/StatsCard'

export default function PokemonDetails ({ pokemon }) {
  return (
    // <div>
    //   <h2>{pokemon.name}</h2>
    //   <img src={pokemon.image} alt={pokemon.name} />
    //   <p>Type: {pokemon.type}</p>
    // </div>
    <div className='flex flex-col w-full'>
      <Backgroud colors={pokemon.colors} />
      <section className='mt-4'>
        <div className='container flex items-center mt-8 justify-between mx-auto'>
          <p className='text-2xl opacity-70 font-semibold'>Pokémon</p>
          <p className='text-2xl opacity-70 font-semibold'>#{pokemon.id >= 100 ? pokemon.id : pokemon.id >= 10 ? '0' + pokemon.id : '00' + pokemon.id}</p>
        </div>
        <h1 className='text-8xl font-semibold opacity-70 font-fun'>{pokemon.name}</h1>
      </section>
      <section className='grid grid-cols-4 gap-2 mt-12'>
        <div className='bg-white/70 rounded-lg p-4 shadow-xl'>
          <img src={pokemon.imagePokemon} />
        </div>
        <StatsCard pokemon={pokemon} />
        <DetailsCard pokemon={pokemon} />
      </section>
      <section className='mt-4'>
        <EvolutionsCard pokemon={pokemon} />
      </section>
    </div>
  )
}
