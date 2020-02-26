import React from "react";
import cn from "classnames";
import "./InputField.css";

const InputField = props => {
  const { className } = props;
  return <input {...props} className={cn("input-field", className)} />;
};

export default InputField;
