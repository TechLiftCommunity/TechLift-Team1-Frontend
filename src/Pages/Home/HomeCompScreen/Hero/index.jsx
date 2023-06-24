import React from "react";
import heroimage from "../../../../Components/Assets/Svg/heroimage.svg";
import Button, {
  SecondaryButton,
} from "../../../../Components/modules/button/Button";

const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 md:max-h-screen  lg:space-x-4 lg:place-items-center bg-fcWhite lg:p-16  mt-24  md:mt-16 ">
      <div className="space-y-8 md:space-y-6 lg:px-0 ">
        <p className=" font-SpaceGrotesk text-[30px] md:text-start text-center w-full text-fcPrimary md:xl:leading-[55px] font-extrabold md:text-[47px]">
          Transform your knowledge
          <br /> into practical experience.
        </p>
        <p className="font-SpaceGrotesk text-center  text-base md:text-start md:text-[19px] text-black2 ">
          At Tech Lift Community, we are passionate about nurturing and
         grooming outstanding tech talents while seamlessly connecting
          them with dynamic startups in the ever-evolving tech space.
        </p>
        <SecondaryButton className="hidden md:block text-fcPrimary rounded-md w-44 md:text-xl text-base px-4 py-2 font-SpaceGrotesk font-medium  border border-fcPrimary bg-white">
            Learn more
          </SecondaryButton>
        <div className="md:hidden flex justify-center items-center gap-4">
          <SecondaryButton className="text-fcWhite rounded-md w-44 text-base md:text-xl px-4 py-2 font-SpaceGrotesk font-medium  border border-fcPrimary bg-fcPrimary">
            Join Community
          </SecondaryButton>
          <SecondaryButton className="text-fcPrimary rounded-md w-44 md:text-xl text-base px-4 py-2 font-SpaceGrotesk font-medium  border border-fcPrimary bg-white">
            Learn more
          </SecondaryButton>
        </div>
      </div>
      <div className="lg:w-full w-[380px] items-center ml-4 md:ml-0 my-4 md:mt-4 flex justify-center">
        <img src={heroimage} alt="hero" className="" />
      </div>
    </div>
  );
};

export default Hero;
