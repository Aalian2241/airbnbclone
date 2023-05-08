import React, { useEffect, useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import "./styles.css"
import { selectToggleModal, setToggleModal } from '../../Redux/Slices/slices';
import { useDispatch, useSelector } from 'react-redux';

const FilterModal = () => {
    const dispatch = useDispatch()
    const toggleModal = useSelector(selectToggleModal);
    const [open, setOpen] = useState(toggleModal);

    useEffect(() => {
      setOpen(toggleModal);
      console.log("set open was called")
    }, [toggleModal]);
    
    useEffect(() => {
        const handleScroll = () => {
          setOpen(false)
          dispatch(setToggleModal(false));
          console.log("scroll working")
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []); 

    const onCloseModal = () =>{
        dispatch(setToggleModal(false))
        setOpen(false)
    }
    console.log("close called once")

    return (
      <div>
        <Modal 
          open={open} 
          onClose={onCloseModal} 
          blockScroll={false}
          closeOnOverlayClick={true}
          classNames={{
            overlay: 'customOverlay',
            modal: 'customModal',
          }}>
          <h2>Simple centered modal</h2>
        </Modal>
      </div>
    );
  };
  



export default FilterModal