import React from "react";
import "./Popular.css";
import dataProduct from "../assets/Data";
import Items from "../Items/Items";

const Popular = () => {
  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {dataProduct.map((items, i) => {
          const { title, img, id, new_price, old_price } = items;
          return (
            <Items
              key={i}
              id={id}
              img={img}
              title={title}
              new_price={new_price}
              old_price={old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
