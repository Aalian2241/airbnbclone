import { useEffect, useState } from 'react';
import Carousel from 'react-grid-carousel'
import { useMediaQuery } from 'react-responsive';
import {filter_items} from "./data"
import "./styles.css"
const FilterNavbar = () => {
  const [cols, setCols] = useState(7);

  const [activeButton, setActiveButton] = useState(false);
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth<320){
        setCols(1);
      }
      else if (window.innerWidth<500){
        setCols(2);
      }
        else if (window.innerWidth < 700) {
        setCols(3);
      }
        else if (window.innerWidth < 1024) {
        setCols(6);
      } else {
        setCols(7);
      }
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  function handleClick(index) {
    setActiveButton(index);
  }
  
  return (
        <Carousel  
            cols={cols}
            // containerStyle={{flexGrow:1}} 
            rows={1} 

            loop={false}
            mobileBreakpoint={330}
            scrollSnap={true}


            >
            
            {filter_items.map((item,index) => (
              <Carousel.Item >
                <button 
                onClick={() => handleClick(index)}
                className={`flex items-center border-b flex-col py-[0.2rem] md:py-[0.75rem] ${activeButton === index ? "visited" : ""}`} >
                  <img src={item.src} className="h-[1.3rem]"/>
                  <span className='text-[0.75rem] text-center'>
                    {item.desc}
                  </span>
                </button>
              </Carousel.Item>
            ))}

        </Carousel>
        

        
  )
}
export default FilterNavbar