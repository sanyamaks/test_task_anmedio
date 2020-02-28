import React, { useReducer, useState } from "react";
import cn from "classnames";
import InputField from "../InputField/InputField";
import "./PersonalInfo.css";
import flag from "../../images/flag.svg";

const PersonalInfo = props => {
  const { className } = props;

  const handleChangeFullname = event => {
    setValueFullname(event.target.value);
  };

  const handleChangeNumber = event => {
    setValueNumber(event.target.value);
  };

  const handleChangeEmail = event => {
    setValueEmail(event.target.value);
  };

  const handleChangeAddress = event => {
    setValueAddress(event.target.value);
  };

  const [valueFullname, setValueFullname] = useState("");
  const [valueNumber, setValueNumber] = useState("");
  const [valueEmail, setValueEmail] = useState("");
  const [valueAddress, setValueAddress] = useState("");

  // const personalInfoNull = {
  //     fullname: "",
  //     phoneNumber: "",
  //     email: "",
  //     address: ""
  // };

  // let reducer = (personalInfo, action, event) => {
  //     switch (action.type) {
  //         case "setValueFullName":
  //             return { fullname: event.target.value, ...personalInfo };
  //         case "setValueNumber":
  //             return { phoneNumber: event.target.value, ...personalInfo };
  //         case "setValueEmail":
  //             return { email: event.target.value, ...personalInfo };
  //         case "setValueAddress":
  //             return { address: event.target.value, ...personalInfo };
  //         default:
  //             throw new Error();
  //     }
  // };
  //
  // const handleChangeFullname = () => {
  //     dispatch({ type: "setValueFullName" });
  // };
  //
  // const handleChangeNumber = () => {
  //     dispatch({ type: "setValueNumber" });
  // };
  //
  // const handleChangeEmail = () => {
  //     dispatch({ type: "setValueEmail" });
  // };
  //
  // const handleChangeAddress = () => {
  //     dispatch({ type: "setValueAddress" });
  // };
  return (
    <fieldset className={cn("personal-info", className)}>
      <div className="personal-info__container">
        <InputField
          className="personal-info__input-field"
          type="text"
          placeholder="ФИО"
          onChange={handleChangeFullname}
          value={valueFullname}
        />
        <InputField
          className="personal-info__input-field"
          type="number"
          placeholder="Телефон"
          onChange={handleChangeNumber}
          value={valueNumber}
        />
      </div>
      <div className="personal-info__container">
        <InputField
          className="personal-info__input-field"
          type="email"
          placeholder="Email"
          onChange={handleChangeEmail}
          value={valueEmail}
        />
        <InputField
          className="personal-info__input-field"
          type="text"
          placeholder="Адрес доставки"
          onChange={handleChangeAddress}
          value={valueAddress}
        />
      </div>
      <label className="personal-info__consent">
        <input
          className="personal-info__consent-checkbox"
          type="checkbox"
          name="active"
        />
        <div className="personal-info__consent-icon-container">
          <img className="personal-info__consent-icon" src={flag} alt="" />
        </div>
        <p className="personal-info__consent-text">
          Я согласен на <span />
          <a
            className="personal-info__consent-link"
            href="http://www.consultant.ru/document/cons_doc_LAW_61801/"
          >
            обработку персональных данных
          </a>
        </p>
      </label>
    </fieldset>
  );
};

export default PersonalInfo;
