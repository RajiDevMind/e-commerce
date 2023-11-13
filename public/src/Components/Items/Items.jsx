import React from "react";
import "./items.css";

const Items = ({ img, title, new_price, old_price }) => {
  return (
    <div className="item">
      <img src={img} alt="" />
      <p>{title}</p>
      <div className="item-prices">
        <div className="item-prices-new">${new_price}</div>
        <div className="item-prices-old">{old_price}</div>
      </div>
    </div>
  );
};

export default Items;
