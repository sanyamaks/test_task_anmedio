import React, { useState } from "react";
import DateSelectionItem from "./DateSelectionItem/DateSelectionItem";
import "./DateSelection.css";
import shape from "../../../images/shape.svg";

const DateSelection = () => {
  const [dates, setDate] = useState([
    { dayMonth: 11, dayWeek: "Пн" },
    { dayMonth: 12, dayWeek: "Вт" },
    { dayMonth: 13, dayWeek: "Ср" },
    { dayMonth: 14, dayWeek: "Чт" },
    { dayMonth: 15, dayWeek: "Пт" },
    { dayMonth: 16, dayWeek: "Сб" }
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

      {dates.map(data => (
        <DateSelectionItem dayMonth={data.dayMonth} dayWeek={data.dayWeek} />
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
