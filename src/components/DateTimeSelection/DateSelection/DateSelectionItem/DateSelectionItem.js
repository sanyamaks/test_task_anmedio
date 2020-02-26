import React from "react";
import "./DateSelectionItem.css";

const DateSelectionItem = props => {
  return (
    <label className="date-selection-item">
      <input className="date-selection-item__input" type="radio" name="day" />
      <span className="date-selection-item__background" />
      <p className="date-selection-item__day-of-the-month">{props.dayMonth}</p>
      <p className="date-selection-item__day-of-the-week date-selection__day-of-the-week_day-off">
          {props.dayWeek}
      </p>
    </label>
  );
};

export default DateSelectionItem;
