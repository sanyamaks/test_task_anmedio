import React, { useState } from "react";
import Banner from "./components/Banner/Banner";
import OrderWater from "./components/OrderWater/OrderWater";
import Report from "./components/Report/Report";
import "./App.css";

const App = () => {
  const isShow = {
    true: "mobile-version_show",
    false: "mobile-version_hide"
  };

  const stepOne = {
    banner: {
      bannerBlockState: isShow.true,
      bannerElementsState: isShow.true
    },
    orderWater: {
      orderWaterBlockState: isShow.false,
      orderWaterOneBlockState: isShow.false,
      orderWaterOneElementsState: isShow.false,
      orderWaterTwoBlockState: isShow.false,
      orderWaterTwoElementsState: isShow.false
    }
  };

  const stepTwo = {
    banner: {
      bannerBlockState: isShow.false,
      bannerElementsState: isShow.false
    },
    orderWater: {
      orderWaterBlockState: isShow.true,
      orderWaterOneBlockState: isShow.true,
      orderWaterOneElementsState: isShow.true,
      orderWaterTwoBlockState: isShow.false,
      orderWaterTwoElementsState: isShow.false
    }
  };

  const stepThree = {
    banner: {
      bannerBlockState: isShow.false,
      bannerElementsState: isShow.false
    },
    orderWater: {
      orderWaterBlockState: isShow.true,
      orderWaterOneBlockState: isShow.false,
      orderWaterOneElementsState: isShow.false,
      orderWaterTwoBlockState: isShow.true,
      orderWaterTwoElementsState: isShow.true
    }
  };

  let [currentStep, setCurrentStep] = useState(stepThree);

  const [isProcessed, setIsProcessed] = useState(false);

  let createNewOrder = () => {
    setIsProcessed(false);
    setCurrentStep((currentStep = stepOne));
  };

  let generateReport = () => {
    setIsProcessed(true);
  };

  let startFilling = () => {
    setCurrentStep((currentStep = stepTwo));
  };

  let continueFilling = () => {
    setCurrentStep((currentStep = stepThree));
  };

  let comeBack = () => {
    setCurrentStep((currentStep = stepTwo));
  };

  return (
    <div className="App">
      <Banner currentStep={currentStep.banner} startFilling={startFilling} />
      <OrderWater
        currentStep={currentStep.orderWater}
        isProcessed={isProcessed}
        generateReport={generateReport}
        continueFilling={continueFilling}
        comeBack={comeBack}
      />
      <Report isProcessed={isProcessed} createNewOrder={createNewOrder} />
    </div>
  );
};

export default App;
