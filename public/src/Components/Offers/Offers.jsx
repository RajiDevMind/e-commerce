import React from "react";
import "./Offers.css";
import exclusive from "../assets/female_model.png";

const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>exclusive</h1>
        <h1>offers for you</h1>
        <p>ONLY BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exclusive} alt="" />
      </div>
    </div>
  );
};

export default Offers;
