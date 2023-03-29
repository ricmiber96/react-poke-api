
import React from 'react'

export default function StatsCard ({ pokemon }) {
  return (
    <div className='bg-white/70 col-span-2 rounded-lg p-4 shadow-xl'>
      <h4>Stats</h4>
      {
      pokemon.stats.map((stat, i) => (
        <div key={i} className='grid grid-cols-4 gap-3 align-middle h-6 mt-2 items-center'>
          <div className='flex justify-between h-6 mt-2 items-center'>
            <div className='font-semibold text-sm'>{stat.stat.name}</div>
          </div>
          <div className='w-full flex-1 col-span-2 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-2'>
            <div
              className='h-2.5 rounded-full heeey' style={{
                width: `${stat.base_stat < 100 ? Math.round(stat.base_stat) : 100}%`,
                backgroundColor: `hsl(${pokemon.colors[0]}, 80%, 40%)`
              }}
            />
          </div>
          <div className='flex justify-between  h-6 mt-2 items-center ml-4'>
            <span style={{
              color: `hsl(${pokemon.colors[0]}, 80%, 60%)`
            }}
            >{Math.round(stat.base_stat)}
            </span>
          </div>
        </div>
      ))
    }
    </div>
  )
}
