import React from "react";
import heroimage from "../../../../Components/Assets/Svg/heroimage.svg";
import { Link } from "react-router-dom";
import Button, {
  SecondaryButton,
} from "../../../../Components/modules/button/Button";

const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 lg:max-h-screen space-y-8 lg:space-y-0 text-center lg:text-start  place-items-center bg-fcWhite px-6 sm:px-14 mt-28  md:mt-32">
      <div className="space-y-6">
        <p className=" font-SpaceGrotesk text-[24px] sm:text-[40px] lg:text-start text-center w-full   text-fcPrimary lg:xl:leading-[55px] font-extrabold lg:text-[47px]">
          Transform your knowledge
          <br /> into practical <experience styleName=""></experience>
        </p>
        <p className="font-SpaceGrotesk text-center   text-[16px] sm:text-[18px] lg:text-start lg:text-[19px] text-black2 ">
          At Tech Lift Community, we are passionate about nurturing and grooming
          outstanding tech talents while seamlessly connecting them with dynamic
          startups in the ever-evolving tech space.
        </p>
        <SecondaryButton className="hidden lg:block text-fcPrimary rounded-lg w-44 lg:text-xl text-base px-4 py-2 font-SpaceGrotesk font-medium  border border-fcPrimary bg-white">
          Learn more
        </SecondaryButton>
        <div className="lg:hidden flex justify-center items-center gap-4 sm:gap-16">
          <Link to="/community">
            <SecondaryButton className="text-fcWhite rounded-lg   text-[14px] sm:text-base lg:text-xl px-4 py-2 font-SpaceGrotesk font-medium  border border-fcPrimary bg-fcPrimary">
              Join Community
            </SecondaryButton>
          </Link>
          <SecondaryButton className="text-fcPrimary rounded-lg  text-[14px] sm:text-base lg:text-xl text-base px-4 py-2 font-SpaceGrotesk font-medium  border border-fcPrimary bg-white">
            Learn more
          </SecondaryButton>
        </div>
      </div>
      <div className="sm:w-full lg:w-full  items-center mr-6 lg:mr-0  ml-0 lg:ml-0 my-4 lg:mt-4 flex justify-center ">
        <img src={heroimage} alt="hero" className=" " />
      </div>
    </div>
  );
};

export default Hero;
