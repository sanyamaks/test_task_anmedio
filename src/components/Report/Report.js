import React, { useState, useEffect } from "react";
import Result from "../Result/Result";
import Button from "../Button/Button";
import "./Report.css";
import reportIcon from "../../images/report__icon.svg";
import ReportItem from "./ReportItem/ReportItem";

const Report = props => {
  const { orderData } = props;

  const [report, setReport] = useState([]);
  let reportPush = [];
  useEffect(() => {
    reportPush.push({ id: 1, name: "Бутыль 18,9 л", info: "1 шт" });
    reportPush.push({ id: 2, name: "12 февраля", info: "10:00 - 11:00" });
    console.log(report);
    reportPush.push({
      id: 3,
      name: "Адрес доставки",
      info: orderData.personalInfo.address
    });
    console.log(orderData.personalInfo.address);
    reportPush.push({
      id: 4,
      name: "Телефон",
      info: orderData.personalInfo.phoneNumber
    });
    setReport(reportPush);
  }, []);

  const createNewOrder = event => {
    event.preventDefault();
    props.createNewOrder();
  };
  console.log(report);
  console.log(reportPush);
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
};

export default Report;
