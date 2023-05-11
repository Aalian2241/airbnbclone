/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

import Rental from './Rental'
import { rental_items } from '../../airbnbLocaitons'

// eslint-disable-next-line no-dupe-keys

const Rentals = () => {
  return (
    <>
    <div className='p-4 relative'>
        <div className='grid grid-cols-1  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3 '>
            {rental_items.map((item, index) => (
                <Rental images={item.images}/>
            ))}
        </div>
    </div>
    </>
    
  )
}

export default Rentals