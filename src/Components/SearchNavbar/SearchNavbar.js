import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Left from './Left'
import Middle from './Middle'
import DynamicSearchBar from './PortableDevices/DynamicSearchBar'
import Right from './Right'
import FilterModal from '../Modals/Modal'
import { selectToggleModal } from '../../Redux/Slices/slices'
import { useSelector } from 'react-redux'

const SearchNavbar = () => {

  const [isPortable, setIsPortable] = useState(false);


  useEffect(() => {
    function handleResize() {
      setIsPortable(window.innerWidth < 700);
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const modalValue = useSelector(selectToggleModal)
  const myRef = React.useRef(null);
  return (
    <div ref={myRef}>
      {
        isPortable && <DynamicSearchBar/>
      }
    {!isPortable && 
      <header>
      <div className=
              "mx-8
              flex justify-between items-center pb-[1rem]
              pt-[0.75rem] border-b border-solid border-gray-300"
              
          >
              <Left/>
      
              <Middle/>
    
              <Right/>
          </div>
      </header>
         }
    {modalValue  && <FilterModal parent={myRef}/>}
        
    </div>
    
  )
}

export default SearchNavbar