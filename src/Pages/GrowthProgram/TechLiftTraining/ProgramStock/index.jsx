import React from "react";
import Training from "./Training";
import Events from "./Events";

const ProgramStock = () => {
  return (
    <div className="bg-fcPrimary my-12 w-full py-12 md:py-0 md:my-12">
      <div className="font-SpaceGrotesk text-fcWhite text-[24px]  md:text-4xl md:pt-20 font-semibold  text-center">
        <p className="xl:leading-[40px]  text-center flex justify-center items-center mx-auto">
          Explore the programs we have in
           stock for you!
        </p>
      </div>
      <Training />
      <Events />
    </div>
  );
};

export default ProgramStock;
