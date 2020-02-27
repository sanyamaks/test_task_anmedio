import React from "react";
import cn from "classnames";
import Button from "../Button/Button";
import "./Banner.css";
import mainIllustration from "../../images/main-illustration.svg";

const Banner = props => {

  let startFilling = event => {
    event.preventDefault();
    props.startFilling();
  };

  return (
    <article className={cn("banner", props.currentStep.bannerBlockState)}>
      <img
        className="banner__main-illustration"
        alt="logo"
        src={mainIllustration}
      />
      <h2 className="banner__title">Чистая Вода</h2>
      <p className="banner__description">
        Питьевая вода, предназначенная для ежедневного потребления, идеально
        подходит для кулеров. Закажите доставку воды и мы привезем её на дом или
        в офис.
      </p>
      <Button
        className={cn("banner__button banner__button_mobile", props.currentStep.bannerElementsState)}
        value="Заказать воду"
        onClick={startFilling}
      />
    </article>
  );
};

export default Banner;
