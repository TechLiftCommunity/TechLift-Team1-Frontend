import React from 'react'
import trainingimage3 from "../../../../Components/Assets/img/trainingimage3.png"
import { SecondaryButton } from "../../../../Components/modules/button/Button";

const Events = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1  text-center lg:text-start gap-14 place-items-center px-6 lg:mt-0 mt-8 md:px-10 lg:px-24  lg:pb-24 ">
    <div className="md:w-full  items-center  lg:ml-0  flex justify-center lg:order-last  ">
      <img src={trainingimage3} alt="hero" className=" " />
    </div>

    <div className="space-y-4 ">
      <p className=" font-SpaceGrotesk text-fcWhite  font-semibold text-2xl lg:text-4xl">
      Techlift Events
      </p>
      <p className=" font-SpaceGrotesk  text-[18px] lg:text-[19px] text-fcWhite ">
      Lorem ipsum dolor sit amet consectetur. Maecenas phasellus luctus nunc at mauris. Amet sit est purus tincidunt. Gravida quis facilisis ultrices odio. Bibendum sed enim lorem pharetra vel.
      </p>
      <SecondaryButton className="text-fcPrimary rounded-lg w-44 text-base lg:text-xl px-4 py-2 font-SpaceGrotesk font-medium  border border-fcPrimary bg-white">
        Learn more
      </SecondaryButton>
    </div>
  </div>
  )
}

export default Events
