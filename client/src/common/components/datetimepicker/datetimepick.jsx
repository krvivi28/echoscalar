
import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';

const Datetime=()=> {
  

  return (
    <div>
      <DateTimePicker onChange={onChange} value={value} />
    </div>
  );
}
export default Datetime;