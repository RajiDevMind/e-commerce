import React, { useContext, useState } from "react";
import "./NavBar.css";
import logo from "../assets/shopperslogo.png";
import cart from "../assets/cart-icon.png";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const NavBar = () => {
  const [menu, setMenu] = useState("shop");
  const [barMenu, setBarMenu] = useState(false);

  const { getTotalCartItems } = useContext(ShopContext);

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
        <div className="navflex">
          <ul className="nav-menu">
            <li onClick={() => setMenu("shop")}>
              <Link to="/">Shop</Link>
              {menu === "shop" ? <hr /> : <></>}
            </li>
            <li onClick={() => setMenu("wears")}>
              <NavLink to="/wears">Wears</NavLink>
              {menu === "wears" ? <hr /> : <></>}
            </li>
            <li onClick={() => setMenu("sneakers")}>
              <NavLink to="/sneakers">Sneakers</NavLink>

              {menu === "sneakers" ? <hr /> : <></>}
            </li>
            <li onClick={() => setMenu("flats")}>
              <NavLink to="/flats">Flats</NavLink>

              {menu === "flats" ? <hr /> : <></>}
            </li>
            <li onClick={() => setMenu("sandals")}>
              <NavLink to="/sandals">Sandals</NavLink>

              {menu === "sandals" ? <hr /> : <></>}
            </li>
            <li onClick={() => setMenu("heels")}>
              <NavLink to="/heels">Heels</NavLink>

              {menu === "heels" ? <hr /> : <></>}
            </li>
          </ul>
          <div className="nav-login-cart">
            <NavLink to="/login">
              <button>Login</button>
            </NavLink>

            <NavLink to="/cart">
              <img src={cart} alt="" className="cart-icon" />
            </NavLink>

            <div className="nav-cart-count">{getTotalCartItems()}</div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
