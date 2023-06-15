import React from "react";
import MissionIcon from "../../../../Components/Icons/MissonIcon";
import { SecondaryButton } from "../../../../Components/modules/button/Button";
import illustraionns from "../../../../Components/Assets/Svg/illustraionns.svg";

const OurMission = () => {
  return (
    <div className="bg-fcWhite">
      <div className="  w-full">
        <div className="grid lg:grid-cols-2 grid-cols-1 max-h-screen  place-items-center bg-fcWhite p-14">
          <div className="space-y-8">
            <MissionIcon />
            <p className="font-InterRegular text-black font-semibold text-4xl">
              MISSION
            </p>
            <p className="font-InterMedium text-xl text-black2 ">
              At our core, we are bridge builders. Our exclusive two-fold
              approach is
              <br /> designed to connect promising individuals with innovative
              startups,
              <br /> creating a symbiotic relationship that propels both parties
              towards
              <br /> success. We believe that great talent has the power to
              transform
              <br /> businesses and drive groundbreaking achievements.
            </p>
            <SecondaryButton className="text-fcPrimary rounded-md w-44 text-xl px-4 py-2 font-InterRegular font-medium  border border-fcPrimary bg-white">
              Learn more
            </SecondaryButton>
          </div>
          <div className="w-[90%] items-center flex">
            <img src={illustraionns} alt="hero" className=" " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
