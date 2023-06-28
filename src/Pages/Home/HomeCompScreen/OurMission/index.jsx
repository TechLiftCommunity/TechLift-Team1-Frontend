import React from "react";
import MissionIcon from "../../../../Components/Icons/MissonIcon";
import MissionImg from "../../../../Components/Assets/Svg/missionImg.svg";
import { SecondaryButton } from "../../../../Components/modules/button/Button";
import illustraionns from "../../../../Components/Assets/Svg/illustraionns.svg";

const OurMission = () => {
  return (
    <div className="bg-fcWhite">
      <div className="  w-full">
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:max-h-screen text-center lg:text-start  place-items-center bg-fcWhite px-6 md:px-10 lg:px-14">
          <div className="space-y-8 ">
            <div className="flex justify-center lg:justify-start">
              <MissionIcon />
            </div>

            <p className=" font-SpaceGrotesk text-black font-semibold text-[18px] sm:text-3xl lg:text-4xl">
              MISSION
            </p>
            <p className=" font-SpaceGrotesk font-medium text-[16px] lg:text-xl text-black2 ">
              At our core, we are bridge builders. Our exclusive two-fold
              approach is designed to connect promising individuals with
              innovative startups, creating a symbiotic relationship that
              propels both parties towards success. We believe that great talent
              has the power to transform businesses and drive groundbreaking
              achievements
            </p>
            <SecondaryButton className="text-fcPrimary rounded-lg w-44 text-base lg:text-xl px-4 py-2 font-SpaceGrotesk font-medium  border border-fcPrimary bg-white">
              Learn more
            </SecondaryButton>
          </div>
          <div className="sm:w-full w-full items-center  lg:ml-0 my-4 lg:mt-4 flex justify-center order-first lg:order-last">
            <img src={MissionImg} alt="hero" className=" " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
