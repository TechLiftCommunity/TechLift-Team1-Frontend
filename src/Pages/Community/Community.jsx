import React from "react";
import "./Community.css";
import Hero from "../../Components/Assets/hero image.png";


const Community = () => {
  return (
   
    <div className="app__community section__padding">
      <div className="app__community-header">
        <div className="app__community-header-h1">
          <h1 className="header-h1">
            Discover new opportunities with your track community
          </h1>

          <p className="header-p">
            Unleash new possibilities within our track community. Embrace growth
            and success through valuable connections and opportunities.
          </p>

          <button type="submit" className="app__community-header-btn">
            Explore Track
          </button>
        </div>

        <div className="app__community-header-image">
          <img src={Hero} alt="header-img" />
        </div>
      </div>
    </div>
  );
};

export default Community;
