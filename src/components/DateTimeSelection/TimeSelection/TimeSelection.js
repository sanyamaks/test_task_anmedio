import React, { useState } from "react";
import TimeSelectionItem from "./TimeSelectionItem/TimeSelectionItem";
import "./TimeSelection.css";

const TimeSelection = () => {
  const [time, setTime] = useState([
    { id: 1, timePeriod: "10:00 - 11:00" },
    { id: 2, timePeriod: "12:00 - 13:00" },
    { id: 3, timePeriod: "15:00 - 16:00" }
  ]);
  return (
    <div className="time-selection">
      {time.map(timeItem => (
        <TimeSelectionItem timePeriod={timeItem.timePeriod} key={timeItem.id} />
      ))}
    </div>
  );
};

export default TimeSelection;
