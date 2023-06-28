import React from 'react'
import trainingimage2 from "../../../../Components/Assets/img/trainingimage2.png"
import { SecondaryButton } from "../../../../Components/modules/button/Button";

const Training = () => {
  return (
    <div>
       <div className="grid lg:grid-cols-2 grid-cols-1 lg:max-h-screen text-center lg:text-start gap-14 place-items-center px-6 lg:px-24 md:px-10 lg:py-16">
        <div className="md:w-full  items-center  lg:ml-0 my-4 lg:mt-4 flex justify-center order-first ">
          <img src={trainingimage2} alt="hero" className="" />
        </div>

        <div className="space-y-4 ">
          <p className=" font-SpaceGrotesk text-fcWhite font-semibold  text-[20px] md:text-3xl lg:text-4xl">
          Techlift Trainings
          </p>
          <p className=" font-SpaceGrotesk  text-[18px] lg:text-[19px] text-fcWhite ">
          Lorem ipsum dolor sit amet consectetur. Maecenas phasellus luctus nunc at mauris. Amet sit est purus tincidunt. Gravida quis facilisis ultrices odio. Bibendum sed enim lorem pharetra vel.
          </p>
          <SecondaryButton className="text-fcPrimary rounded-lg w-44 text-base lg:text-xl px-4 py-2 font-SpaceGrotesk font-medium  border border-fcPrimary bg-white">
            Learn more
          </SecondaryButton>
        </div>
      </div>
    </div>
  )
}

export default Training
