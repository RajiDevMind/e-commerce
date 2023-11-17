import React, { useContext } from "react";
import "./productdisplay.css";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = ({
  id,
  title,
  img,
  new_price,
  old_price,
  reviews,
  category,
}) => {
  const { cartItems, allProducts, addToCart } = useContext(ShopContext);

  return (
    <div className="productdisplay">
      <div className="productdisplay_left">
        <div className="display_img_list">
          <img src={img} alt={title} />
          <img src={img} alt={title} />
          <img src={img} alt={title} />
        </div>
        <div className="productdisplay_img">
          <img className="mainimg" src={img} alt={title} />
        </div>
      </div>
      <div className="productdisplay_right">
        <h1>{title}</h1>
        <div className="productdisplay_star">
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star-half" aria-hidden="true"></i>
          <p>{reviews}</p>
        </div>
        <div className="right_price">
          <div className="old_price">{old_price}</div>
          <div className="new_price">${new_price}</div>
        </div>
        <div className="description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda,
          culpa reiciendis, cupiditate autem reprehenderit molestiae rerum
          aliquam aliquid ipsum quis hic?
        </div>
        <div className="productsize">
          <h1>Select size</h1>
          <div className="size">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button
          type="submit"
          onClick={() => {
            addToCart(id);
          }}
        >
          add to cart
        </button>
        <p className="productcategory">
          <span>Category</span> {category}
        </p>
      </div>
      <hr />
    </div>
  );
};

export default ProductDisplay;
