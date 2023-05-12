import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { setNavRef } from '../../Redux/Slices/slices';
import DetailPageMain from '../DetailPageMain/DetailPageMain';
import FilterNavbar from '../FilterNavbar/FilterNavbar'
import SearchNavbar from '../SearchNavbar/SearchNavbar'

const Navbar = () => {

  return (
    <>
    <div id='navHeader'  className=' shadow-lg max-w sticky top-0 z-[99] bg-white flex flex-col border-b border-solid border-gray-300'>
            <SearchNavbar/>
            <FilterNavbar/>
            
    </div>

    </>
    
)
  
}

export default Navbar