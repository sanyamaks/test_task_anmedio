import React, { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import OrderWater from "./components/OrderWater/OrderWater";
import Report from "./components/Report/Report";

const App = () => {
  const [step, setStep] = useState(1);
  return (
    <div className="App">
      <Banner />
      <OrderWater />
      <Report />
    </div>
  );
};

export default App;
