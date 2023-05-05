import React from 'react'
import { BsStarFill } from 'react-icons/bs'
import Carousel from '../Carousel/Carousel'

const Rental = ({images}) => {
  return (
    <div className="">
                <div className=" hover:cursor-pointer ">
                    <div className="grad absolute h-full rounded-b-[1.3rem]"></div>
                        <div className="">
                        {/* Background */}
                            <Carousel slides={images}/>
                        {/* Title */}
                        {/* <div className="absolute text-white font-bold bottom-6 left-6 text-[22px] flex items-center gap-2">
                            asdasd
                            <span>&#x2022;</span>
                            <p className="text-[18px] text-slate-200"> $asdasda</p>
                        </div> */}
                        </div>
                    </div>
            {/* Description */}
                    <div className="pt-3 flex justify-between items-start ">
                        {/* Left */}
                        <div className="">
                        <p className="max-w-[17rem] font-semibold text-[17px] mb-2">
                            This is a rare find
                        </p>
                        <p className="max-w-[17rem]  text-[16px] -mt-1 text-gray-500 mb-2">
                            Jan 28 - Aug 9
                        </p>
                        <p className="max-w-[17rem] font-semibold text-[17px]">$124</p>
                        </div>
                        {/* Right */}
                        <div className="flex items-center space-x-1">
                        <BsStarFill />
                        <p className="text-[15px]">5.0</p>
                        </div>
                    </div>
    </div>

  )
}

export default Rental