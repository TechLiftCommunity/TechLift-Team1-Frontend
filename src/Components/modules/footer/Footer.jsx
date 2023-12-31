import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "../../Icons/FaceboookIcon";
import TwitterIcon from "../../Icons/TwitterIcon";
import InstagramIcon from "../../Icons/InstagramIcon";
import LinkdinIcon from "../../Icons/LinkdinIcon";
import WhiteLogo from "../../Assets/Svg/whitelogo.svg";

const Footer = () => {
  return (
    <div className=" font-SpaceGrotesk">
      <div className="relative bg-fcPrimary mt-12 py-8 md:py-10 ">
        <div className=" mx-auto ">
          <div className="flex flex-wrap  pl-6 md:pl-10 space-y-6  md:text-left">
            <div className="w-full lg:w-6/12 space-y-4">
              <div>
                <img src={WhiteLogo} alt="logo" className="md:pl-0 w-[100px] " />
             
              </div>
              <div className="text-[13px] sm:text-[14px] md:text-[16px] mt-0 text-fcWhite">
                Discover us on various social media
                <br /> platforms.
              </div>
              <div className=" lg:mb-0 mb-6 flex space-x-4">
                <FacebookIcon size={40} />
                <TwitterIcon size={40} />
                <InstagramIcon size={40} />
                <LinkdinIcon size={40} />
              </div>
            </div>
            <div className="w-full lg:w-6/12">
              <div className="flex lg:flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12  md:ml-auto">
                  <span className="block  text-fcWhite text-[13px] sm:text-[14px]  md:text-[18px] font-semibold  mb-2">
                    Company
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <Link
                        className="text-fcWhite hover:text-fcWhite font-SpaceGrotesk block pb-2 font-medium text-[13px] sm:text-[14px] md:text-[16px]"
                        to="https://www.creative-tim.com/presentation?ref=njs-profile"
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-fcWhite hover:text-fcWhite font-SpaceGrotesk block pb-2 font-medium text-[13px] sm:text-[14px] md:text-[16px]"
                        to="https://blog.creative-tim.com?ref=njs-profile"
                      >
                        Communities
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-fcWhite hover:text-fcWhite font-SpaceGrotesk block pb-2 font-medium text-[13px] sm:text-[14px] md:text-[16px]"
                        to="https://www.github.com/creativetimofficial?ref=njs-profile"
                      >
                        Programs
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block  text-fcWhite text-[13px] sm:text-[14px]  md:text-[18px] font-semibold  mb-2">
                    Legal
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <Link
                        className="text-fcWhite hover:text-fcWhite font-SpaceGrotesk block pb-2 font-medium text-[13px] sm:text-[14px] md:text-[16px]"
                        to="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile"
                      >
                        Terms Of Use
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-fcWhite hover:text-fcWhite font-SpaceGrotesk block pb-2 font-medium text-[13px] sm:text-[14px] md:text-[16px]"
                        to="https://creative-tim.com/terms?ref=njs-profile"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block  text-fcWhite text-[13px] sm:text-[14px]  md:text-[18px] font-semibold  mb-2">
                    Quick Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <Link
                        className="text-fcWhite hover:text-fcWhite font-SpaceGrotesk block pb-2 font-medium text-[13px] sm:text-[14px] md:text-[16px]"
                        to="https://creative-tim.com/terms?ref=njs-profile"
                      >
                        Programs
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-fcWhite hover:text-fcWhite font-SpaceGrotesk block pb-2 font-medium text-[13px] sm:text-[14px] md:text-[16px]"
                        to="https://creative-tim.com/privacy?ref=njs-profile"
                      >
                        Partners
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-fcWhite hover:text-fcWhite font-SpaceGrotesk block pb-2 font-medium text-[13px] sm:text-[14px] md:text-[16px]"
                        to="https://creative-tim.com/contact-us?ref=njs-profile"
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* <hr className="my-6 border-fcWhite" /> */}
        </div>
      </div>
      <div className="flex flex-wrap items-center py-4 md:justify-between bg-fcWhitetify-center">
        <div className="w-full lg:w-4/12 px-4 mx-auto text-center">
          <div className="text-[13px] sm:text-[14px] text-fcPrimary font-medium py-1">
            © TechliftAfrica | All rights Reserved. 2023
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
