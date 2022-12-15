import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import subDays from "date-fns/subDays";

const MinDatePicker = (props) => {
    const [startDate, setStartDate] = useState(null);
    return (
      <DatePicker
        selected={startDate}
        onChange={(date) => {
          setStartDate(date);
          props.updateDate(date);
        }}
        minDate={subDays(new Date(), 0)}
      />
    );
  };

  export default MinDatePicker;