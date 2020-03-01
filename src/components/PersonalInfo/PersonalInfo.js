import React from "react";
import cn from "classnames";
import InputField from "../InputField/InputField";
import "./PersonalInfo.css";
import flag from "../../images/flag.svg";

const PersonalInfo = props => {
  const { dispatchOrderData, personalInfo, className} = props;

  const handleChangeFullName = event =>
    dispatchOrderData({ type: "setValueFullName", fullName: event.target.value });

  const handleChangeNumber = event => {
    dispatchOrderData({ type: "setValueNumber", phoneNumber: event.target.value });
  };

  const handleChangeEmail = event => {
    dispatchOrderData({ type: "setValueEmail", email: event.target.value });
  };

  const handleChangeAddress = event => {
    dispatchOrderData({ type: "setValueAddress", address: event.target.value });
  };

  const handleChangeConsent = event => {
    dispatchOrderData({ type: "setCheckboxConsent", checked: event.target.checked });
  };
  return (
    <fieldset className={cn("personal-info", className)}>
      <div className="personal-info__container">
        <InputField
          className="personal-info__input-field"
          type="text"
          placeholder="ФИО"
          onChange={handleChangeFullName}
          value={personalInfo.fullName}
        />
        <InputField
          className="personal-info__input-field"
          type="tel"
          pattern="[9]{1}[0-9]{9}"
          placeholder="Телефон"
          onChange={handleChangeNumber}
          value={personalInfo.phoneNumber}
        />
      </div>
      <div className="personal-info__container">
        <InputField
          className="personal-info__input-field"
          type="email"
          placeholder="Email"
          onChange={handleChangeEmail}
          value={personalInfo.email}
        />
        <InputField
          className="personal-info__input-field"
          type="text"
          placeholder="Адрес доставки"
          onChange={handleChangeAddress}
          value={personalInfo.address}
        />
      </div>
      <label className="personal-info__consent">
        <input
          className="personal-info__consent-checkbox"
          type="checkbox"
          name="active"
          onChange={handleChangeConsent}
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
