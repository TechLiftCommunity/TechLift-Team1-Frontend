import React from "react";
import "./Developer.css";
import Dev from "../Assets/Developer.png";

const Developer = () => {
  return (
    <div className="app__developer section__padding ">
      <div className="app__developer-left">
        <img src={Dev} alt="developer img" />
      </div>

      <div className="app__developer-right">
        <div className="app__developer-right-text">
          <h1>Developers Community</h1>
          <p className="dev-p">
            Lorem ipsum dolor sit amet consectetur. Sollicitudin sem enim arcu
            urna ac. Neque mauris odio lacus egestas turpis.
          </p>

          <button type="submit" className="dev-btn">
            Join Track
          </button>
        </div>
      </div>
    </div>
  );
};

export default Developer;
