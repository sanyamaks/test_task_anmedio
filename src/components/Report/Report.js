import React, { useState } from "react";
import Result from "../Result/Result";
import Button from "../Button/Button";
import "./Report.css";
import reportIcon from "../../images/report__icon.svg";
import ReportItem from "./ReportItem/ReportItem";

const Report = props => {
  const [report, setReport] = useState([
    { id: 1, name: "Бутыль 18,9 л", info: "1 шт" },
    { id: 2, name: "12 февраля", info: "10:00 - 11:00" },
    {
      id: 3,
      name: "Адрес доставки",
      info: "г. Самара, ул. Мичурина 21, офис 501"
    },
    { id: 4, name: "Телефон", info: "+7 (905) 606-40-04" }
  ]);

  const createNewOrder = event => {
    event.preventDefault();
    props.createNewOrder();
  };

  if (!props.isProcessed) {
    return null;
  } else {
    return (
      <main className="report">
        <header className="report__header">
          <img className="report__icon" src={reportIcon} alt="" />
          <h2 className="report__tittle">Заказ оформлен</h2>
        </header>

        <ul className="report__container">
          {report.map(reportItem => (
            <ReportItem
              name={reportItem.name}
              info={reportItem.info}
              key={reportItem.id}
            />
          ))}
        </ul>
        <Result className="report__result" />
        <p className="report__notification">
          Ваш заказ<span className="report__order-number"> №221 </span>успешно
          оформлен. В ближайшее время по указанному телефону с Вами свяжется наш
          менеджер.
        </p>
        <Button
          className="report__button"
          value="Новый заказ"
          onClick={createNewOrder}
        />
      </main>
    );
  }
};

export default Report;
