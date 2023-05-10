import './styles.css'; // main style file
import './default.css'; // theme css file
import { DateRange } from 'react-date-range';
import {useState, useEffect} from 'react'
import { Slide } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setCheckinDate, setCheckoutDate } from '../../../Redux/Slices/slices';

const buttonsData = [{text:"Exact Dates",text:'1 day'},{text:'2 days'},{text:'3 days'},{text:'4 days'}]

const Calendar_ =({containerRef}) => {
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  });


  const dispatch = useDispatch();
  let checkoutDateObject
  // function handleChange(item){
  //   setState([item.selection])
  //   console.log(state[0])
  //   const checkinDateObject = {
  //     month:state[0].startDate.getMonth(),
  //     day:state[0].startDate.getDate(),
  //     year:state[0].startDate.getFullYear(),
  //   }
  //   if (state[0].endDate){
  //     checkoutDateObject = {
  //       month:state[0].endDate.getMonth(),
  //       day:state[0].endDate.getDate(),
  //       year:state[0].endDate.getFullYear(),
  //     }
  //   }
    
  //   dispatch(setCheckinDate(checkinDateObject))
  //   dispatch(setCheckoutDate(checkoutDateObject))
  // }
  // console.log(state[0].startDate.getMonth())
  // state[0].endDate && console.log(state[0].endDate.getDate())
  // console.log("---------------------------------")
  // function handleSelect(date){
  //   console.log(date); // native Date object 
  // }
  useEffect(() => {
    const checkinDateObject = {
      month: selectionRange.startDate.toLocaleString('default', { month: 'long' }),
      day: selectionRange.startDate.getDate(),
      year: selectionRange.startDate.getFullYear(),
    };

      if (selectionRange.endDate && selectionRange.startDate !== selectionRange.endDate){
      checkoutDateObject = {
        month:selectionRange.startDate.toLocaleString('default', { month: 'long' }),
        day:selectionRange.endDate.getDate(),
        year:selectionRange.endDate.getFullYear(),
      }
      dispatch(setCheckoutDate(checkoutDateObject))
    }
    dispatch(setCheckinDate(checkinDateObject));
  }, [selectionRange, dispatch]);

  const handleSelect = (ranges) => {
    const { selection } = ranges;
    setSelectionRange(selection);
  };
    
    
    
  


  const buttonStyle = ' px-[0.2rem] flex items-center border-[0.4px] border-gray-400 hover:border-black hover:border-1 focus:border-2 focus:border-black  p-[0.2rem] rounded-3xl mr-[1rem]'
  const spanStyle = "text-sm mx-[0.3rem]"
    return (
      <Slide 
    direction='up'  
    in={true}
    unmountOnExit>
      <div className='absolute top-[4.5rem] left-[-9rem] lg:left-[-14rem] p-[2rem] flex flex-col bg-white rounded-2xl border border-t-red-400'>
        <div className='flex justify-between px-[6rem] my-[1rem]'>
          <span className='text-2xl font-semibold'>Check In</span> 
          <span className='text-2xl font-semibold'>Check Out</span>
        </div>
        <DateRange
          editableDateInputs={true}
          ranges={[selectionRange]}
          onChange={handleSelect}
          moveRangeOnFirstSelection={false}
          dragSelectionEnabled

          rangeColors={['rgb(213 72 85)']}
          style={{width:'40vw', innerHeight:'40vh'}}
        />
        <div className='flex justify-start items-start px-[0.4rem] my-[0.6rem]'>
                <button className={buttonStyle}>
                  <span className={spanStyle}>Exact Dates</span>
                </button>
            {buttonsData.map((item,index) => (
                <button className={buttonStyle}>
                  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", fill: "none", height: "16px", width: "16px", stroke: "currentcolor", strokeWidth: "2.66667", overflow: "visible" }}><g fill="none"><path d="M16 4v16m-8-8h16M8 26h16"></path></g></svg>
                  <span className={spanStyle}>{item.text}</span>
                </button>
            ))}
        </div>
      </div>
      </Slide>
    )
}

export default Calendar_