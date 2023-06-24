import React from "react";
import heroimage from "../../../../Components/Assets/Svg/heroimage.svg";
import Button, {
  SecondaryButton,
} from "../../../../Components/modules/button/Button";

const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 max-h-screen space-x-4 place-items-center bg-fcWhite p-16 mt-16 ">
      <div className="space-y-6">
            
            <p className=" font-SpaceGrotesk text-fcPrimary font-extrabold text-[50px]">
            Transform your knowledge into practical experience.
            </p>
            <p className="font-SpaceGrotesk text-[19px] text-black2 ">
            At Tech Lift Community, we are passionate about nurturing and<br /> grooming outstanding tech talents while seamlessly connecting them<br /> with dynamic startups in the ever-evolving tech space.
            </p>
            <SecondaryButton className="text-fcPrimary rounded-md w-44 text-xl px-4 py-2 font-SpaceGrotesk font-medium  border border-fcPrimary bg-white">
              Learn more
            </SecondaryButton>
          </div>
      <div className="w-full items-center flex justify-center">
        <img src={heroimage} alt="hero" className="w-70" />
      </div>
      
    </div>
  );
};

export default Hero;
