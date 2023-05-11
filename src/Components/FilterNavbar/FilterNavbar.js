import { useEffect, useState } from 'react';
import Carousel from 'react-grid-carousel'
import {filter_items} from "./data"
import "./styles.css"
const FilterNavbar = () => {
  const [cols, setCols] = useState(7);

  const [activeButton, setActiveButton] = useState(false);
  const [toggleFilter,setToggleFilter] = useState(false);
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth<320){
        setCols(3);
      }
      else if (window.innerWidth<500){
        setCols(4);
      }
        else if (window.innerWidth < 700) {
        setCols(5);
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

  useEffect(()=>{
    function handleFilterToggle(){
      window.innerWidth <768?setToggleFilter(false):setToggleFilter(true);

    }
    window.addEventListener('resize', handleFilterToggle);
    handleFilterToggle();

    return () => {
      window.removeEventListener('resize', handleFilterToggle);
    };

  },[])
  function handleClick(index) {
    setActiveButton(index);
  }
  
  return (
    
    <div className="relative ">
      <div className="md:mr-[6.6rem]">
      <Carousel  
            cols={cols}
            // containerStyle={{flexGrow:1}} 
            rows={1} 
            containerStyle={{}}
            loop={true}
            mobileBreakpoint={330}
            scrollSnap={true}


            >
            
            {filter_items.map((item,index) => (
              <Carousel.Item className="flex justify-center">
                <button 
                onClick={() => handleClick(index)}
                className={`flex items-center mx-auto hover:border-b-gray-500 border-b flex-col py-[0.6rem] md:py-[0.75rem]  ${activeButton === index ? "visited" : ""}`} >
                  <img src={item.src} className="h-[1.3rem]"/>
                  <span className='text-[0.75rem] text-center'>
                    {item.desc}
                  </span>
                </button>
              </Carousel.Item>
            ))}

        </Carousel>
      </div>
      {
        toggleFilter &&
        <button className='absolute right-0 top-[0.7rem] flex justify-center items-center mr-[0.6rem] rounded-lg p-2 shadow-lg border-slate-300 border '>
        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" className='block h-4 w-4 mr-[0.6rem]'><path d="M5 8c1.306 0 2.418.835 2.83 2H14v2H7.829A3.001 3.001 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.829 4H2V4h6.17A3.001 3.001 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path></svg>
        <span>Filters</span>
      </button>
      }
      
    </div>
      )
}
export default FilterNavbar