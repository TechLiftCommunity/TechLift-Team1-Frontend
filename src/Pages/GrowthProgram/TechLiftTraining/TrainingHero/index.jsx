import React from "react";
import { SecondaryButton } from "../../../../Components/modules/button/Button";
import trainingmage1 from "../../../../Components/Assets/img/trainingimage1.png";

const TrainingHero = () => {
  return (
    <div className="md:max-h-screen max-w-[100%] mt-28 grid md:grid-cols-2 grid-cols-1 md:place-items-center  md:space-x-4 text-center md:text-start space-y-6 md:space-y-0  place-items-center  lg:p-16  md:mt-16  ">
      <div className="space-y-6">
        <p className=" font-SpaceGrotesk text-[28px] sm:text-[30px] md:text-start text-center w-full text-fcPrimary md:xl:leading-[55px] font-extrabold md:text-[47px]">
          Improve your skill with our
          <br /> high-end Programs
        </p>
        <p className="font-SpaceGrotesk text-center px-6 md:px-0 text-[14px] sm:text-base md:text-start md:text-[19px] text-black2 ">
          {" "}
          Lorem ipsum dolor sit amet consectetur. Nulla velit egestas vitae
          sodales. Quis neque tempus tellus et.
        </p>
        <SecondaryButton className=" text-fcWhite rounded-md w-60 md:text-xl text-base px-4 py-3 font-SpaceGrotesk font-medium border border-fcPrimary bg-fcPrimary">
          Explore our program
        </SecondaryButton>
      </div>
      <div className="md:w-full  items-center   flex justify-center">
        <img src={trainingmage1} alt="hero" className="md:w-[500px] w-[350px] " />
      </div>
    </div>
  );
};

export default TrainingHero;
