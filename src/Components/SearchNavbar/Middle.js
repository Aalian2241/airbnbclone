import React from 'react'
import { BiMenu } from 'react-icons/bi'
import { IoSearch } from 'react-icons/io5'

const Middle = () => {
  return (
    <div className=' flex flex-row shadow-md items-center hover:shadow-lg cursor-pointer border border-gray-300 rounded-full'>

      <div className='flex lg:pl-8 lg:pr-3 border-r border-gray-500'>
        <p className='sm:text-sm'>
          Anywhere
        </p>
      </div>

      <div className='flex lg:px-3 border-r border-gray-500'>
        <p>Any week</p>
      </div>

      {/* Search container */}
      <div className='flex items-center  p-3'>
        <div className=''><p className='text-gray-500 mr-2 text-sm'>Add Guests</p></div>
        <div className='bg-red-600 rounded-full flex p-2'>
          <IoSearch  className="" size={18} color='white'/>
        </div>        
      </div>
      
    </div>

  )
}

export default Middle
