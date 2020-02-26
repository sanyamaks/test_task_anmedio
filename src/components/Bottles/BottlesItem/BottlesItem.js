import React from "react";
import "./BottlesItem.css";

const BottlesItem = props => {
  const { src, alt, volume, quantity, price } = props;
  return (
    <label className="bottles-item">
      <input className="bottles-item__input" name="water" type="radio" />
      <img className="bottles-item__image" src={src} alt={alt} />
      <p className="bottles-item__volume">{volume} л</p>
      <p className="bottles-item__quantity">{quantity} шт</p>
      <p className="bottles-item__price">{price} &#8381;</p>
      <span className="bottles-item__toggle" />
    </label>
  );
};

export default BottlesItem;
