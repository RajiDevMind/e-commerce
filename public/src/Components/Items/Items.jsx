import React from "react";
import "./items.css";
import { Link } from "react-router-dom";

const Items = ({ id, img, title, new_price, old_price }) => {
  return (
    <div className="item">
      <Link to={`/product/${id}`}>
        <img src={img} alt={title} />
      </Link>
      <p>{title}</p>
      <div className="item-prices">
        <div className="item-prices-new">${new_price}</div>
        <div className="item-prices-old">{old_price}</div>
      </div>
    </div>
  );
};

export default Items;
