import React from "react";
import cn from "classnames";
import Bottles from "../Bottles/Bottles";
import "./WaterChoice.css";
import decrement from "../../images/decrement.svg";
import increment from "../../images/increment.svg";

const WaterChoice = props => {
  return (
    <fieldset className={cn("water-choice", props.className)}>
      <h3 className="water-choice__title">Вода</h3>

      <Bottles className="water-choice__bottles" />

      <div className="count water-choice__count">
        <button className="count__button">
          <img
            className="count__button-icon"
            src={decrement}
            alt="Уменьшить количество"
          />
        </button>
        <p className="count__text">1</p>
        <button className="count__button">
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
