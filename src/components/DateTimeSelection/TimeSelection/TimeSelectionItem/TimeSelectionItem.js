import React from "react";
import "./TimeSelectionItem.css";

const TimeSelectionItem = props => {
  return (
    <label className="time-selection-item">
      <input className="time-selection-item__input" type="radio" name="time" />
      <span className="time-selection-item__background" />
      <p className="time-selection-item__time-interval">{props.timePeriod}</p>
    </label>
  );
};

export default TimeSelectionItem;
