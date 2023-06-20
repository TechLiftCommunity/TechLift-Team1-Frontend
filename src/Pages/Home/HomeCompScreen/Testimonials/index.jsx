import React from "react";
import QouteIcon from "../../../../Components/Icons/QouteIcon";
import ReviewIcon from "../../../../Components/Icons/ReviewIcon";
import EclipseImg from "../../../../Components/Assets/img/Ellipse.png";

const Testimonials = () => {
  return (
    <div className="bg-fcPrimary6  py-10">
      <p className="text-[40px] text-fcBlack xl:leading-[45px] text-center font-SpaceGrotesk  font-semibold ">
        See how we have impacted the life
        <br /> of our members
      </p>
      <div className="grid lg:grid-cols-3 md:grid-cols-1 mt-10 place-items-center">
        <div className="bg-fcWhite items-center flex justify-center px-8 py-10 rounded-md">
          <div className="space-y-4">
            <QouteIcon size={20} />
            <div className="flex items-center">
              <div>
                <img src={EclipseImg} alt="eclipse" />
              </div>
              <div className="xl:leading-[20px] flex justify-center items-center">
                <p className="font-bold font-SpaceGrotesk">
                  James Nelson <ReviewIcon />
                </p>
              </div>
            </div>
            <p className="text-fcBlaxk text-sm font-SpaceGrotesk">
              If you have been looking for a platform to
              <br /> grow your career for many years, people
              <br /> that will point out your errors and give you
              <br />
              reasons to learn and improve, join Techlift.
            </p>
          </div>
        </div>
        <div className="bg-fcWhite items-center flex justify-center p-8 rounded-md">
          <div className="space-y-4">
            <QouteIcon size={20} />
            <div className="flex items-center">
              <div>
                <img src={EclipseImg} alt="eclipse" />
              </div>
              <div className="xl:leading-[20px] flex justify-center items-center">
                <p className="font-bold font-SpaceGrotesk">
                Bolujoko Great <ReviewIcon />
                </p>
              </div>
            </div>
            <p className="text-fcBlaxk text-sm font-SpaceGrotesk">
              Met great mentors who added nuggets to
              <br /> my knowledge. Got connected to
              <br /> industrious people, Tech lift helped me to
              <br /> become an overall better person, in and
              <br /> outside the job.
            </p>
          </div>
        </div>
        <div className="bg-fcWhite items-center flex justify-center p-8 rounded-md">
          <div className="space-y-4">
            <QouteIcon size={20} />
            <div className="flex items-center">
              <div>
                <img src={EclipseImg} alt="eclipse" />
              </div>
              <div className="xl:leading-[20px] flex justify-center items-center">
                <p className="font-bold font-SpaceGrotesk">
                Esther Funmi <ReviewIcon />
                </p>
              </div>
            </div>
            <p className="text-fcBlaxk text-sm font-SpaceGrotesk">
              Since joining this community, I have had the<br /> chance of working on
              amazing projects with<br /> brilliant minds. This has afforded me the<br />
              opportunity to learn firsthand the<br/> importance of working with a
              team
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
