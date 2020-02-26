import React from "react";
import Button from "../Button/Button";
import Result from "../Result/Result";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import WaterChoice from "../WaterChoice/WaterChoice";
import DateTimeSelection from "../DateTimeSelection/DateTimeSelection";
import "./OrderWater.css";

const OrderWater = () => {
  return (
    <form className="order-water">
      <h2 className="order-water__title">Заполните данные</h2>
      <PersonalInfo className="order-water__personal-info" />

      <button className="button button_mobile">Далее</button>

      <div className="choice-options">
        <WaterChoice className="choice-options__water-choice" />
        <DateTimeSelection className=" choice-options__date-time-selection" />
      </div>

      <Result className="order-water__result" />
      <Button className="order-water__button" value="Заказать воду" />
    </form>
  );
};

export default OrderWater;
