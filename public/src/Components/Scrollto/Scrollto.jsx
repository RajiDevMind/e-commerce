import React from "react";
import "./Scrollto.css";

const Scrolling = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional smooth scrolling animation
    });
  };
  return (
    <button className="scroll" onClick={scrollToTop}>
      <i className="fa fa-chevron-circle-up scrollup" aria-hidden="true"></i>
    </button>
  );
};

export default Scrolling;
