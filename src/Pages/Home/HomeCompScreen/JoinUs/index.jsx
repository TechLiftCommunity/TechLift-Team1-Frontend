import React from "react";
import { SecondaryButton } from "../../../../Components/modules/button/Button";
import GrowthIcon from "../../../../Components/Icons/GrowthIcon";
import JoinUsImg from "../../../../Components/Assets/img/joinusImg.png";

const JoinUs = () => {
  return (
    <div className="bg-fcWhite">
      <div className="  w-full">
        <div className="grid lg:grid-cols-2 grid-cols-1 max-h-screen  place-items-center bg-fcWhite ">
          <div className="space-y-8">
            <GrowthIcon />
            <p className=" font-SpaceGrotesk text-black font-semibold text-4xl">
              So, what is stopping you from
              <br /> joining us?
            </p>
            <p className="font-SpaceGrotesk text-medium text-xl text-black2 ">
              Take a moment to reflect on what might be stopping you
              <br /> from joining us, and consider the incredible opportunities
              <br /> and growth that await you by taking that leap of faith.
            </p>
            <SecondaryButton className="text-fcWhite rounded-md w-44 text-xl px-4 py-2 font-SpaceGrotesk font-medium  border border-fcPrimary bg-fcPrimary">
              Get Started
            </SecondaryButton>
          </div>
          <div className="w-[90%] items-center flex">
            <img src={JoinUsImg} alt="hero" className=" " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
