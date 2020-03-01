import React, { useState, useReducer } from "react";
import Banner from "./components/Banner/Banner";
import OrderWater from "./components/OrderWater/OrderWater";
import Report from "./components/Report/Report";
import "./App.css";

const App = () => {
  let orderDataNull = {
    personalInfo: {
      fullName: "",
      phoneNumber: "",
      email: "",
      address: "",
      consent: false
    },
    bottle: {
      bottleName: "",
      bottlePrice: 0,
      bottleCount: 1
    },
    date: 0,
    time: "",
    result: 0
  };

  let reducerOrderData = (orderData, action) => {
    switch (action.type) {
      case "setValueFullName":
        return {
          ...orderData,
          personalInfo: { ...orderData.personalInfo, fullName: action.fullName }
        };
      case "setValueNumber":
        return {
          ...orderData,
          personalInfo: {
            ...orderData.personalInfo,
            phoneNumber: action.phoneNumber
          }
        };
      case "setValueEmail":
        return {
          ...orderData,
          personalInfo: { ...orderData.personalInfo, email: action.email }
        };
      case "setValueAddress":
        return {
          ...orderData,
          personalInfo: { ...orderData.personalInfo, address: action.address }
        };
      case "setCheckboxConsent":
        return {
          ...orderData,
          personalInfo: { ...orderData.personalInfo, consent: action.checked }
        };
      case "incrementBottleCount":
        return {
          ...orderData,
          bottle: {
            ...orderData.bottle,
            bottleCount: orderData.bottle.bottleCount + 1
          }
        };
      case "decrementBottleCount":
        return {
          ...orderData,
          bottle: {
            ...orderData.bottle,
            bottleCount: orderData.bottle.bottleCount - 1
          }
        };
      case "setBottleNamePrice":
        return {
          ...orderData,
          bottle: {
            ...orderData.bottle,
            bottleName: action.bottleName,
            bottlePrice: action.bottlePrice
          }
        };
      case "setPrice":
        return {
          ...orderData,
          result: orderData.bottle.bottleCount * orderData.bottle.bottlePrice
        };
      case "setDate":
        return {
          ...orderData,
          date: action.date
        };
      case "setTime":
        return {
          ...orderData,
          time: action.time
        };
      default:
        throw new Error();
    }
  };

  const [orderData, dispatchOrderData] = useReducer(
    reducerOrderData,
    orderDataNull
  );

  let stepNull = {
    currentStep: 1,
    windowWidth: window.innerWidth,
    WIDTH_CHANGE_POINT: 1200
  };

  let reducer = (step, action) => {
    switch (action.type) {
      case "setValueWidth":
        return { ...step, windowWidth: window.innerWidth };
      case "setStepOne":
        return { ...step, currentStep: 1 };
      case "setStepTwo":
        return { ...step, currentStep: 2 };
      case "setStepThree":
        return { ...step, currentStep: 3 };
      case "setStepFour":
        return { ...step, currentStep: 4 };
      default:
        throw new Error();
    }
  };

  let listenerWidth = () => {
    dispatch({ type: "setValueWidth" });
    window.removeEventListener("resize", listenerWidth);
  };
  window.addEventListener("resize", listenerWidth);

  let createNewOrder = () => {
    setIsProcessed(false);
    dispatch({ type: "setStepOne" });
  };

  let generateReport = () => {
    dispatch({ type: "setStepFour" });
    setIsProcessed(true);
  };

  let startFilling = () => {
    dispatch({ type: "setStepTwo" });
  };

  let continueFilling = () => {
    dispatch({ type: "setStepThree" });
  };

  let comeBack = () => {
    dispatch({ type: "setStepTwo" });
  };
  const [isProcessed, setIsProcessed] = useState(false);
  let [step, dispatch] = useReducer(reducer, stepNull);
  if (!isProcessed) {
    return (
      <div className="App">
        <Banner step={step} startFilling={startFilling} />
        <OrderWater
          step={step}
          isProcessed={isProcessed}
          generateReport={generateReport}
          continueFilling={continueFilling}
          comeBack={comeBack}
          orderData={orderData}
          dispatchOrderData={dispatchOrderData}
        />
      </div>
    );
  } else if (
    step.currentStep === 4 &&
    step.windowWidth < step.WIDTH_CHANGE_POINT
  ) {
    return (
      <div className="App">
        <Report
          orderData={orderData}
          isProcessed={isProcessed}
          createNewOrder={createNewOrder}
        />
      </div>
    );
  } else {
    return (
      <div className="App">
        <Banner step={step} startFilling={startFilling} />
        <Report
          orderData={orderData}
          isProcessed={isProcessed}
          createNewOrder={createNewOrder}
        />
      </div>
    );
  }
};

export default App;
