import React from 'react'
import "./styles.css";
import { Slide } from '@mui/material';

import Counter from '../Counter';

const borderDiv = 'flex flex-grow border-b border-gray-300  pb-[1rem]'
const spanTitle = 'font-bold text-[1rem]'
const spanDesc = 'text-gray-700 text-[0.9rem]'

const Guests = ({containerRef}) => {
  return (
    <Slide 
    direction='up'  
    container={containerRef.current}
    in={true}
    unmountOnExit> 
    <div class="Guest-container">

    <div class="guest-contents">
        <div className={borderDiv}>
          <div class='guest-text-section'>
            <span className={spanTitle}>Adults</span>
            <span className={spanDesc}>Ages 13 or above</span>
          </div>

          <div className='flex'>
            <Counter guestType={'Adults'}/>
          </div>
        </div>
      </div>

      <div class="guest-contents">
        <div className={borderDiv}>
          <div class='guest-text-section'>
            <span className={spanTitle}>Children</span>
            <span className={spanDesc}>Ages 2-12</span>
          </div>

          <div className='flex'>
            <Counter guestType={'Children'}/>
          </div>
        </div>
      </div>


      <div class="guest-contents">
        <div className={borderDiv}>
          <div class='guest-text-section'>
            <span className={spanTitle}>Infants</span>
            <span className={spanDesc}>Under 2</span>
          </div>

          <div className='flex'>
            <Counter guestType={'Infants'}/>
          </div>
        </div>
      </div>
      
      <div class="guest-contents">
        <div className={borderDiv}>
          <div class='guest-text-section'>
            <span className={spanTitle}>Pets</span>
            <span className={spanDesc}>Bringing a Service Animal</span>
          </div>

          <div className='flex'>
            <Counter guestType={'Pets'}/>
          </div>
        </div>
      </div>
      </div>

      
    </Slide>
  
  )
}

export default Guests