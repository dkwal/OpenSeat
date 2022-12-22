import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import subDays from "date-fns/subDays";

const MinDatePicker = (props) => {
    const [startDate, setStartDate] = useState(new Date());
    return (
      <DatePicker
        selected={startDate}
        wrapperClassName={props.style}
        onChange={(date) => {
          setStartDate(date);
          props.updateDate(date);
          console.log(date);
        }}
        minDate={subDays(new Date(), 0)}
      />
    );
  };

  export default MinDatePicker;