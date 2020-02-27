import React from "react";
import cn from "classnames";
import Button from "../Button/Button";
import Result from "../Result/Result";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import WaterChoice from "../WaterChoice/WaterChoice";
import DateTimeSelection from "../DateTimeSelection/DateTimeSelection";
import "./OrderWater.css";
import comebackIcon from "../../images/comeback.svg";

const OrderWater = props => {
  let generateReport = event => {
    event.preventDefault();
    props.generateReport();
  };

  let continueFilling = event => {
    event.preventDefault();
    props.continueFilling();
  };

    let comeBack = event => {
        event.preventDefault();
        props.comeBack();
    };

  if (props.isProcessed) {
    return null;
  } else {
    return (
      <form
        onSubmit={generateReport}
        className={cn("order-water", props.currentStep.orderWaterBlockState)}
      >
        <h2
          className={cn(
            "order-water__title",
            props.currentStep.orderWaterOneElementsState
          )}
        >
          Заполните данные
        </h2>
        <PersonalInfo
          className={cn(
            "order-water__personal-info",
            props.currentStep.orderWaterOneBlockState
          )}
        />
        <Button
          className={cn(
            "order-water__button order-water__button_mobile",
            props.currentStep.orderWaterOneElementsState
          )}
          value="Далее"
          type="button"
          onClick={continueFilling}
        />
        <button
          className={cn(
            "order-water__comeback order-water__comeback_mobile",
            props.currentStep.orderWaterTwoElementsState
          )}
          type="button"
          onClick={comeBack}
        >
          <img
            className="order-water__comeback-icon"
            src={comebackIcon}
            alt="Вернуться назад"
          />
        </button>
        <div
          className={cn(
            "choice-options",
            props.currentStep.orderWaterTwoBlockState
          )}
        >
          <WaterChoice className="choice-options__water-choice" />
          <DateTimeSelection className=" choice-options__date-time-selection" />
        </div>

        <Result
          className={cn(
            "order-water__result",
            props.currentStep.orderWaterTwoElementsState
          )}
        />
        <Button
          className={cn(
            "order-water__button",
            props.currentStep.orderWaterTwoElementsState
          )}
          value="Заказать воду"
          onClick={generateReport}
        />
      </form>
    );
  }
};

export default OrderWater;
