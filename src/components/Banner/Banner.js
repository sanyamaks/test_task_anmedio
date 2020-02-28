import React from "react";
import Button from "../Button/Button";
import "./Banner.css";
import mainIllustration from "../../images/main-illustration.svg";

const Banner = props => {
  const { step } = props;
  let startFilling = event => {
    event.preventDefault();
    props.startFilling();
  };
  if (step.currentStep !== 1 && step.windowWidth < step.WIDTH_CHANGE_POINT) {
    return null;
  } else if (
    step.currentStep === 1 &&
    step.windowWidth < step.WIDTH_CHANGE_POINT
  ) {
    return (
      <article className="banner">
        <img
          className="banner__main-illustration"
          alt="logo"
          src={mainIllustration}
        />
        <h2 className="banner__title">Чистая Вода</h2>
        <p className="banner__description">
          Питьевая вода, предназначенная для ежедневного потребления, идеально
          подходит для кулеров. Закажите доставку воды и мы привезем её на дом
          или в офис.
        </p>
        <Button
          className="banner__button banner__button_mobile"
          value="Заказать воду"
          onClick={startFilling}
        />
      </article>
    );
  } else {
    return (
      <article className="banner">
        <img
          className="banner__main-illustration"
          alt="logo"
          src={mainIllustration}
        />
        <h2 className="banner__title">Чистая Вода</h2>
        <p className="banner__description">
          Питьевая вода, предназначенная для ежедневного потребления, идеально
          подходит для кулеров. Закажите доставку воды и мы привезем её на дом
          или в офис.
        </p>
      </article>
    );
  }
};

export default Banner;
