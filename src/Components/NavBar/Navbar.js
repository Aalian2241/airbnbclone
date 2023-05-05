import React from 'react'
import FilterNavbar from '../FilterNavbar/FilterNavbar'
import SearchNavbar from '../SearchNavbar/SearchNavbar'

const Navbar = () => {
  return (
    <div className='sticky  top-0 z-2 bg-gray-100 flex flex-col border-b border-solid border-gray-600'>
            <SearchNavbar/>

            <FilterNavbar/>
        
    </div>
    
)
  
}

export default Navbar