import React from "react";
import "./Hero.css";
import emoji from "../assets/laugh-emoji.png";
import arrow_right from "../assets/arrow_right.png";
import femaleHero from "../assets/herofem.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero-smile-icon">
            <p>new</p>
            <img src={emoji} alt="laugh emoji" />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_right} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={femaleHero} alt="" />
      </div>
    </div>
  );
};

export default Hero;
