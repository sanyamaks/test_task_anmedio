import React from "react";
import cn from "classnames";
import "./Result.css";

const Result = props => {
    const {className, result} = props;
  return (
    <div className={cn("result", className)}>
      <p className="result__tittle">Итого</p>
      <p className="result__amount-of-money">{result},00 &#8381;</p>
    </div>
  );
};

export default Result;
