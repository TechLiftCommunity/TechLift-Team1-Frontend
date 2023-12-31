import React from "react";
import LandingPage from "../../layout/landing/LandingPage";
import TrainingHero from "./TechLiftTraining/TrainingHero";
import ProgramStock from "./TechLiftTraining/ProgramStock";
import { OurMission } from "../Home/HomeCompScreen";
import Testimonials from "./TechLiftTraining/Testimonials";
import Contact from "./TechLiftTraining/Contact";
import { Carousel } from "../../Components/modules/carousels/Carousel";

const Training = () => {
  return (
    <div>
      <LandingPage>
        <TrainingHero />
        <ProgramStock />
        <Carousel />
        <Contact />
      </LandingPage>
    </div>
  );
};

export default Training;
