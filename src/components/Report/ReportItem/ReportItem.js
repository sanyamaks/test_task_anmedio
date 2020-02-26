import React from "react";
import "./ReportItem.css";

const ReportItem = props => {
  return (
    <li className="report-item">
      <p className="report-item__name">{props.name}</p>
      <p className="report-item__info">{props.info}</p>
    </li>
  );
};

export default ReportItem;
