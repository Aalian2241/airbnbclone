import React from 'react'

export default function Comp ({children:slides}) {
  return (
    <div>
      <div className='flex'>
        {slides}
      </div>
    </div>
  )
}
