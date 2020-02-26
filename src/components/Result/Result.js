import React from "react";
import cn from "classnames";
import "./Result.css";

const Result = props => {
  return (
    <div className={cn("result", props.className)}>
      <p className="result__tittle">Итого</p>
      <p className="result__amount-of-money">220,00 &#8381;</p>
    </div>
  );
};

export default Result;
