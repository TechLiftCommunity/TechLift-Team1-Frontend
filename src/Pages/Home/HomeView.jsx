import React from "react";
import { GrowthProgram, Hero, JoinUs, OurMission, Transformative,Testimonials } from "./HomeCompScreen";
import MemberList from "./HomeCompScreen/MembersList";

const HomeView = () => {
  return (
    <div className="overflow-hidden space-y-10 md:space-y-20 ">
      <Hero />
      <MemberList />
      <OurMission />
      <Transformative />
      <GrowthProgram />
      <Testimonials />
      <JoinUs />
    </div>
  );
};

export default HomeView;
