import React, { useState, useEffect } from 'react';
import { MinusCircle, PlusCircle } from 'react-feather';


function Counter() {
  const [counter, updateCounter] = useState(0);

  function handleIncrement() {
    updateCounter(counter + 1);
  }

  function handleDecrement() {
    updateCounter(counter <= 0 ? 0 : counter - 1);
  }


  useEffect(() => {
    console.log('component lifecycle');
    // updaterandomText(`Random text is updated`);
  }, [counter]);

  return (
    <div className='flex items-center'>
      <button className='mx-[0.5rem]'  onClick={handleDecrement}>
        <MinusCircle strokeWidth={counter===0?0:1}/>
      </button>
      <span className='text-[2rem] md:text-[1.4rem]'>{counter}</span>
      <button className='mx-[0.5rem]' onClick={handleIncrement}>
        <PlusCircle strokeWidth={1}/>
      </button>

    </div>
  );
}

export default Counter;
