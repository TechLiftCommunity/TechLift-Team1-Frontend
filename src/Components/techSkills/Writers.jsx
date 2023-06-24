import React from "react";
import "./Writers.css";
import Write from "../Assets/writer.png";

const Writers = () => {
  return (
    <div className="app__writers section__padding">
      <div className="app__writers-left">
        <div className="app__writers-left-text">
          <h1>Writers Community</h1>

          <p className="writers-p">
            Explore the intersection of words and technology in our vibrant tech
            writer's track! Join our passionate group of copywriters, content
            creators, and communicators. Gain writing tools, build portfolios,
            and connect with experts and start-ups in the tech world.
          </p>

          <button type="submit" className="writer-btn">
            Join Track
          </button>
        </div>

        <div className="app__writers-right">
          <img src={Write} alt="writer img" />
        </div>
      </div>
    </div>
  );
};

export default Writers;
