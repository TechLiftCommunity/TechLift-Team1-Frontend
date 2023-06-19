import { data } from "autoprefixer";
import React from "react";
import {SecondaryButton} from "../../../../Components/modules/button/Button";
import Dot from "../../../../Components/Assets/img/dot1.png";
import Dot2 from "../../../../Components/Assets/img/dot2.png";
import Dot3 from "../../../../Components/Assets/img/dot3.png";
import CircleIcon from "../../../../Components/Icons/CircleIcon";
import Line from "../../../../Components/Icons/Line";

const JoinUs = () => {
  const data1 = [
    {
      title: "Start your transformative journey now!",
      description:
        "Transform today, unlock your potential, and embrace a brighter future.",
    },
  ];

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 max-h-screen space-x-36 place-items-center bg-fcWhite p-16 mt-16 ">
      <div className="w-full space-y-8">
        <div className="font-SpaceGrotesk bg-fcPrimary flex justify-center  rounded-2xl ">
          {data1.map((item, index) => {
            return (
              <div key={index} className=" space-y-8 my-20 relative">
                <div>
                  <img src={Dot3} alt="dot" className="absolute left-14" />
                </div>
                <div className="text-[40px] font-SpaceGrotesk text-fcWhite  xl:leading-[40px] font-bold">
                  Start your transformative
                  <br /> journey now!
                </div>
                <div className="text-fcWhite  xl:leading-[30px] text-xl ">
                  Transform today, unlock your potential, and embrace
                  <br /> a brighter future.
                </div>
                <div className="flex items-center justify-between">
                  <SecondaryButton className= "bg-fcWhite px-12 py-3 text-[#3E5693] rounded-lg text-xl">
                    Join Community
                  </SecondaryButton>
                  <div>
                    {" "}
                    <img
                      src={Dot2}
                      alt="dot"
                      className=" absolute right-[-50px]"
                    />
                  </div>
                </div>

                <div>
                  <img
                    src={Dot}
                    alt="dot"
                    className="absolute bottom-[-50px] left-8"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full  items-end">
        <div>
          {data1.map((item, index) => {
            return (
              <div key={index} className="">
                <div>
                  <p className="text-fcBlack text-[40px] xl:leading-[45px]  font-medium">
                    Elevate your tech skills now!
                    <br /> Join our community today!
                  </p>
                </div>
                <div>
                  <div className="flex space-x-4 my-5">
                    <div className="grid items-center space-y-4 ">
                      <CircleIcon />
                      <Line />
                    </div>
                    <div className="space-y-4">
                      <p className="text-fcDark font-semibold font-SpaceGrotesk text-2xl">
                        Get groomed to be culturally and technically fit
                      </p>
                      <p className="text-fcDark2 font-medium font-SpaceGrotesk xl:leading-[24px] text-xl">
                        We prepare you into becoming fit for the real-life
                        <br /> workspace.
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-4 my-4">
                    <div className="grid items-center space-y-4 ">
                      <CircleIcon />
                      <Line />
                    </div>
                    <div className="space-y-4">
                      <p className="text-fcDark font-semibold font-SpaceGrotesk text-2xl">
                      Get soft skills
                      </p>
                      <p className="text-fcDark2 font-medium font-SpaceGrotesk xl:leading-[24px] text-xl">
                      The ever-changing tech world moves at the speed <br/>of light. Upskilling at its best here. Join us!
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-4 my-4">
                    <div className="grid  ">
                      <CircleIcon />
                     
                    </div>
                    <div className="space-y-4">
                      <p className="text-fcDark font-semibold font-SpaceGrotesk text-2xl">
                      Get Connected
                      </p>
                      <p className="text-fcDark2 font-medium font-SpaceGrotesk xl:leading-[24px] text-xl">
                      Learn from Tech gurus with great expertise. Connect<br/> with start-ups and achieve your career dreams.
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

export default JoinUs;
