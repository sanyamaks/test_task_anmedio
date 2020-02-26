import React from "react";
import cn from "classnames";
import "./Button.css";

const Button = props => {
  return (
    <button className={cn("button", props.className)}>{props.value}</button>
  );
};

export default Button;
