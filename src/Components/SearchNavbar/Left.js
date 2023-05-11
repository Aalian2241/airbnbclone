import React, { useState } from 'react'
import logo from '../../Assets/logo.png';
import thumbnail from '../../Assets/Airbnbthumbnail.png';
import { useEffect } from 'react';

const Left = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 1024);
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div className='h-10 my-auto flex flex-grow  md:flex-grow-1 lg:flex-grow-0   '>
      {!isMobile && <img src={logo} className="object-cover"/>}
      {isMobile && <img src={thumbnail} className="object-cover"/>}

    </div>
  )
}

export default Left