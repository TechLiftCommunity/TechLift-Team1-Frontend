import React from "react";
import LandingPage from "../../layout/landing/LandingPage";
import TrainingHero from "./TechLiftTraining/TrainingHero";
import ProgramStock from "./TechLiftTraining/ProgramStock";
import { OurMission } from "../Home/HomeCompScreen";
import Testimonials from "./TechLiftTraining/Testimonials";
import Contact from "./TechLiftTraining/Contact";

const Training = () => {
  return (
    <div>
      <LandingPage>
        <TrainingHero />
        <ProgramStock />
        <Testimonials />
        <Contact />
      </LandingPage>
    </div>
  );
};

export default Training;
