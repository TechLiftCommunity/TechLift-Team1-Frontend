import React from "react";
import trainingimage4 from "../../../../Components/Assets/img/trainingimage4.png";
import { SecondaryButton } from "../../../../Components/modules/button/Button";
import FormInput from "../.../../../../../Components/widgets/input/FormInput";
import TextArea from "../.../../../../../Components/widgets/textArea/TextArea";

const Contact = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-2 grid-cols-1 md:max-h-screen text-center md:text-start gap-14 place-items-center px-6 md:px-24 md:py-10">
        <div className="space-y-4 ">
          <p className=" font-SpaceGrotesk text-fcPrimary font-semibold  text-[18px] md:text-4xl">
            Want a recommendation from us for your next project?
          </p>
          <p className=" font-SpaceGrotesk  text-[18px] md:text-[19px] text-[#404040] ">
            Lorem ipsum dolor sit amet consectetur. Dignissim interdum enim ac
            nunc tincidunt at.
          </p>
          <form className="m-auto max-w-[59rem] space-y-8">
            <div>
              <FormInput
                size="lg"
                type="text"
                name="email"
                id="email"
                placeholder="ABC University of Technology"
                className="w-full "
                label="Email"
              />
            </div>

            <div>
              <TextArea
                size="lg"
                type="text"
                name="degree"
                id="degree"
                className="w-full "
                placeholder="Enter your message"
              />
            </div>
            <SecondaryButton className="text-fcWhite rounded-md w-full  text-base md:text-xl  py-4 font-SpaceGrotesk font-medium  border  bg-fcPrimary">
              SEND US MESSAGE
            </SecondaryButton>
          </form>
        </div>
        <div className="lg:w-full  items-center  md:ml-0 my-4 md:mt-4 flex justify-center order-first md:order-last ">
          <img src={trainingimage4} alt="hero" className="w-[550px] " />
        </div>
      </div>
    </div>
  );
};

export default Contact;
