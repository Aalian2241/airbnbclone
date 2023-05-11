/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';

const Carousel = ({slides}) => {
  const [curr,setCurr] = useState(0);
  
  const prev = () => setCurr((curr) => curr === 0 ? slides.length - 1 : curr - 1);
  const next = () => setCurr((curr) => curr === slides.length - 1 ? 0 : curr + 1 );
  
  // const showLeftButton = curr !== 0;
  console.log(curr)
  return (
    <div className=' max-w-screen-md'> 
      <div className=' overflow-hidden relative'>
        <div className='flex bg-transparent rounded-[1.6rem] relative border transition-transform ease-out duration-600 ' style={{transform: `translateX(-${curr*100-1}%)`}}>
          {slides.map((s) => {
            return (
              <img className="object-cover rounded-[1.3rem] sm:h-[20rem] md:h-[20rem] w-full lg:h-[21rem]" src={s} />
            );
          })}
        </div>
        <div className='absolute inset-0 flex justify-between items-center mx-1'> 
        <button 
              onClick={prev}
              className='hover:bg-white p-1 shadow bg-slate-300 rounded-full transition-opacity duration-300 ease-out'
              // style={{opacity: curr > 0 ? 1 : 0}}
              >
              <ChevronLeft size={14}/>
            </button>
          <button 
          className='hover:bg-white p-1 bg-slate-300 rounded-full' 
          onClick={next}
          // style={{opacity: curr < slides.length ? 0 : 1}}
          >
            <ChevronRight size={14}/>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Carousel