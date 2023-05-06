import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import Left from './Left'
import Middle from './Middle'
import DynamicSearchBar from './PortableDevices/DynamicSearchBar'
import Right from './Right'

const SearchNavbar = () => {
  const [isPortable, setIsPortable] = useState(false);

  const is1024px = useMediaQuery({ maxWidth: 700 });

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

  return (
    <div>
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
    
    </div>
    
  )
}

export default SearchNavbar