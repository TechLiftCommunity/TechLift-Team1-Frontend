import React from "react";
import "./Marketing.css";
import Market from "../Assets/marketing.png";

const Marketing = () => {
  return (
    <div className="app__marketing section__padding">
      <div className="app__marketing-left">
        <img src={Market} alt="Marketing img" />
      </div>

      <div className="app__marketing-right">
        <div className="app__marketing-right-text">
          <h1>Marketing Community</h1>
          <p className="mark-p">
            Lorem ipsum dolor sit amet consectetur. Sollicitudin sem enim arcu
            urna ac. Neque mauris odio lacus egestas turpis.
          </p>

          <button type="submit" className="mark-btn">
            Join Track
          </button>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
