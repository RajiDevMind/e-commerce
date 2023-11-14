import React from "react";
import "./Footer.css";
import logo from "../assets/shopperslogo.png";
import icon1 from "../assets/linkedin.svg";
import icon2 from "../assets/square-github.svg";
import icon3 from "../assets/square-whatsapp.svg";
import icon4 from "../assets/square-instagram.svg";
import { Link } from "react-router-dom";
import Scrolling from "../Scrollto/Scrollto";

const Footer = () => {
  const year = new Date().getFullYear();
  const backToTop = window.scrollTo(0, 0);
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logo} alt="" />
        <p>SHOPPERS</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contacts</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icon-container">
          <Link
            target="_blank"
            to="https://www.linkedin.com/in/raji-opeyemi-i-219b93238"
          >
            <img src={icon1} alt="" />
          </Link>
        </div>
        <div className="footer-icon-container">
          <Link target="_blank" to="https://github.com/RajiDevMind">
            <img src={icon2} alt="" />
          </Link>
        </div>
        <div className="footer-icon-container">
          <Link target="_blank" to="https://wa.me/qr/HJGUNSGDRB6UJ1">
            <img src={icon3} alt="" />
          </Link>
        </div>
        <div className="footer-icon-container">
          <Link target="_blank" to="mailto:roi4tech@gmail.com">
            <img src={icon4} alt="" />
          </Link>
          <Scrolling />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <h6>&#169; copyright @Raji, {year} - all right reserved!</h6>
      </div>
    </div>
  );
};

export default Footer;
