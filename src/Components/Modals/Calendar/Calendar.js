import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import {useState} from 'react'

const Calendar_ =() => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);
  function handleSelect(date){
    console.log(date); // native Date object
  }
    return (
      <div className='absolute top-[4rem] left-[-9rem] w-[30rem]'>
        <DateRange
          editableDateInputs={true}
          onChange={item => setState([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={state}
          style={{width:'40vw', innerHeight:'40vh'}}
        />
      </div>
      
    )
}

export default Calendar_