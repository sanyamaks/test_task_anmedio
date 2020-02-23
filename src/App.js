import React from "react";
import "./App.css";
import mainIllustration from "../src/images/main-illustration.svg";
import oneBottle from "../src/images/one-bottle.svg";
import manyBottles from "../src/images/many-bottles.svg";
import reportIcon from "../src/images/report__icon.svg";

const App = () => {
  return (
    <div className="App">
      <article className="pure-water">
        <img
          className="pure-water__main-illustration"
          alt="logo"
          src={mainIllustration}
        />
        <h2 className="pure-water__title">Чистая Вода</h2>
        <p className="pure-water__description">
          Питьевая вода, предназначенная для ежедневного потребления, идеально
          подходит для кулеров. Закажите доставку воды и мы привезем её на дом
          или в офис.
        </p>
      </article>
      <main className="order-water">
        <h2 className="order-water__title">Заполните данные</h2>
        <fieldset className="personal-data">
          <div className="personal-data__container">
            <input
              className="personal-data__fullname"
              type="text"
              placeholder="Кудряшов Вячеслав Сергеевич"
            />
            <input
              className="personal-data__phone-number"
              type="number"
              placeholder="+7 (905) 606-40-04"
            />
          </div>
          <div className="personal-data__container">
            <input
              className="personal-data__email"
              type="email"
              placeholder="voda@mail.ru"
            />
            <input
              className="personal-data__address"
              type="text"
              placeholder="г. Самара, ул. Мичурина 21, офис 501"
            />
          </div>
          <label className="personal-data__consent">
            <input
              className="personal-data__consent-checkbox"
              type="checkbox"
            />
            <p className="personal-data__consent-text">
              Я согласен на <span />
              <a className="personal-data__consent-link" href="#">
                обработку персональных данных
              </a>
            </p>
          </label>
        </fieldset>
        <fieldset className="water-choice">
          <h3 className="water-choice__title">Вода</h3>
          <div className="water-choice__container">
            <label className="water-choice__item">
              <input
                className="water-choice__input"
                name="water"
                type="radio"
              />
              <img
                className="water-choice__image"
                src={oneBottle}
                alt="Одна бутылка 18,9 л"
              />
              <p className="water-choice__volume">18,9 л</p>
              <p className="water-choice__quantity">1 шт</p>
              <p className="water-choice__price">220 &#8381;</p>
              <span className="water-choice__toggle" />
            </label>
            <label className="water-choice__item">
              <input
                className="water-choice__input"
                name="water"
                type="radio"
              />
              <img
                className="water-choice__image"
                src={manyBottles}
                alt="Шесть бутылок 1,5 л"
              />
              <p className="water-choice__volume">1,5 л</p>
              <p className="water-choice__quantity">6 шт</p>
              <p className="water-choice__price">175 &#8381;</p>
              <span className="water-choice__toggle" />
            </label>
            <label className="water-choice__item">
              <input
                className="water-choice__input"
                name="water"
                type="radio"
              />
              <img
                className="water-choice__image"
                src={manyBottles}
                alt="Двенадцать бутылка 0,5 л"
              />
              <p className="water-choice__volume">0,5 л</p>
              <p className="water-choice__quantity">12 шт</p>
              <p className="water-choice__price">270 &#8381;</p>
              <span className="water-choice__toggle" />
            </label>
          </div>
        </fieldset>

        <fieldset className="date-time-selection">
          <h3 className="date-time-selection__title">Дата и время доставки</h3>
          <p className="date-time-selection__subtitle">День</p>

          <div className="date-container">
            <button className="date-container__button" />

            <label className="date-container__item">
              <input
                className="date-container__input"
                type="radio"
                name="day"
              />
              <span className="date-container__background" />
              <p className="date-container__day-of-the-month">11</p>
              <p className="date-container__day-of-the-week">Пн</p>
            </label>

            <label className="date-container__item">
              <input
                className="date-container__input"
                type="radio"
                name="day"
              />
              <span className="date-container__background" />
              <p className="date-container__day-of-the-month">11</p>
              <p className="date-container__day-of-the-week">Пн</p>
            </label>

            <label className="date-container__item">
              <input
                className="date-container__input"
                type="radio"
                name="day"
              />
              <span className="date-container__background" />
              <p className="date-container__day-of-the-month">11</p>
              <p className="date-container__day-of-the-week">Пн</p>
            </label>

            <label className="date-container__item">
              <input
                className="date-container__input"
                type="radio"
                name="day"
              />
              <span className="date-container__background" />
              <p className="date-container__day-of-the-month">11</p>
              <p className="date-container__day-of-the-week">Пн</p>
            </label>

            <label className="date-container__item">
              <input
                className="date-container__input"
                type="radio"
                name="day"
              />
              <span className="date-container__background" />
              <p className="date-container__day-of-the-month">11</p>
              <p className="date-container__day-of-the-week date-container__day-of-the-week_day-off">
                Пн
              </p>
            </label>

            <label className="date-container__item">
              <input
                className="date-container__input"
                type="radio"
                name="day"
              />
              <span className="date-container__background" />
              <p className="date-container__day-of-the-month">11</p>
              <p className="date-container__day-of-the-week date-container__day-of-the-week_day-off">
                Пн
              </p>
            </label>

            <button className="date-container__button date-container__button_reverse" />
          </div>

          <p className="date-time-selection__subtitle">Время</p>
          <div className="time-container">
            <label className="time-container__item">
              <input
                className="time-container__input"
                type="radio"
                name="time"
              />
              <span className="time-container__background" />
              <p className="time-container__time-interval">10:00 - 11:00</p>
            </label>

            <label className="time-container__item">
              <input
                className="time-container__input"
                type="radio"
                name="time"
              />
              <span className="time-container__background" />
              <p className="time-container__time-interval">12:00 - 13:00</p>
            </label>

            <label className="time-container__item">
              <input
                className="time-container__input"
                type="radio"
                name="time"
              />
              <span className="time-container__background" />
              <p className="time-container__time-interval">15:00 - 16:00</p>
            </label>
          </div>
        </fieldset>

        <div className="result order-water__result">
          <p className="result__tittle">Итого</p>
          <p className="result__amount-of-money">220,00 &#8381;</p>
        </div>
        <button className="button order-water__button">Заказать воду</button>
      </main>

      <main className="report">
        <header className="report__header">
          <img className="report__icon" src={reportIcon} alt="" />
          <h2 className="report__tittle">Заказ оформлен</h2>
        </header>

        <ul className="report__container">
          <li className="report__item">
            <p className="report__item-name">Бутыль 18,9 л</p>
            <p className="report__item-info">1 шт</p>
          </li>

          <li className="report__item">
            <p className="report__item-name">12 февраля</p>
            <p className="report__item-info">10:00 - 11:00</p>
          </li>

          <li className="report__item">
            <p className="report__item-name">Адрес доставки</p>
            <p className="report__item-info">
              г. Самара, ул. Мичурина 21, офис 501
            </p>
          </li>

          <li className="report__item">
            <p className="report__item-name">Телефон</p>
            <p className="report__item-info">+7 (905) 606-40-04</p>
          </li>
        </ul>

        <div className="result report__result">
          <p className="result__tittle">Итого</p>
          <p className="result__amount-of-money">220,00 &#8381;</p>
        </div>
        <p className="report__notification">
          Ваш заказ<span className="report__order-number"> №221 </span>успешно
          оформлен. В ближайшее время по указанному телефону с Вами свяжется наш
          менеджер.
        </p>
        <button className="button report__button">Новый заказ</button>
      </main>
    </div>
  );
};

export default App;
