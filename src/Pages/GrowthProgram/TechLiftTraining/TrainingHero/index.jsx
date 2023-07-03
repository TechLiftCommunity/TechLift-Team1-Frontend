import React from "react";
import { SecondaryButton } from "../../../../Components/modules/button/Button";
import trainingmage1 from "../../../../Components/Assets/img/trainingimage1.png";

const TrainingHero = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 lg:max-h-screen space-y-8 lg:space-y-0 text-center lg:text-start  place-items-center bg-fcWhite px-6 sm:px-14 mt-32">
      <div className="space-y-6">
        <p className=" font-SpaceGrotesk text-[24px] sm:text-[40px] lg:text-start text-center w-full  text-fcPrimary lg:xl:leading-[55px] font-extrabold lg:text-[47px]">
          Improve your skill with our
          <br /> high-end Programs
        </p>
        <p className="font-SpaceGrotesk text-center   text-[16px] sm:text-[18px] lg:text-start lg:text-[19px] text-black2 ">
          {" "}
          Lorem ipsum dolor sit amet consectetur. Nulla velit egestas vitae
          sodales. Quis neque tempus tellus et.
        </p>
        <SecondaryButton className=" text-fcWhite rounded-sm w-60 sm:text-xl text-base px-4 py-3 font-SpaceGrotesk font-medium border border-fcPrimary bg-fcPrimary">
          Explore our program
        </SecondaryButton>
      </div>
      <div  className="sm:w-full lg:w-[500px]  items-center mr-6 lg:mr-0  ml-0 lg:ml-0 my-4 lg:mt-4 flex justify-center ">
        <img src={trainingmage1} alt="hero" className=" " />
      </div>
    </div>
  );
};

export default TrainingHero;
