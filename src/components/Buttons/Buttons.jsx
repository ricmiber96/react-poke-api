
import React from 'react'

export default function Buttons (props) {
  return (
    <div className='flex items-center'>
      <button
        className='text-black/80 hover:bg-black/5 w-8 h-8 flex justify-center items-center rounded-md'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          fill='none'
          viewBox='0 0 24 24'
        >
          <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M15 18l-6-6 6-6'
          />
        </svg>
      </button>
      <div className='flex-1 text-center text-sm text-black/80 font-medium'>
        #001
      </div>
      <button
        className='text-black/80 hover:bg-black/5 w-8 h-8 flex justify-center items-center rounded-md'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          fill='none'
          viewBox='0 0 24 24'
        >
          <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M9 18l6-6-6-6'
          />
        </svg>
      </button>
    </div>
  )
}
