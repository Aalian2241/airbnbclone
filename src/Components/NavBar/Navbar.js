import React from 'react'
import FilterNavbar from '../FilterNavbar/FilterNavbar'
import SearchNavbar from '../SearchNavbar/SearchNavbar'

const Navbar = () => {
  return (
    <div className='bg-gray-100 flex flex-col relative border-b border-solid border-gray-600'>
        <div className='sticky top-0 bg-white'>
            <SearchNavbar/>
        </div>
        <div>
            <FilterNavbar/>
        </div>
        
    </div>
    
)
  
}

export default Navbar