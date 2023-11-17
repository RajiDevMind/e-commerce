import React, { useContext, useState } from "react";
import "./items.css";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Items = ({ id, img, title, new_price, old_price }) => {
  const [counts, setCounts] = useState(0);
  const { allProducts, cartItems, addToCart, removeFromCart } =
    useContext(ShopContext);

  return (
    <div className="item">
      <Link to={`/product/${id}`}>
        <img
          src={img}
          alt={title}
          onClick={window.scrollTo({ top: 0, behavior: "smooth" })}
        />
        <p>{title}</p>
      </Link>
      <div className="addPrice">
        <div className="item-prices">
          <div className="item-prices-new">${new_price}</div>
          <div className="item-prices-old">{old_price}</div>
        </div>
        <div className="item-add">
          <button
            className="addbtn"
            onClick={() => {
              addToCart(id);
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Items;
