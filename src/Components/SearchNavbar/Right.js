import React from 'react'
import { BiMenu, BiWorld} from "react-icons/bi";
import {BsPersonCircle} from "react-icons/bs";
const Right = () => {
  return (
    <div className='flex justify-around items-center'>
      <div className='flex hover:bg-gray-200 cursor-pointer p-3 rounded-full mr-0'>
        <p className=''>Airbnb Your Home</p>

      </div>
      <div className='lg:mx-2 hover:bg-gray-200 cursor-pointer p-3 rounded-full '>
        <BiWorld size={24}/>
      </div>

      <div className='flex border hover:shadow-md cursor-pointer border-gray-300 rounded-full p-3'>
        <div className=''><BiMenu size={24} className="mr-3"/></div>
        <div className='border-l-2 border-gray-400'><BsPersonCircle  className="ml-3" size={24} /></div>
        
        
      </div>

    </div>
  )
}

export default Right