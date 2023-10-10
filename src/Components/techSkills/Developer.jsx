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
            Improve your coding portfolio by getting hands-on experience,
            learning from industry professionals, and building real-world
            projects. Don't pass up this opportunity to broaden your knowledge
            and advance your profession. Join now and realize your full
            developer’s potential.
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
