import React from "react";
import { SecondaryButton } from "../../../../Components/modules/button/Button";
import GrowthIcon from "../../../../Components/Icons/GrowthIcon";
import JoinUsImg from "../../../../Components/Assets/img/joinusImg.png";

const JoinUs = () => {
  return (
    <div className="bg-fcWhite">
      <div className="  w-full">
        <div className="grid lg:grid-cols-2 grid-cols-1 md:max-h-screen  text-center md:text-start  place-items-center bg-fcWhite px-6 md:px-14 ">
          <div className="space-y-6 ">
          <div className="flex justify-center md:justify-start">
              <GrowthIcon />
            </div>
            <p className=" font-SpaceGrotesk text-black font-semibold text-[18px] md:text-4xl">
              So, what is stopping you from
              <br /> joining us?
            </p>
            <p className="font-SpaceGrotesk text-medium text-[16px] md:text-xl text-black2 ">
              Take a moment to reflect on what might be stopping you
               from joining us, and consider the incredible opportunities
               and growth that await you by taking that leap of faith.
            </p>
            <SecondaryButton className="text-fcWhite rounded-md w-44 text-base md:text-xl px-4 py-2 font-SpaceGrotesk font-medium  border border-fcPrimary bg-fcPrimary">
              Get Started
            </SecondaryButton>
          </div>
          <div className="lg:w-full w-[350px] items-center  md:ml-0 my-4 md:mt-4 flex justify-center order-first md:order-last">
            <img src={JoinUsImg} alt="hero" className=" " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
