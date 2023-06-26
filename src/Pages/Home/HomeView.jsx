import React from "react";
import { GrowthProgram, Hero, JoinUs, OurMission, Transformative,Testimonials } from "./HomeCompScreen";
import MemberList from "./HomeCompScreen/MembersList";
// import Testimonials from "./HomeCompScreen/Testimonials";
// import Transformative from "./HomeCompScreen/Transformative";

const HomeView = () => {
  return (
    <div className="overflow-hidden space-y-20 ">
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
