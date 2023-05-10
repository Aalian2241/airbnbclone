import React, { useRef, useState } from 'react';
import { Modal } from 'react-responsive-modal';
import "./styles.css"
import { selectCheckinDate, selectCheckoutDate, selectDestination, selectToggleModal, selectTotalGuests, setDestination, setToggleModal } from '../../Redux/Slices/slices';
import { useDispatch, useSelector } from 'react-redux';
import { BiSearch } from 'react-icons/bi';
import Guests from './Guests/Guests';
import Destination from './Destination/Destination';

import Calendar_ from './Calendar/Calendar';
import {  Zoom } from '@mui/material';

// const divClass = "flex flex-col p-[0.8rem] hover:bg-gray-300 rounded-full pr-[3rem]";
const span2 = 'text-gray-600 lg:text-[1rem] md:text-[0.9rem] text-[0.7rem]  sm:min-w-[130%] md:w-[100%] lg:max-w-[100%]';
const span1 = 'text-[0.7rem] lg:text-[1rem] md:text-[0.94rem] w-[130%] md:w-[100%] lg:max-w-[100%]'
const where = "text-[0.7rem] lg:text-[1rem] md:text-[0.94rem] w-[130%] md:w-[100%] lg:max-w-[100%] text-start";
const destStyle =  "text-gray-600 lg:text-[1rem] md:text-[0.9rem] text-[0.7rem]  sm:min-w-[130%] md:w-[100%] lg:max-w-[100%] text-start"
const FilterModal = ({parent}) => {
    // SELECTORS
    const totalGuests = useSelector(selectTotalGuests)
    const dest = useSelector(selectDestination);
    const checkinDate = useSelector(selectCheckinDate);
    const checkoutDate = useSelector(selectCheckoutDate)

    const guestRef = useRef(null)
    const [checked,setChecked] = useState(false);
    const [state, setState] = useState(0);
    const [activeButton, setActiveButton] = useState(false);


    function handleClick(index) {
      setActiveButton(index);
      setState((prevState) => (prevState ? 0 : index));
    }
    // console.log("active button: "+ activeButton)

    const toggleModal = useSelector(selectToggleModal);
    const [open, setOpen] = useState(toggleModal);
    
    
    const dispatch = useDispatch()
    const onCloseModal = () =>{
      setOpen(false);
      dispatch(setToggleModal(false));
      dispatch(setDestination(null));
  }
    
    return (
      <div className='sticky top-40'>
        <Modal 
        container={parent.current}
          initialFocusRef={"modalParent"}
          containerId='modalParent'
          open={open} 
          onClose={onCloseModal} 
          blockScroll={true}
          closeIcon={false}
          closeOnOverlayClick={true}
          styles={{
            paddingBottom: "20px",
            
          }}
          classNames={{
            overlay: 'customOverlay',
            modal: 'customModal',
          }}>
        
        <div className=' flex flex-col justify-center items-center relative'>

          {/* TO CENTER THE CONTAINER */}
          <div className='' >

            {/* THE WHOLE PILL CONTAINER */}
            <div className='rounded-full relative justify-center  flex items-center bg-gray-100 my-3 '>
              
              {/* DESTINATION SECTIONS */}
              <div className='flex justify-center'>
                <button 
                onClick={() => {handleClick(1); setChecked(false)}}
                className={
                `flex flex-col p-[0.8rem] hover:bg-gray-300 rounded-full 
                lg:pr-[3rem] md:pr-[2rem] pr-[1rem]
                w-[31vw] 
                pl-8 ${activeButton === 1 ? "visited shadow-2xl" : ""}`}>
                  <span  className={where}>Where</span>
                  <span className={destStyle}>{dest?<>{dest.desc}</>: <>Search Destination</>}</span>
                </button>
                <div ref={parent.current}>
                  {state===1 && <Destination containerRef={guestRef}/> }

                </div>
              </div>
              

              {/* CHECK-IN and OUT SECTION */}
              {/* <DateRangePicker 
                initialSettings={{ startDate: '1/1/2014', endDate: '3/1/2014' }}
              > */}
              <button className='flex justify-center bg-red items-center relative'>
              
                  <button 
                  onClick={() =>{setChecked(true); handleClick(2)}}
                  className={`flex items-center flex-col p-[0.8rem] hover:bg-gray-300 rounded-full md:pr-[1.6rem] pr-[1rem] ${(state===2||state===3) ? "visited shadow-2xl opacity-0" : ""}`}>
                    <span className={span1}>Check in</span>
                    <span className={span2}>{checkinDate.day?<>{checkinDate.month} {checkinDate.day}, {checkinDate.year}</>:<>Add Dates</>}</span>
                  </button>
 

                
                  <button 
                  onClick={() => {setChecked(true); handleClick(3)}}
                  className={`flex items-center flex-col p-[0.8rem] hover:bg-gray-300 rounded-full lg:pr-[3rem] md:pr-[2rem] pr-[1rem] ${(state===2||state===3)? "visited shadow-2xl opacity-0" : ""}`}
                  > 
                    <span className={span1}>Check out</span>
                    <span className={span2}>{checkoutDate.day?<>{checkoutDate.month} {checkoutDate.day}, {checkoutDate.year}</>:<>Add Dates</>}</span>
                  </button>
              
                <div ref={parent.current}>
                  {(state===2||state===3) && <Calendar_  containerRef={guestRef}/> }
                </div>
              </button>


              {/* </DateRangePicker> */}
              {/* SEARCH AND GUESTS SECTION*/}
              <div 
                ref={guestRef}
                onClick={() => handleClick(4)}
                className={`flex relative justify-between items-center rounded-full hover:bg-gray-300 px-[1rem] ${activeButton === 4 ? "visited shadow-2xl" : ""}`}>
                  <button
  
                  className={`flex flex-col p-[0.8rem] rounded-full pr-[3rem] `}>
                    <span className={span1}>Who</span>
                    <span className={span2}>{totalGuests>0? <>{totalGuests} guests</>: <>Add Guests</>}</span>
                  </button>

                
                <div className=''>
                  <button className='rounded-full items-center bg-[#FF385C] hover:bg-red-400 p-[1rem] flex'>
                    <BiSearch />
                    <span className='md:text-[0.94rem] lg:-text[1rem] text-[0rem] transform transition-text duration-500 '>Search</span>
                  </button>
                </div>
                <div ref={parent.current}>
                  {state===4 && <Guests containerRef={guestRef}/> }

                </div>
              </div>
            
            </div>
            
          </div>

          

        </div>
        
        </Modal>
        
      </div>
    );
  };
  



export default FilterModal