import React from 'react'
import { PokedexIcon } from '../Icons/Icons'
import SearchBar from '../SearchBar/SearchBar'

export default function Header (props) {
  return (
    <header className='w-full'>
      <nav class='bg-red-800 p-4 flex items-center justify-between'>
        <div class='flex flex-row w-full   justify-between mx-12'>
          <div class='flex items-center flex-shrink-0 text-white ml-6'>
            <PokedexIcon size={60} />
            <span class='font-semibold text-4xl tracking-tight'>Pokedex</span>
          </div>
          <div class='ml-8'>
            <div class='flex flex-row gap-4 text-sm lg:flex-grow ml-12 mt-2'>
              <a href='#pokedex' class='block mt-4 lg:inline-block lg:mt-0 text-white text-xl mr-4'>Pokedex</a>
              <a href='#favorites' class='block mt-8 lg:inline-block lg:mt-0 text-white text-xl mr-4'>Favorites</a>
              <SearchBar />
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
