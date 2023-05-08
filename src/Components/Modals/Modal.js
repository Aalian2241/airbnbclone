import React, { useEffect, useState } from 'react';
import { Modal } from 'react-responsive-modal';
import "./styles.css"
import { selectToggleModal, setToggleModal } from '../../Redux/Slices/slices';
import { useDispatch, useSelector } from 'react-redux';
import { BiSearch } from 'react-icons/bi';

const divClass = "flex flex-col p-[0.8rem] hover:bg-gray-300 rounded-full pr-[3rem]";
const span2 = 'text-gray-600 text-[0.94rem]';
const FilterModal = ({parent}) => {
    const [activeButton, setActiveButton] = useState(false);
    function handleClick(index) {
      setActiveButton(index);
    }

    const toggleModal = useSelector(selectToggleModal);
    const [open, setOpen] = useState(toggleModal);

    
    const dispatch = useDispatch()
    const onCloseModal = () =>{
      setOpen(false);
      dispatch(setToggleModal(false))
  }

    // useEffect(() => {
    //     console.log('i shouldnt work')
    //     const handleScroll = () => {
    //       setOpen(false)
    //       dispatch(setToggleModal(false));
    //     };
    
    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //       window.removeEventListener('scroll', handleScroll);
    //     };
    //   }, [open]); 

    
    return (
      <div className=''>
        <Modal 
        container={parent.current}
          initialFocusRef={"modalParent"}
          containerId='modalParent'
          open={open} 
          onClose={onCloseModal} 
          blockScroll={false}
          closeIcon={false}
          closeOnOverlayClick={true}
          styles={{
            paddingBottom: "20px",
            
          }}
          classNames={{
            overlay: 'customOverlay',
            modal: 'customModal',
          }}>
        
        <div className=' flex justify-center'>
          <div className='' >
            <div className='rounded-full flex items-center bg-gray-100 my-3 '>
              
              <div className='flex justify-center'>
                <button 
                onClick={() => handleClick(1)}
                className={`flex flex-col p-[0.8rem] hover:bg-gray-300 rounded-full pr-[3rem] w-[31vw] pl-8 ${activeButton === 1 ? "visited shadow-2xl" : ""}`}>
                  <span>Where</span>
                  <span className={span2}>Search Destinations</span>
                </button>
              </div>
              

              

              <div className='flex justify-center bg-red'>
                <button 
                onClick={() => handleClick(2)}
                className={`flex flex-col p-[0.8rem] hover:bg-gray-300 rounded-full pr-[3rem] ${activeButton === 2 ? "visited shadow-2xl" : ""}`}>
                  <span>Check in</span>
                  <span className={span2}>Add Dates</span>
                </button>
                <button 
                onClick={() => handleClick(3)}
                className={`flex flex-col p-[0.8rem] hover:bg-gray-300 rounded-full pr-[3rem] ${activeButton === 3 ? "visited shadow-2xl" : ""}`}
                >
                  <span>Check out</span>
                  <span className={span2}>Add Dates</span>
                </button>
              </div>

              <div 
                onClick={() => handleClick(4)}
                className={`flex justify-between items-center rounded-full hover:bg-gray-300 px-[1rem] ${activeButton === 4 ? "visited shadow-2xl" : ""}`}>
                <button
 
                 className={`flex flex-col p-[0.8rem] rounded-full pr-[3rem] `}>
                  <span>Who</span>
                  <span className={span2}>Add Guests</span>
                </button>

                <button className='rounded-full items-center bg-[#FF385C] hover:bg-red-400 p-[1rem] flex'>
                  <BiSearch/>
                  Search
                </button>
            </div>
            
            </div>
            
          </div>
        </div>
        </Modal>
      </div>
    );
  };
  



export default FilterModal