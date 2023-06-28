import React from "react";

const MemberList = () => {
  return (
    <div className="w-full flex justify-center space-x-8 bg-fcPrimary  py-3 sm:py-5 lg:py-10">
      <div>
        <div className=" place-items-center grid">
          <p className="text-fcWhite font-SpaceGrotesk md:text-2xl lg:text-3xl text-[16px] sm:text-[18px] font-semibold">
            200+
          </p>
          <p className="text-fcWhite font-SpaceGrotesk font-medium text-[7px] sm:text-[8px] md:text-base lg:text-lg">
            Total Number of Members
          </p>
        </div>
      </div>
      <div className=" border-r-2 border-fcWhite"></div>
      <div>
        <div className=" place-items-center grid">
          <p className="text-fcWhite font-SpaceGrotesk md:text-2xl lg:text-3xl text-[16px] sm:text-[18px] font-semibold">
            20+
          </p>
          <p className="text-fcWhite font-SpaceGrotesk font-medium text-[7px] sm:text-[8px] md:text-base lg:text-lg">
            Total Number of Mentors
          </p>
        </div>
      </div>
      <div className=" border-r-2 border-fcWhite"></div>
      <div>
        <div className=" place-items-center grid">
          <p className="text-fcWhite font-SpaceGrotesk md:text-2xl lg:text-3xl text-[16px] sm:text-[18px] font-semibold">
            100%
          </p>
          <p className="text-fcWhite font-SpaceGrotesk font-medium text-[7px] sm:text-[8px] md:text-base lg:text-lg">
            Total Remote
          </p>
        </div>
      </div>
    </div>
  );
};

export default MemberList;
