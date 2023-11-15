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
    <div className="scroll" onClick={scrollToTop}>
      <i className="fa fa-chevron-circle-up scrollup" aria-hidden="true"></i>
    </div>
  );
};

export default Scrolling;
