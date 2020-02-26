import React from "react";
import cn from "classnames";
import "./DateTimeSelection.css";
import DateSelection from "./DateSelection/DateSelection";
import TimeSelection from "./TimeSelection/TimeSelection";

const DateTimeSelection = props => {
  return (
    <fieldset className={cn("date-time-selection", props.className)}>
      <h3 className="date-time-selection__title">Дата и время доставки</h3>
      <p className="date-time-selection__subtitle">День</p>

      <DateSelection />

      <p className="date-time-selection__subtitle">Время</p>

      <TimeSelection />
    </fieldset>
  );
};

export default DateTimeSelection;
