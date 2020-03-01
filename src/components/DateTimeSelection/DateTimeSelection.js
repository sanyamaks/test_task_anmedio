import React from "react";
import cn from "classnames";
import "./DateTimeSelection.css";
import DateSelection from "./DateSelection/DateSelection";
import TimeSelection from "./TimeSelection/TimeSelection";

const DateTimeSelection = props => {
  const { dispatchOrderData, orderData, className } = props;
  const handleChangeDate = event => {
    dispatchOrderData({
      type: "setDate",
      date: event.id
    });
  };

  const handleChangeTime = event => {
    dispatchOrderData({
      type: "setTime",
      time: event.timePeriod
    });
  };
  return (
    <fieldset className={cn("date-time-selection", className)}>
      <h3 className="date-time-selection__title">Дата и время доставки</h3>
      <p className="date-time-selection__subtitle">День</p>

      <DateSelection onChange={handleChangeDate} orderData={orderData} />

      <p className="date-time-selection__subtitle">Время</p>

      <TimeSelection
        onChange={handleChangeTime}
        orderData={orderData}
        dispatchOrderData={dispatchOrderData}
      />
    </fieldset>
  );
};

export default DateTimeSelection;
