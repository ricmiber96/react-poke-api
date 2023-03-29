import React from 'react'
import Buttons from '../Buttons/Buttons'

export default function EvolutionsCard ({ pokemon }) {
  return (
    <div className='bg-white/70 rounded-lg p-4 shadow-xl mb-10'>
      <h4 className='font-semibold'>Evolutions</h4>
      <div className='w-full grid grid-cols-3 gap-2'>
        {
          pokemon.evolutions.map((ev) => (
            <img className='w-60 h-60' key={ev.id} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ev.id}.png`} />
          ))
        }
      </div>
      <Buttons />
    </div>
  )
}
