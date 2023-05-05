/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'react-feather';

const Carousel = ({slides}) => {
const [curr,setCurr] = useState(0);
const prev = ()=> setCurr((curr)=> curr===0?slides.length -1: curr-1);;
const next = ()=> setCurr((curr)=> curr===slides.length-1 ? 0:curr+1 );
  return (

    
        <div className=' overflow-hidden'>
          <div 
            className='relative flex bg-black border transition-transform ease-out duration-600 '
            style={{transform:`translateX(-${curr*100-1}%)`}}>
            {slides.map((s) => {
              return (
                  <img src={s} className="object-cover rounded-[1.3rem] sm:h-[14rem]  md:h-[16rem] w-full lg:h-[18rem]" />
              );})}
          </div>
            <div className=' absolute inset-0 flex justify-between items-center mx-1'> 
              <button 
              onClick={prev}
              className='hover:bg-white p-1 shadow bg-slate-300 rounded-full'>
                <ChevronLeft size={14}/>
              </button>

              <button 
              onClick={next}
              className='hover:bg-white p-1 bg-slate-300 rounded-full'>
                <ChevronRight size={14}/>
              </button>
          </div>
        </div>
  )
}

export default Carousel