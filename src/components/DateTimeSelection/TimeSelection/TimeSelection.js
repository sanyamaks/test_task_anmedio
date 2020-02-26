import React, { useState } from "react";
import TimeSelectionItem from "./TimeSelectionItem/TimeSelectionItem";
import "./TimeSelection.css";

const TimeSelection = () => {
  const [time, setTime] = useState([
    { timePeriod: "10:00 - 11:00" },
    { timePeriod: "12:00 - 13:00" },
    { timePeriod: "15:00 - 16:00" }
  ]);
  return (
    <div className="time-selection">
      {time.map(timeItem => (
        <TimeSelectionItem timePeriod={timeItem.timePeriod} />
      ))}
    </div>
  );
};

export default TimeSelection;
