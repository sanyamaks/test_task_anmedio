import React from "react";
import "./TimeSelectionItem.css";

const TimeSelectionItem = props => {
  const { onChange, timePeriod, checked } = props;
  return (
    <label className="time-selection-item">
      <input
        className="time-selection-item__input"
        type="radio"
        name="time"
        onChange={onChange}
        checked={checked}
      />
      <span className="time-selection-item__background" />
      <p className="time-selection-item__time-interval">{timePeriod}</p>
    </label>
  );
};

export default TimeSelectionItem;
