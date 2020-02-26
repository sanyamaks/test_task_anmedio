import React from "react";
import cn from "classnames";
import InputField from "../InputField/InputField";
import "./PersonalInfo.css";
import flag from "../../images/flag.svg";

const PersonalInfo = props => {
  const { className } = props;
  return (
    <fieldset className={cn("personal-info", className)}>
      <div className="personal-info__container">
        <InputField
          className="personal-info__input-field"
          type="text"
          placeholder="ФИО"
        />
        <InputField
          className="personal-info__input-field"
          type="number"
          placeholder="Телефон"
        />
      </div>
      <div className="personal-info__container">
        <InputField
          className="personal-info__input-field"
          type="email"
          placeholder="Email"
        />
        <InputField
          className="personal-info__input-field"
          type="text"
          placeholder="Адрес доставки"
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
          <a className="personal-info__consent-link" href="#">
            обработку персональных данных
          </a>
        </p>
      </label>
    </fieldset>
  );
};

export default PersonalInfo;
