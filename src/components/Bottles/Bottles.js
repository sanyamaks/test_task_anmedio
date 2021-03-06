import React from "react";
import cn from "classnames";
import BottlesItem from "./BottlesItem/BottlesItem";
import "./Bottles.css";
import oneBottle from "../../images/one-bottle.svg";
import manyBottles from "../../images/many-bottles.svg";

const Bottles = props => {
  const bottles = [
    {
      id: 1,
      src: oneBottle,
      text: "Одна бутылка 18,9 л",
      volume: "18,9",
      quantity: "1",
      price: "220"
    },
    {
      id: 2,
      src: manyBottles,
      text: "Шесть бутылок 1,5 л",
      volume: "1,5",
      quantity: "6",
      price: "175"
    },
    {
      id: 3,
      src: manyBottles,
      text: "Двенадцать бутылок 0,5 л",
      volume: "0,5",
      quantity: "12",
      price: "270"
    }
  ];

  return (
    <div className={cn("bottles", props.className)}>
      {bottles.map(bottleItem => (
        <BottlesItem
          src={bottleItem.src}
          alt={bottleItem.text}
          volume={bottleItem.volume}
          quantity={bottleItem.quantity}
          price={bottleItem.price}
          key={bottleItem.id}
          onChange={() => props.onChange(bottleItem)}
        />
      ))}
    </div>
  );
};

export default Bottles;
