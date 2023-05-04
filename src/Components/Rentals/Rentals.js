/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import logo from "../../Assets/logo.png"
import sample from "../../Assets/sample.jpg"
import { BsStarFill } from 'react-icons/bs'
const Rentals = () => {
  return (
    <div className='p-4'>
        <div className='grid lg:grid-cols-4 gap-7'>
            <div className="">
                <div className="relative">
                    <div className="grad absolute w-full h-full rounded-b-[1.3rem]"></div>
                    <div className="flex  ">
                    {/* Background */}
                    <img
                        src={sample}
                        alt=""
                        className="object-cover rounded-[1.3rem] sm:h-[17rem]  md:h-[20rem] w-full lg:h-[21rem]"
                    />
                    {/* Title */}
                    <div className="absolute text-white font-bold bottom-6 left-6 text-[22px] flex items-center gap-2">
                        asdasd
                        <span>&#x2022;</span>
                        <p className="text-[18px] text-slate-200"> $asdasda</p>
                    </div>
                </div>
            </div>
            {/* Description */}
            <div className="pt-3 flex justify-between items-start">
                {/* Left */}
                <div className="">
                <p className="max-w-[17rem] font-semibold text-[17px]">
                    This is a rare find
                </p>
                <p className="max-w-[17rem]  text-[16px] -mt-1 text-gray-500">
                    Jan 28 - Aug 9
                </p>
                <p className="max-w-[17rem] font-semibold text-[17px]">$asdasd</p>
                </div>
                {/* Right */}
                <div className="flex items-center space-x-1">
                <BsStarFill />
                <p className="text-[15px]">5.0</p>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Rentals