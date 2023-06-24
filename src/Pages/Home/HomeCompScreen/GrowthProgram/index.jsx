import React from "react";
import { SecondaryButton } from "../../../../Components/modules/button/Button";
import GrowthIcon from "../../../../Components/Icons/GrowthIcon";
import GrowthImg from "../../../../Components/Assets/img/growthImg.png";

const GrowthProgram = () => {
  return (
    <div className="bg-fcWhite">
      <div className="  w-full">
        <div className="grid lg:grid-cols-2 grid-cols-1 max-h-screen  place-items-center bg-fcWhite px-14">
          <div className="space-y-8">
            <GrowthIcon />
            <p className=" font-SpaceGrotesk text-black font-semibold text-4xl">
              What you stand to gain in our
              <br /> growth program
            </p>
            <p className=" font-SpaceGrotesk font-medium text-xl text-black2 ">
              Our community provides you with a platform to help you gain
              <br /> practical experience and build your portfolio by working on
              a<br /> real-world project. We equip you with soft skills that
              helps you
              <br /> stand out and stay top of mind for recruiters, Provide you
              with
              <br /> guidance and support to help you secure your first tech
              role
            </p>
            <SecondaryButton className="text-fcPrimary rounded-md w-44 text-xl px-4 py-2 font-SpaceGrotesk font-medium  border border-fcPrimary bg-white">
              Learn more
            </SecondaryButton>
          </div>
          <div className="w-[90%] items-center flex">
            <img src={GrowthImg} alt="hero" className=" " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowthProgram;
