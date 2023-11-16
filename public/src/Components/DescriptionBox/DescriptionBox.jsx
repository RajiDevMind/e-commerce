import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox_nav">
        <div className="description_box">Descriptions</div>
        <div className="description_box fade">Reviews (unknown number 123)</div>
      </div>
      <div className="descriptionbox_desc">
        <p>
          An e-commerce website is an online platform that facilitate buying and
          selling of products and services over the internet, which serves as a
          virtual marketplace where businesses and individual showcase their
          products, interact with customers and conducive transactions(payments)
          without the need of physical presence. E-commerce websites have gained
          immense popularity due to their convenience, accessibility and the
          global reach they offer.
        </p>
        <p>
          An e-commerce website typically display product or services along with
          detailed descriptions, images, prices and any available variations
          (e.g. colors). Each product usually has it own dedicated pages with
          relevant information
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
