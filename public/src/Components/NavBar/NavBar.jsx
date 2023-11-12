import React, { useState } from "react";
import "./NavBar.css";
import logo from "../assets/shopperslogo.png";
import cart from "../assets/cart-icon.png";

const NavBar = () => {
  const [menu, setMenu] = useState("shop");
  const [barMenu, setBarMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="shoppers logo" className="logo" />
        <p>shoppers</p>
      </div>
      <i
        className="fa fa-bars barIcon"
        onClick={() => {
          setBarMenu(!barMenu);
        }}
      ></i>

      <nav className={barMenu ? "open" : ""}>
        <ul className="nav-menu">
          <li onClick={() => setMenu("shop")}>
            Shop
            {menu === "shop" ? <hr /> : <></>}
          </li>
          <li onClick={() => setMenu("wears")}>
            Wears
            {menu === "wears" ? <hr /> : <></>}
          </li>
          <li onClick={() => setMenu("sneakers")}>
            Sneakers
            {menu === "sneakers" ? <hr /> : <></>}
          </li>
          <li onClick={() => setMenu("flats")}>
            Flats
            {menu === "flats" ? <hr /> : <></>}
          </li>
          <li onClick={() => setMenu("sandals")}>
            Sandals
            {menu === "sandals" ? <hr /> : <></>}
          </li>
          <li onClick={() => setMenu("heels")}>
            Heels
            {menu === "heels" ? <hr /> : <></>}
          </li>
          <div className="nav-login-cart">
            <button>Login</button>
            <img src={cart} alt="" className="cart-icon" />
            <div className="nav-cart-count">0</div>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
