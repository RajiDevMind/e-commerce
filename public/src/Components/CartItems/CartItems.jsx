import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";

const CartItems = () => {
  const {
    allProducts,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  } = useContext(ShopContext);

  return (
    <div className="CartItems">
      <div className="cartdisplay">
        <div className="format_carts hidecart">
          <p>Products</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Add</p>
          <p>Remove</p>
        </div>
        <hr />

        {allProducts.map((item, i) => {
          if (cartItems[item.id] > 0) {
            return (
              <div key={i}>
                <div className="format_items format_carts">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="cartIcon_product"
                  />
                  <p>{item.title}</p>
                  <p>${item.new_price}</p>
                  <button className="cartItem_quantity">
                    {cartItems[item.id]}
                  </button>
                  <p>${item.new_price * cartItems[item.id]}</p>
                  <i
                    className="fa fa-plus"
                    aria-hidden="true"
                    onClick={() => {
                      addToCart(item.id);
                    }}
                  ></i>
                  <i
                    className="fa fa-times"
                    aria-hidden="true"
                    onClick={() => {
                      removeFromCart(item.id);
                    }}
                  ></i>
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="totalItems_cart">
        <div className="totalCart">
          <div>
            <h1>cart totals</h1>
            <div className="cart_total_item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart_total_item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cart_total_item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>

            <button>PROCEED TO CHECKOUT</button>
          </div>
          <div className="cartpromo">
            <p>If you have a promo code. Enter it here</p>
            <div className="promobox">
              <input type="text" name="promo" id="" placeholder="Promo Code" />
              <button type="submit">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
