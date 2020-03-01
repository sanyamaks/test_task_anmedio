import React from "react";
import cn from "classnames";
import Bottles from "../Bottles/Bottles";
import "./WaterChoice.css";
import decrement from "../../images/decrement.svg";
import increment from "../../images/increment.svg";

const WaterChoice = props => {
  const { dispatchOrderData, bottle, className } = props;

  const handleClickIncrement = () => {
    dispatchOrderData({ type: "incrementBottleCount" });
    dispatchOrderData({ type: "setPrice" });
  };

  const handleClickDecrement = () => {
    if (bottle.bottleCount === 1) {
      return null;
    } else {
      dispatchOrderData({ type: "decrementBottleCount" });
      dispatchOrderData({ type: "setPrice" });
    }
  };

  const handleChange = event => {
    dispatchOrderData({
      type: "setBottleNamePrice",
      bottleName: event.text,
      bottlePrice: event.price
    });
    dispatchOrderData({ type: "setPrice" });
  };

  return (
    <fieldset className={cn("water-choice", className)}>
      <h3 className="water-choice__title">Вода</h3>

      <Bottles className="water-choice__bottles" onChange={handleChange} />

      <div className="count water-choice__count">
        <button
          className="count__button"
          type="button"
          onClick={handleClickDecrement}
        >
          <img
            className="count__button-icon"
            src={decrement}
            alt="Уменьшить количество"
          />
        </button>
        <p className="count__text">{bottle.bottleCount}</p>
        <button
          className="count__button"
          type="button"
          onClick={handleClickIncrement}
        >
          <img
            className="count__button-icon"
            src={increment}
            alt="Увеличить количество"
          />
        </button>
      </div>
    </fieldset>
  );
};

export default WaterChoice;
