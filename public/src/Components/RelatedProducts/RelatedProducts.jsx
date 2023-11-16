import React from "react";
import "./RelatedProducts.css";
import data from "../assets/allproducts";
import Items from "../Items/Items";

const RelatedProducts = () => {
  return (
    <div className="RelatedProducts">
      <h1>related products</h1>
      <hr />
      <div className="related_item">
        {data.map((item, i) => {
          const { title, img, id, new_price, old_price } = item;
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

export default RelatedProducts;
