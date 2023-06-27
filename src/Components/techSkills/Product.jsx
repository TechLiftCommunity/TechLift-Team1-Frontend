import React from "react";
import "./Product.css";
import Designer from "../Assets/product.png";

const Product = () => {
  return (
    <div className="app__product section__padding">
      <div className="app__product-left">
        <div className="app__product-left-text">
          <h1>Product Design Community</h1>
          <p className="product-p">
            Level up your tech skills at TechLift! Join our diverse community of
            designers. Access valuable resources, stay updated with the latest
            in Product Design, and connect with experts, start-ups, and fellow
            designers.
          </p>

          <button type="submit" className="product-btn">
            Join Track
          </button>
        </div>

        <div className="app__product-right">
          <img src={Designer} alt="design img" />
        </div>
      </div>
    </div>
  );
};

export default Product;
