import React, { useEffect, useState } from "react";
import TimeSelectionItem from "./TimeSelectionItem/TimeSelectionItem";
import "./TimeSelection.css";

const TimeSelection = props => {
  const { orderData, onChange, dispatchOrderData } = props;

  const weekendTime = [
    { id: 2, timePeriod: "12:00 - 13:00" },
    { id: 3, timePeriod: "15:00 - 16:00" }
  ];

  const workingDayTime = [
    { id: 1, timePeriod: "10:00 - 11:00" },
    { id: 2, timePeriod: "12:00 - 13:00" },
    { id: 3, timePeriod: "15:00 - 16:00" }
  ];
  const day = new Date(orderData.date).getDay();
  const [time, setTime] = useState([]);

  useEffect(() => {
    if (day === 0 || day === 6) {
      setTime(weekendTime);
      dispatchOrderData({
        type: "setTime",
        time: ""
      });
    } else {
      setTime(workingDayTime);
    }
  }, [day]);

  return (
    <div className="time-selection">
      {time.map(timeItem => (
        <TimeSelectionItem
          timePeriod={timeItem.timePeriod}
          key={timeItem.id}
          onChange={() => onChange(timeItem)}
          defaultChecked="false"
        />
      ))}
    </div>
  );
};

export default TimeSelection;
