import React from "react";
import { SecondaryButton } from "../../../../Components/modules/button/Button";
import GrowthIcon from "../../../../Components/Icons/GrowthIcon";
import GrowthImg from "../../../../Components/Assets/img/growthImg.png";

const GrowthProgram = () => {
  return (
    <div className="bg-fcWhite">
      <div className="  w-full">
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:max-h-screen text-center lg:text-start  place-items-center bg-fcWhite px-6  sm:px-10 lg:px-14">
          <div className="space-y-8">
            <div className="flex justify-center lg:justify-start">
              <GrowthIcon />
            </div>
            <p className=" font-SpaceGrotesk text-black font-semibold text-2xl sm:text-3xl lg:text-4xl">
              What you stand to gain in our
               growth program
            </p>
            <p className=" font-SpaceGrotesk font-medium text-[16px] lg:text-xl text-black2 ">
              Our community provides you with a platform to help you gain
              practical experience and build your portfolio by working on a
              real-world project. We equip you with soft skills that helps you
              stand out and stay top of mind for recruiters, Provide you with
              guidance and support to help you secure your first tech role
            </p>
            <SecondaryButton className="text-fcPrimary rounded-lg w-44  text-base lg:text-xl px-4 py-2 font-SpaceGrotesk font-medium  border border-fcPrimary bg-white">
              Learn more
            </SecondaryButton>
          </div>
          <div className="sm:w-full w-full items-center  lg:ml-0 my-4 lg:mt-4 flex justify-center order-first lg:order-last">
            <img src={GrowthImg} alt="hero" className=" " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowthProgram;
