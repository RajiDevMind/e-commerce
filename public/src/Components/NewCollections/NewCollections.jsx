import React from "react";
import "./NewCollections.css";
import allProduct from "../assets/allproducts.jsx";
import Items from "../Items/Items";

const NewCollections = () => {
  return (
    <div className="new_collections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {allProduct.map((items, i) => {
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

export default NewCollections;
