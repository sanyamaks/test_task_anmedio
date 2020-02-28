import React, { useState } from "react";
import DateSelectionItem from "./DateSelectionItem/DateSelectionItem";
import "./DateSelection.css";
import shape from "../../../images/shape.svg";

const DateSelection = () => {
  const [dates, setDate] = useState([
    { id: 1, dayMonth: 11, dayWeek: "Пн" },
    { id: 2, dayMonth: 12, dayWeek: "Вт" },
    { id: 3, dayMonth: 13, dayWeek: "Ср" },
    { id: 4, dayMonth: 14, dayWeek: "Чт" },
    { id: 5, dayMonth: 15, dayWeek: "Пт" },
    { id: 6, dayMonth: 16, dayWeek: "Сб" }
  ]);
  return (
    <div className="date-selection">
      <button className="date-selection__button">
        <img
          className="date-selection__button-icon"
          src={shape}
          alt="Листать вперед"
        />
      </button>

      {dates.map(date => (
        <DateSelectionItem dayMonth={date.dayMonth} dayWeek={date.dayWeek} key={date.id}/>
      ))}

      <button className="date-selection__button date-selection__button_reverse">
        <img
          className="date-selection__button-icon"
          src={shape}
          alt="Листать вперед"
        />
      </button>
    </div>
  );
};

export default DateSelection;
