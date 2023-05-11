import React from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'
import "./styles.css";

const DynamicSearchBar = () => {
    
  return (
    <div className='flex items-center hover:cursor-pointer rounded-full bg-white mx-4 my-3 transition-shadow duration-500 hover:shadow-lg'>
        
        {/* Left */}
        <div class="left-container">
            <button class="left-1">
                <BiSearchAlt2 size={20} className="mx-4"/>
            </button>
            <button class="left-2">
                    <div className='text-left font-semibold text-[.9rem]'>
                        Anywhere
                    </div>
                    <div className='text-gray-400 text-[0.789rem]'>
                        Any week - Add Guests
                    </div>
            </button>
        </div>

        {/* Right */}
        <button className='mr-[0.6rem] rounded-full p-2 shadow-lg border-slate-300 border '>
        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" className='block h-4 w-4 '><path d="M5 8c1.306 0 2.418.835 2.83 2H14v2H7.829A3.001 3.001 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.829 4H2V4h6.17A3.001 3.001 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path></svg>
        </button>
    </div>
  )
}

export default DynamicSearchBar