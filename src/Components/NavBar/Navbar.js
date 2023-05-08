import React from 'react'
import FilterNavbar from '../FilterNavbar/FilterNavbar'
import SearchNavbar from '../SearchNavbar/SearchNavbar'
import { useSelector } from 'react-redux'
import { selectToggleModal } from '../../Redux/Slices/slices'
import FilterModal from '../Modals/Modal'

const Navbar = () => {
  
  return (
    <div  className='sticky shadow-lg max-w top-0 z-[2] bg-white flex flex-col border-b border-solid border-gray-300'>
            <SearchNavbar/>

            
            <FilterNavbar/>
            
    </div>
    
)
  
}

export default Navbar