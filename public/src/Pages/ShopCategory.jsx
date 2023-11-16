import React, { useContext } from "react";
import "./CSS/ShopCategory.css";

import { ShopContext } from "../Context/ShopContext";
import Items from "../Components/Items/Items";
import { Link } from "react-router-dom";

const ShopCategory = ({ category, banner }) => {
  const allProducts = useContext(ShopContext);

  return (
    <div className="shopCategory">
      <img className="shop_banner" src={banner} alt="" />
      <div className="shopcategory_indexSort">
        <p>
          <span>Showing 1-12</span> out of all products
        </p>
        <div className="shopcategory_sort">
          Sort by{" "}
          <i className="fa fa-chevron-circle-down" aria-hidden="true"></i>
        </div>
      </div>
      <div className="shopcategory_products">
        {allProducts.allProducts.map((item, i) => {
          if (category === item.category) {
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
          } else {
            return null;
          }
        })}
      </div>
      <Link to="/">
        <div className="shopcategory_loadmore">Explore more</div>
      </Link>
    </div>
  );
};

export default ShopCategory;
