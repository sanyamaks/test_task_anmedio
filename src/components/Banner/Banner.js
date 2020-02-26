import React from "react";
import "./Banner.css";
import mainIllustration from "../../images/main-illustration.svg";

const Banner = () => {
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
        подходит для кулеров. Закажите доставку воды и мы привезем её на дом или
        в офис.
      </p>
      <button className="button banner__button">Заказать воду</button>
    </article>
  );
};

export default Banner;
