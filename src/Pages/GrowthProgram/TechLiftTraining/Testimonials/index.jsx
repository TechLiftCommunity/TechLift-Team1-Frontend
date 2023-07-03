import React from "react";
import QouteIcon from "../../../../Components/Icons/QouteIcon";
import ReviewIcon from "../../../../Components/Icons/ReviewIcon";
import EclipseImg from "../../../../Components/Assets/img/Ellipse.png";
import { TestimonialCarousel } from "../../../../Components/modules/Carousel";

const Testimonials = () => {
  return (
    <div className=" lg:max-h-screen mt-10  py-10">
      <p className=" text-[24px] md:text-3xl lg:text-4xl text-fcPrimary xl:leading-[45px] text-center font-SpaceGrotesk font-semibold ">
      Testimonies from our benefitors
      </p>
      
      <div className="hidden lg:grid w-full lg:grid-cols-3  md:grid-cols-1 mt-20 px-8 place-items-center">
        <div className="bg-fcWhite items-center flex justify-center px-8 py-10 rounded-md shadow-xl">
          <div className="space-y-4">
            <QouteIcon size={20} />
            <div className="flex gap-4 items-center">
              <div>
                <img src={EclipseImg} alt="eclipse" />
              </div>
              <div className="xl:leading-[20px] flex  justify-center items-center">
                <p className="font-bold font-SpaceGrotesk">James Nelson</p>
              </div>
            </div>
            <p className="text-black  text-base font-SpaceGrotesk">
              If you have been looking for a platform to
              <br /> grow your career for many years, people
              <br /> that will point out your errors and give you
              <br />
              reasons to learn and improve, join Techlift.
            </p>
          </div>
        </div>
        <div className="bg-fcWhite items-center flex justify-center p-8 rounded-md shadow-xl">
          <div className="space-y-4">
            <QouteIcon size={20} />
            <div className="flex gap-4 items-center">
              <div>
                <img src={EclipseImg} alt="eclipse" />
              </div>
              <div className="xl:leading-[20px] flex  justify-center items-center">
                <p className="font-bold font-SpaceGrotesk">Bolujoko Great</p>
              </div>
            </div>
            <p className="text-black text-base font-SpaceGrotesk">
              Met great mentors who added nuggets to
              <br /> my knowledge. Got connected to
              <br /> industrious people, Tech lift helped me to
              <br /> become an overall better person, in and
              <br /> outside the job.
            </p>
          </div>
        </div>
        <div className="bg-fcWhite items-center flex justify-center p-8 rounded-md shadow-xl">
          <div className="space-y-4">
            <QouteIcon size={20} />
            <div className="flex gap-4 items-center">
              <div>
                <img src={EclipseImg} alt="eclipse" />
              </div>
              <div className="xl:leading-[20px] fl ex justify-center items-center">
                <p className="font-bold font-SpaceGrotesk">Esther Funmi</p>
              </div>
            </div>
            <p className="text-black text-base font-SpaceGrotesk">
              Since joining this community, I have had the
              <br /> chance of working on amazing projects with
              <br /> brilliant minds. This has afforded me the
              <br />
              opportunity to learn firsthand the
              <br /> importance of working with a team
            </p>
          </div>
        </div>
      </div>
      <div className=" lg:hidden ">
        <TestimonialCarousel />
      </div>
    </div>
  );
};

export default Testimonials;
