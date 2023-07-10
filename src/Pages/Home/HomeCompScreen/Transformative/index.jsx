import { data } from "autoprefixer";
import React from "react";
import {SecondaryButton} from "../../../../Components/modules/button/Button";
import Dot from "../../../../Components/Assets/img/dot1.png";
import Dot2 from "../../../../Components/Assets/img/dot2.png";
import Dot3 from "../../../../Components/Assets/img/dot3.png";
import CircleIcon from "../../../../Components/Icons/CircleIcon";
import CircleIconTwo from "../../../../Components/Icons/CircleIconTwo";
import CircleIconThree from "../../../../Components/Icons/CircleIconThree";
import Line from "../../../../Components/Icons/Line";

const Transformative = () => {
  const data1 = [
    {
      title: "Start your transformative journey now!",
      description:
        "Transform today, unlock your potential, and embrace a brighter future.",
    },
  ];

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 lg:max-h-screen gap-10 place-items-center bg-fcWhite px-5 sm:px-10  sm:mt-16 pt-12 lg:pt-16  ">
      <div className="w-full space-y-8">
        <div className="font-SpaceGrotesk bg-fcPrimary flex justify-center  rounded-2xl ">
          {data1.map((item, index) => {
            return (
              <div key={index} className=" space-y-8 my-10 pl-4 sm:my-20 relative">
                <div>
                  <img src={Dot3} alt="dot" className="absolute  sm-w-full w-[10px] left-14" />
                </div>
                <div className="text-2xl sm:text-3xl lg:text-[40px] font-SpaceGrotesk text-fcWhite  xl:leading-[50px] font-bold">
                  Start your transformative
                  <br /> journey now!
                </div>
                <div className="text-fcWhite  xl:leading-[30px] text-[14px] sm:text-base lg:text-xl ">
                  Transform today, unlock your potential, and embrace
                   a brighter future.
                </div>
                <div className="flex items-center justify-between">
                  <SecondaryButton className= "bg-fcWhite px-12 py-3 text-[#3E5693] rounded-lg text-[16px] lg:text-xl">
                    Join Community
                  </SecondaryButton>
                  <div>
                    {" "}
                    <img
                      src={Dot2}
                      alt="dot"
                      className=" absolute  sm-w-full w-[10px] right-4  "
                    />
                  </div>
                </div>

                <div>
                  <img
                    src={Dot}
                    alt="dot"
                    className="absolute  sm-w-full w-[20px] bottom-[-20px]  sm:bottom-[-50px] left-14 sm:left-8"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full font-SpaceGrotesk  items-end">
        <div>
          {data1.map((item, index) => {
            return (
              <div key={index} className="">
                <div>
                  <p className="text-fcBlack text-2xl sm:text-3xl lg:text-[40px] xl:leading-[55px]  font-semibold">
                    Elevate your tech skills now!
                    <br /> Join our community today!
                  </p>
                </div>
                <div>
                  <div className="flex space-x-4 my-5">
                    <div className="grid items-center space-y-4 ">
                      <CircleIcon size={40} />
                      <Line size={40} />
                    </div>
                    <div className="space-y-4">
                      <p className="text-fcDark font-semibold font-SpaceGrotesk text-[18px]  sm:text-[20px] lg:text-[22px]">
                        Get groomed to be culturally and technically fit
                      </p>
                      <p className="text-fcDark2 font-medium font-SpaceGrotesk xl:leading-[24px] text-[14px] sm:text-base lg:text-xl">
                        We prepare you into becoming fit for the real-life
                         workspace.
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-4 my-4">
                    <div className="grid items-center space-y-4 ">
                    <CircleIconThree size={40} />
                      <Line size={40} />
                    </div>
                    <div className="space-y-4">
                      <p className="text-fcDark font-semibold font-SpaceGrotesk text-[18px] sm:text-[20px] lg:text-[22px]">
                      Get soft skills
                      </p>
                      <p className="text-fcDark2 font-medium font-SpaceGrotesk xl:leading-[24px] text-[14px] sm:text-base lg:text-xl">
                      The ever-changing tech world moves at the speed of light. Upskilling at its best here. Join us!
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-4 my-4">
                    <div className="grid  ">
                      <CircleIconTwo size={40} />
                    
                     
                    </div>
                    <div className="space-y-4">
                      <p className="text-fcDark font-semibold font-SpaceGrotesk text-[18px] sm:text-[20px] lg:text-[22px]">
                      Get Connected
                      </p>
                      <p className="text-fcDark2 font-medium font-SpaceGrotesk xl:leading-[24px] text-[14px] sm:text-base lg:text-xl">
                      Learn from Tech gurus with great expertise. Connect with start-ups and achieve your career dreams.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Transformative;
