import React from "react";
import QouteIcon from "../../../Components/Icons/QouteIcon";

import EclipseImg from "../../../Components/Assets/img/Ellipse.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

export default function TestimonialCarousel() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">
        <SwiperSlide className=" bg-fcWhite items-center flex justify-center px-8   py-10 rounded-md">
          <div classNameName="">
            <div classNameName="space-y-4">
              <QouteIcon size={20} />
              <div classNameName="flex justify-between gap-4 ">
                <img src={EclipseImg} alt="eclipse" />

                <p classNameName="font-bold font-SpaceGrotesk">James Nelson</p>
              </div>
              <p classNameName="text-fcBlack text-sm font-SpaceGrotesk">
                If you have been looking for a platform to
                <br /> grow your career for many years, people
                <br /> that will point out your errors and give you
                <br />
                reasons to learn and improve, join Techlift.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" bg-fcWhite items-center flex justify-center px-8  py-10 rounded-md">
          <div classNameName="bg-fcWhite items-center flex justify-center p-8 rounded-md ">
            <div classNameName="space-y-4">
              <QouteIcon size={20} />
              <div classNameName="flex gap-4 items-center">
                <div>
                  <img src={EclipseImg} alt="eclipse" />
                </div>
                <div classNameName="xl:leading-[20px] flex  justify-center items-cen/ter">
                  <p classNameName="font-bold font-SpaceGrotesk">
                    Bolujoko Great
                  </p>
                </div>
              </div>
              <p classNameName="text-fcBlack text-sm font-SpaceGrotesk">
                Met great mentors who added nuggets to
                <br /> my knowledge. Got connected to
                <br /> industrious people, Tech lift helped me to
                <br /> become an overall better person, in and
                <br /> outside the job.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" bg-fcWhite items-center flex justify-center px-8  py-10 rounded-md">
          <div classNameName="bg-fcWhite items-center flex justify-center p-8 rounded-md">
            <div classNameName="space-y-4">
              <QouteIcon size={20} />
              <div classNameName="flex gap-4 items-center">
                <div>
                  <img src={EclipseImg} alt="eclipse" />
                </div>
                <div classNameName="xl:leading-[20px] fl ex justify-center items-cen/ter">
                  <p classNameName="font-bold font-SpaceGrotesk">
                    Esther Funmi
                  </p>
                </div>
              </div>
              <p classNameName="text-fcBlaxk text-sm font-SpaceGrotesk">
                Since joining this community, I have had the
                <br /> chance of working on amazing projects with
                <br /> brilliant minds. This has afforded me the
                <br />
                opportunity to learn firsthand the
                <br /> importance of working with a team
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
