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
            Marketing would always be in trend regardless of the industry, and
            with our dynamic marketing track you can learn how marketing works
            in the tech space. Acquire knowledge on digital marketing skills,
            have access to mentors, network with other marketers, and build a
            great portfolio from here.
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
