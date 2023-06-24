import React from "react";
import MissionIcon from "../../../../Components/Icons/MissonIcon";
import MissionImg from "../../../../Components/Assets/Svg/missionImg.svg"
import { SecondaryButton } from "../../../../Components/modules/button/Button";
import illustraionns from "../../../../Components/Assets/Svg/illustraionns.svg";

const OurMission = () => {
  return (
    <div className="bg-fcWhite">
      <div className="  w-full">
        <div className="grid lg:grid-cols-2 grid-cols-1 md:max-h-screen text-center md:text-start  place-items-center bg-fcWhite px-6 md:px-14">
          <div className="space-y-8 ">
            <div className="flex justify-center md:justify-start">
            <MissionIcon />
            </div>
         
            <p className=" font-SpaceGrotesk text-black font-semibold text-[18px] md:text-4xl">
             MISSION
            </p>
            <p className=" font-SpaceGrotesk font-medium text-[18px] md:text-xl text-black2 ">
            At our core, we are bridge builders. Our exclusive two-fold
               approach is designed to connect promising individuals with innovative startups, creating a symbiotic relationship that
               propels both parties towards success. We believe that great
               talent has the power to transform businesses and drive groundbreaking achievements
            </p>
            <SecondaryButton className="text-fcPrimary rounded-md w-44 text-base md:text-xl px-4 py-2 font-SpaceGrotesk font-medium  border border-fcPrimary bg-white">
              Learn more
            </SecondaryButton>
          </div>
          <div className="lg:w-full w-[350px] items-center  md:ml-0 my-4 md:mt-4 flex justify-center order-first md:order-last">
            <img src={MissionImg} alt="hero" className=" " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
