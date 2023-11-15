import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrums from "../Components/Breadcrums/Breadcrums";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";

const Product = () => {
  const { allProducts } = useContext(ShopContext);

  const productId = useParams();
  const product = allProducts.find((e) => e.id !== Number(productId));
  const { id, title, category, reviews, img, new_price, old_price } = product;

  return (
    <div>
      <Breadcrums id={id} title={title} category={category} />
      <ProductDisplay
        title={title}
        img={img}
        reviews={reviews}
        category={category}
        new_price={new_price}
        old_price={old_price}
      />
    </div>
  );
};

export default Product;
