import React from 'react'
import "./styles.css";
import { Slide } from '@mui/material';
import { regions } from './regions';
const Destination = ({containerRef}) => {
  return (
    <Slide 
    direction='up'  
    container={containerRef.current}
    in={true}
    unmountOnExit>
    <div className='flex rounded-3xl p-[1rem] absolute left-0 top-[4.9rem] bg-white'>

    <div className='flex flex-col'>
      <span className='mb-[1rem] font-semibold'> Search by Region</span>

      <div className='grid grid-cols-3 gap-3'>
        {regions.map((item, index) => (
                <div className='flex flex-col'>
                  <button className='flex flex-grow bg-transparent rounded-[1.6rem] border hover:border-black'>
                    <img alt='sad' className='object-cover rounded-[1.6rem] sm:h-[10rem] md:h-[10rem] w-full lg:h-[14 rem]' src={item.src} />
                  </button>

                  <div className='my-[0.7rem]'>
                    <span className='font-light'>{item.desc}</span>
                  </div>
                </div>
            ))}
      </div>
    </div>

    </div>
    </Slide>
    
  )
}

export default Destination