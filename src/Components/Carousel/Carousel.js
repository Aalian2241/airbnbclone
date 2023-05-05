/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import sample from "../../Assets/sample.jpg";
import { ChevronLeft, ChevronRight } from 'react-feather';

const Carousel = ({slides}) => {
const [curr,setCurr] = useState(0);
const prev = ()=> setCurr((curr)=> curr===0?slides.length -1: curr-1);;
const next = ()=> setCurr((curr)=> curr===slides.length-1 ? 0:curr+1 );
  return (
    <div className='max-w-lg  '> 
    
        <div className=' overflow-hidden relative'>
          <div 
          className='flex relative border transition-transform ease-out duration-600 '
          style={{transform:`translateX(-${curr*100-1}%)`}}>
          {slides.map((s) => {
            return (
                <img src={s} />
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
        
        
        
        
  </div>

  )
}

export default Carousel