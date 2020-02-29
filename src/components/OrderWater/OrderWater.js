import React from "react";
import Button from "../Button/Button";
import Result from "../Result/Result";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import WaterChoice from "../WaterChoice/WaterChoice";
import DateTimeSelection from "../DateTimeSelection/DateTimeSelection";
import "./OrderWater.css";
import comebackIcon from "../../images/comeback.svg";

const OrderWater = props => {
  const { orderData, dispatchOrderData } = props;

  console.log(orderData);

  let isValidFullName = () => {
    if (orderData.personalInfo.fullname === "") {
      return false;
    } else {
      return true;
    }
  };
  let isValidNumber = () => {
    if (orderData.personalInfo.phoneNumber === "") {
      return false;
    } else {
      return true;
    }
  };
  let isValidEmail = () => {
    if (orderData.personalInfo.email === "") {
      return false;
    } else {
      return true;
    }
  };
  let isValidAddress = () => {
    if (orderData.personalInfo.address === "") {
      return false;
    } else {
      return true;
    }
  };

  let isValidConsent = () => {
    if (!orderData.personalInfo.consent) {
      return false;
    } else {
      return true;
    }
  };

  let isValidPersonalInfo = () => {
    if (
      isValidFullName() &&
      isValidNumber() &&
      isValidEmail() &&
      isValidAddress() &&
      isValidConsent()
    ) {
      return true;
    } else {
      return false;
    }
  };

  let generateReport = event => {
    event.preventDefault();
    props.generateReport();
  };

  let continueFilling = event => {
    event.preventDefault();
    if (!isValidPersonalInfo()) {
      return null;
    } else {
      console.log("valid: " + isValidPersonalInfo());
      props.continueFilling();
    }
  };

  let comeBack = event => {
    event.preventDefault();
    props.comeBack();
  };

  if (
    props.step.currentStep !== 2 &&
    props.step.currentStep !== 3 &&
    props.step.windowWidth < props.step.WIDTH_CHANGE_POINT
  ) {
    return null;
  } else if (
    props.step.currentStep === 2 &&
    props.step.windowWidth < props.step.WIDTH_CHANGE_POINT
  ) {
    return (
      <form onSubmit={generateReport} className="order-water">
        <h2 className="order-water__title">Заполните данные</h2>
        <PersonalInfo
          className="order-water__personal-info"
          personalInfo={orderData.personalInfo}
          dispatchOrderData={dispatchOrderData}
        />
        <Button
          className="order-water__button order-water__button_mobile"
          value="Далее"
          onClick={continueFilling}
        />
      </form>
    );
  } else if (
    props.step.currentStep === 3 &&
    props.step.windowWidth < props.step.WIDTH_CHANGE_POINT
  ) {
    return (
      <form onSubmit={generateReport} className="order-water">
        <button
          className="order-water__comeback order-water__comeback_mobile"
          type="button"
          onClick={comeBack}
        >
          <img
            className="order-water__comeback-icon"
            src={comebackIcon}
            alt="Вернуться назад"
          />
        </button>
        <div className="choice-options">
          <WaterChoice className="choice-options__water-choice" />
          <DateTimeSelection className="choice-options__date-time-selection" />
        </div>

        <Result className="order-water__result" />
        <Button
          className="order-water__button"
          value="Заказать воду"
          onClick={generateReport}
        />
      </form>
    );
  } else {
    return (
      <form onSubmit={generateReport} className="order-water">
        <h2 className="order-water__title">Заполните данные</h2>
        <PersonalInfo className="order-water__personal-info" />
        <div className="choice-options">
          <WaterChoice className="choice-options__water-choice" />
          <DateTimeSelection className="choice-options__date-time-selection" />
        </div>

        <Result className="order-water__result" />
        <Button
          className="order-water__button"
          value="Заказать воду"
          onClick={generateReport}
        />
      </form>
    );
  }
};

export default OrderWater;
