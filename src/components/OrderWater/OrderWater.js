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

  let isValidFullName = () => {
    return orderData.personalInfo.fullName !== "";
  };
  let isValidNumber = () => {
    return orderData.personalInfo.phoneNumber !== "";
  };
  let isValidEmail = () => {
    return orderData.personalInfo.email !== "";
  };
  let isValidAddress = () => {
    return orderData.personalInfo.address !== "";
  };

  let isValidConsent = () => {
    return orderData.personalInfo.consent;
  };

  let isValidBottleName = () => {
    return orderData.bottle.bottleName !== "";
  };

  let isValidDate = () => {
    return orderData.date !== 0;
  };

  let isValidTime = () => {
    return orderData.time !== "";
  };

  let isValidPersonalInfo = () => {
    return !!(
      isValidFullName() &&
      isValidNumber() &&
      isValidEmail() &&
      isValidAddress() &&
      isValidConsent()
    );
  };

  let isValidForm = () => {
    return !!(
      isValidFullName() &&
      isValidNumber() &&
      isValidEmail() &&
      isValidAddress() &&
      isValidConsent() &&
      isValidBottleName() &&
      isValidDate() &&
      isValidTime()
    );
  };

  let generateReport = event => {
    event.preventDefault();
    event.preventDefault();
    if (!isValidForm()) {
      return null;
    } else {
      props.generateReport();
    }
  };

  let continueFilling = event => {
    event.preventDefault();
    if (!isValidPersonalInfo()) {
      return null;
    } else {
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
          <WaterChoice
            className="choice-options__water-choice"
            bottle={orderData.bottle}
            dispatchOrderData={dispatchOrderData}
          />
          <DateTimeSelection
            className="choice-options__date-time-selection"
            orderData={orderData}
            dispatchOrderData={dispatchOrderData}
          />
        </div>

        <Result className="order-water__result" result={orderData.result} />
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
        <PersonalInfo
          className="order-water__personal-info"
          personalInfo={orderData.personalInfo}
          dispatchOrderData={dispatchOrderData}
        />
        <div className="choice-options">
          <WaterChoice
            className="choice-options__water-choice"
            bottle={orderData.bottle}
            dispatchOrderData={dispatchOrderData}
          />
          <DateTimeSelection
            className="choice-options__date-time-selection"
            orderData={orderData}
            dispatchOrderData={dispatchOrderData}
          />
        </div>

        <Result className="order-water__result" result={orderData.result} />
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
