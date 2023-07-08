import React from "react";
import { SecondaryButton } from "../../../../Components/modules/button/Button";
import GrowthIcon from "../../../../Components/Icons/GrowthIcon";
import JoinUsImg from "../../../../Components/Assets/img/joinusImg.png";

const JoinUs = () => {
  return (
    <div className="bg-fcWhite">
      <div className="  w-full">
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:max-h-screen  text-center lg:text-start  place-items-center bg-fcWhite px-6 sm:px-10 lg:px-14 ">
          <div className="space-y-6 ">
          <div className="flex justify-center lg:justify-start">
              <GrowthIcon />
            </div>
            <p className=" font-SpaceGrotesk text-black font-semibold text-2xl sm:text-3xl lg:text-4xl">
              So, what is stopping you from
             joining us?
            </p>
            <p className="font-SpaceGrotesk text-medium text-[16px] lg:text-xl text-black2 ">
              Take a moment to reflect on what might be stopping you
               from joining us, and consider the incredible opportunities
               and growth that await you by taking that leap of faith.
            </p>
            <SecondaryButton className="text-fcWhite rounded-lg w-44 text-base lg:text-xl px-4 py-2 font-SpaceGrotesk font-medium  border border-fcPrimary bg-fcPrimary">
              Get Started
            </SecondaryButton>
          </div>
          <div className="sm:w-full w-full items-center  lg:ml-0 my-4 lg:mt-4 flex justify-center order-first lg:order-last">
            <img src={JoinUsImg} alt="hero" className=" " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
