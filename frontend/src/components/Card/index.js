import React from "react";
import "./styles.css";

const Card = ({ title, price, imageUrl }) => {
  const formatPrice = (value) => {
    return "R$ " + price;
  };

  return (
    <div className="containerCard">
      <img className="image" alt="title" src={imageUrl} />
      <div className="productInfos">
        <span className="title">{title}</span>
        <span className="price">{formatPrice(price)}</span>
      </div>
    </div>
  );
};

export default Card;
