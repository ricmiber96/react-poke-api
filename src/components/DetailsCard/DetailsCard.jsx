import React from 'react'

export default function DetailsCard ({ pokemon }) {
  return (
    <div className='bg-white/70 rounded-lg p-4 shadow-xl'>
      <h4 className='font-semibold'>Details</h4>
      <div className='flex flex-col mt-2'>
        <p>Type</p>
        <div className='flex flex-row gap-2 mt-4'>
          {
          pokemon.types.map((item) => (
            <span
              key={item.slot} className='px-4 py-1 border rounded-md font-medium'
              style={{
                borderColor: `hsl(${pokemon.colors[0]}, 80%, 60%)`,
                color: `hsl(${pokemon.colors[0]}, 80%, 60%)`
              }}
            >{item.type.name}
            </span>
          ))
        }
        </div>
      </div>
      <div className='flex flex-col mt-4'>
        <p>Weaknesses</p>
        <div className='flex flex-row gap-2 mt-4'>
          {
          pokemon.types.map((item) => (
            <span key={item.slot} className='px-4 py-1 border rounded-md font-medium'>{item.type.name}</span>
          ))
        }
        </div>
      </div>
    </div>
  )
}
