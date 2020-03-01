import React, { useEffect, useState } from "react";
import DateSelectionItem from "./DateSelectionItem/DateSelectionItem";
import "./DateSelection.css";
import shape from "../../../images/shape.svg";

const DateSelection = props => {
  const MSEC_IN_DAY = 86400000;
  const NUMBER_OF_DAYS = 6;

  const [dates, setDate] = useState([]);
  const [count, setCount] = useState(0);

  // const isChecked = (date) => {
  //   if (date === props.orderData.date) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };

  useEffect(() => {
    createArrayDates();
  }, [count]);

  const dayWeekNames = today => {
    const array = ["Вc", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
    return array[today.getDay()];
  };

  const createArrayDates = () => {
    let tempDates = [];
    for (let i = count; i <= count + NUMBER_OF_DAYS - 1; i++) {
      tempDates.push(setDateDays(i));
    }
    setDate(tempDates);
  };

  const setDateDays = number => {
    let currentTimeNow = new Date();
    let year = currentTimeNow.getFullYear();
    let month = currentTimeNow.getMonth();
    let day = currentTimeNow.getDate();
    let dateToday = new Date(year, month, day);
    let timestampToday =
      dateToday.setDate(dateToday.getDate()) + number * MSEC_IN_DAY;
    let timestampDay = new Date(timestampToday);
    let dayMonth = timestampDay.getDate();
    let dayWeek = dayWeekNames(timestampDay);
    return { id: timestampToday, dayMonth: dayMonth, dayWeek: dayWeek };
    // return { id: timestampToday, dayMonth: dayMonth, dayWeek: dayWeek, checked: isChecked(timestampToday) };
  };

  const handleClickNext = async () => {
    await setCount(count + NUMBER_OF_DAYS);
    createArrayDates();
  };

  const handleClickBack = () => {
    if (count === 0) {
      return null;
    } else {
      setCount(count - NUMBER_OF_DAYS);
      createArrayDates();
    }
  };

  return (
    <div className="date-selection">
      <button
        className="date-selection__button"
        type="button"
        onClick={handleClickBack}
      >
        <img
          className="date-selection__button-icon"
          src={shape}
          alt="Листать вперед"
        />
      </button>
      {dates.map(date => (
        <DateSelectionItem
          dayMonth={date.dayMonth}
          dayWeek={date.dayWeek}
          key={date.id}
          onChange={() => props.onChange(date)}
          // checked={date.checked}
        />
      ))}

      <button
        className="date-selection__button date-selection__button_reverse"
        type="button"
        onClick={handleClickNext}
      >
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
