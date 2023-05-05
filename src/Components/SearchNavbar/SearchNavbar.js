import React from 'react'
import Left from './Left'
import Middle from './Middle'
import Right from './Right'

const SearchNavbar = () => {
  return (
    <div className='
        lg:mx-10 md:mx-5 sm:mx-1 
        flex justify-between items-center 
        
    '>
        <Left/>

        <Middle/>

        <Right/>
    </div>
  )
}

export default SearchNavbar