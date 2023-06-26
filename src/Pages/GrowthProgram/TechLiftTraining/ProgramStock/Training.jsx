import React from 'react'
import trainingimage2 from "../../../../Components/Assets/img/trainingimage2.png"
import { SecondaryButton } from "../../../../Components/modules/button/Button";

const Training = () => {
  return (
    <div>
       <div className="grid lg:grid-cols-2 grid-cols-1 md:max-h-screen text-center md:text-start gap-14 place-items-center px-6 md:px-24 md:py-24">
        <div className="lg:w-full  items-center  md:ml-0 my-4 md:mt-4 flex justify-center order-first ">
          <img src={trainingimage2} alt="hero" className="w-[550px] " />
        </div>

        <div className="space-y-4 ">
          <p className=" font-SpaceGrotesk text-fcWhite font-semibold  text-[20px] md:text-4xl">
          Techlift Trainings
          </p>
          <p className=" font-SpaceGrotesk  text-[18px] md:text-[19px] text-fcWhite ">
          Lorem ipsum dolor sit amet consectetur. Maecenas phasellus luctus nunc at mauris. Amet sit est purus tincidunt. Gravida quis facilisis ultrices odio. Bibendum sed enim lorem pharetra vel.
          </p>
          <SecondaryButton className="text-fcPrimary rounded-md w-44 text-base md:text-xl px-4 py-2 font-SpaceGrotesk font-medium  border border-fcPrimary bg-white">
            Learn more
          </SecondaryButton>
        </div>
      </div>
    </div>
  )
}

export default Training
