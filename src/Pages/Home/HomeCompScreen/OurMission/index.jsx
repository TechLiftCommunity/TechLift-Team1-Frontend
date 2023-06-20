import React from "react";
import MissionIcon from "../../../../Components/Icons/MissonIcon";
import MissionImg from "../../../../Components/Assets/Svg/missionImg.svg"
import { SecondaryButton } from "../../../../Components/modules/button/Button";
import illustraionns from "../../../../Components/Assets/Svg/illustraionns.svg";

const OurMission = () => {
  return (
    <div className="bg-fcWhite">
      <div className="  w-full">
        <div className="grid lg:grid-cols-2 grid-cols-1 max-h-screen  place-items-center bg-fcWhite px-14">
          <div className="space-y-8">
          <MissionIcon />
            <p className=" font-SpaceGrotesk text-black font-semibold text-4xl">
             MISSION
            </p>
            <p className=" font-SpaceGrotesk font-medium text-xl text-black2 ">
            At our core, we are bridge builders. Our exclusive two-fold
              <br /> approach is designed to connect promising individuals with<br /> innovative startups, creating a symbiotic relationship that
              <br /> propels both parties towards success. We believe that great
              <br /> talent has the power to transform businesses and drive<br/>groundbreaking achievements
            </p>
            <SecondaryButton className="text-fcPrimary rounded-md w-44 text-xl px-4 py-2 font-SpaceGrotesk font-medium  border border-fcPrimary bg-white">
              Learn more
            </SecondaryButton>
          </div>
          <div className="w-[90%] items-center flex">
            <img src={MissionImg} alt="hero" className=" " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
