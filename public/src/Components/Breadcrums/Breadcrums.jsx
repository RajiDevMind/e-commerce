import React from "react";
import "./Breadcrums.css";

const Breadcrums = ({ title, category, img }) => {
  return (
    <div className="breadcrums">
      HOME <i className="fa fa-chevron-circle-right" aria-hidden="true"></i>SHOP{" "}
      <i className="fa fa-chevron-circle-right" aria-hidden="true"></i>
      {category}
    </div>
  );
};

export default Breadcrums;
