import React, { useState } from 'react';

import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';

const Calendar=()=> {

    return (
      <DateRangePicker 
        initialSettings={{ startDate: '1/1/2014', endDate: '3/1/2014' }}
      >
        <button>Click Me To Open Picker!</button>
      </DateRangePicker>
    );
  }


export default Calendar