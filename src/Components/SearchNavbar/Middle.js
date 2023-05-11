import React from 'react'
import { IoSearch } from 'react-icons/io5'
import "./styles.css";
import { useDispatch, useSelector } from 'react-redux';
import { selectToggleModal, setToggleModal } from '../../Redux/Slices/slices';
const Middle = () => {
  const dispatch = useDispatch()
  const modalValue = useSelector(selectToggleModal)
  // useEffect(() => {
  //   // this will trigger every time modalValue changes
  //   console.log('modalValue changed:', modalValue);
  // }, [modalValue]);

  const toggleModal = ()=>{
    dispatch(setToggleModal(true));
  }
  
  const divStyle = " mx-[1px] lg:px-[1px]  md:px-[4px] text-sm  whitespace-nowrap text-overflow:ellipsis "
  return (
    <div>
      {
        !modalValue && 
        <div onClick={toggleModal} className="flex items-center shadow-md transition-shadow duration-500  hover:shadow-xl s cursor-pointer border border-gray-300 rounded-full">

          <div className="flex lg:pl-8 lg:mr-3 sm:mx-1">
            <button className='m-[-1] flex text-left'>
              <div className={divStyle}>Anywhere</div>
            </button>
          </div>
          <div className="separator-2"></div>

          <div className="flex lg:mx-3 sm:mx-1">
            <button className='m-[-1] flex text-left'>
              <div className={divStyle}>Any week</div>
            </button>
          </div>
          <div className="separator-2"></div>

          {/* Search container */}
          <div className="flex items-center p-3">
          
            <p className="text-gray-500 mr-2 text-sm overflow-hidden whitespace-nowrap text-overflow:ellipsis">Add Guests</p>
            <div className="bg-red-600 rounded-full flex p-2">
              <IoSearch size={18} color="white" />
            </div>
          </div>


    </div>
      }

    </div>
    

  )
}

export default Middle
