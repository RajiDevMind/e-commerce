import React from "react";
import "./RelatedProducts.css";
import data from "../assets/allproducts";
import Items from "../Items/Items";
const RelatedProducts = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional smooth scrolling animation
    });
  };
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
              onClick={scrollToTop}
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
