import React from 'react'
import { BiMenu, BiWorld} from "react-icons/bi";
import {BsPersonCircle} from "react-icons/bs";
const Right = () => {
  const divStyle = "p-3  text-sm  whitespace-nowrap text-overflow:ellipsis"

  return (
    <div className='flex justify-around items-center'>
      <button className='m-[-1] flex text-left rounded-full hover:shadow-lg cursor-pointer hover:bg-gray-200'>
        <div className={divStyle}>Airbnb Your home</div>
      </button>
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