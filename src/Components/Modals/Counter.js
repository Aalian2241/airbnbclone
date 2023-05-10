import React, { useState, useEffect } from 'react';
import { MinusCircle, PlusCircle } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { selectGuest, selectTotalGuests, setGuest, setTotalGuests } from '../../Redux/Slices/slices';



function Counter({guestType}) {
  const dispatch = useDispatch();

  var totalGuests = useSelector(selectTotalGuests)
  const guest_obj = useSelector(selectGuest);
  const [guestCounter, updateCounter] = useState(guest_obj[guestType]);
  
  const updateGuest = (guestType) => {
    const updatedGuests = { ...guest_obj }; // create a copy of the guests object
    updatedGuests[guestType]+=1; // update the specified guest type
    totalGuests +=1;
    dispatch(setTotalGuests(totalGuests))
    dispatch(setGuest(updatedGuests)); // dispatch an action to update the redux store
  }

  function decrementGuest(guestType){
    if(guestCounter>0){
      const updatedGuests = { ...guest_obj }; // create a copy of the guests object
      updatedGuests[guestType]-=1; // update the specified guest type
      dispatch(setGuest(updatedGuests)); // dispatch an action to update the redux store
      totalGuests -=1;
      dispatch(setTotalGuests(totalGuests))
    }

  }

  function handleIncrement() {
    if (guestCounter <20){
      updateCounter(guestCounter + 1);
      updateGuest(guestType)
    }
  }

  function handleDecrement() {
    updateCounter(guestCounter <= 0 ? 0 : guestCounter - 1);
    decrementGuest(guestType)
  }


  useEffect(() => {
    console.log('component lifecycle');
    // updaterandomText(`Random text is updated`);
  }, [guestCounter]);

  return (
    <div className='flex items-center'>
      <button className='mx-[0.5rem]'  onClick={handleDecrement}>
        <MinusCircle strokeWidth={guestCounter===0?0:1}/>
      </button>
      <span className='text-[1.5rem] md:text-[1.4rem]'>{guest_obj[guestType]}</span>
      <button className='mx-[0.5rem]' onClick={handleIncrement}>
        <PlusCircle strokeWidth={1}/>
      </button>

    </div>
  );
}

export default Counter;
