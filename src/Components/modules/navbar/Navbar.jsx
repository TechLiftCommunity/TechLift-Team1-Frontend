import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assets/Svg/myLogo.png";
import { HiChevronDown, HiChevronUp, HiChevronRight } from "react-icons/hi";
import Dropdown from "../dropdown/Dropdown";
import Button, { SecondaryButton } from "../button/Button";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();

  const [nav, setNav] = useState(false);
  const [openProgram, setOpenProgram] = useState(false);
  const [openAboutUs, setOpenAboutUs] = useState(false);
  const [switchNavbar, setSwitchNavbar] = useState(false);
  return (
    <nav className="w-full fixed top-0 shadow z-50 bg-fcWhite">
      <div className="justify-between  md:space-x-4 mx-auto md:max-w-full md:items-center md:flex sm:mx-8 lg:mx-12">
        <div>
          <div className="flex items-center justify-between py-3 md:py-7 md:block">
            <a href="/">
              <img
                src={Logo}
                alt="img"
                className="md:pl-0 pl-4 md:w-full w-[100px]"
              />
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-8 md:space-y-0">
              <li className="text-black  font-SpaceGrotesk font-medium text-[18px]">
                <Link to="/">Home</Link>
              </li>
              <li className="text-black  font-SpaceGrotesk font-medium text-[18px]">
                <Link
                  to="javascript:void(0)"
                  className="flex gap-2 items-center"
                  onMouseEnter={() => setOpenProgram(true)}
                  onMouseLeave={() => setOpenProgram(false)}
                >
                  <p>Growth Programs</p>
                  <span>
                    {openProgram === false ? (
                      <HiChevronDown className=" font-extrabold text-[#000000] text-base" />
                    ) : (
                      <HiChevronUp className="font-extrabold text-[#000000] text-base" />
                    )}
                  </span>
                  <Dropdown
                    className="absolute top-16 bg-fcWhite"
                    show={openProgram}
                  >
                    <div className="grid justify-center items-center text-black2 my-2  w-full font-SpaceGrotesk">
                      <div className="">
                        <Link to="/growthprogram">
                          <p className="text-base text-black2">
                            TechLift Training
                          </p>
                        </Link>

                    <Link to="/growthprogram/event">
                      <p className="text-base text-black2 pt-2">
                        {" "}
                        TechLift Event
                      </p>
                    </Link>
                  </div>
                </div>
              </Dropdown>
            </Link>
          </li>
          <li className="md:text-black text-fcWhite  font-SpaceGrotesk font-medium text-[18px]">
            <Link
              to="javascript:void(0)"
              className="flex gap-2 items-center"
              onMouseEnter={() => setOpenAboutUs(true)}
              onMouseLeave={() => setOpenAboutUs(false)}
            >
              <p>About us</p>
              <span>
                {openAboutUs === false ? (
                  <HiChevronDown className=" font-extrbold  text-[#000000] text-base" />
                ) : (
                  <HiChevronUp className="font-extrabold  text-[#000000] text-base" />
                )}
              </span>
              <Dropdown
                className="absolute top-14 bg-fcWhite"
                show={openAboutUs}
              >
                <div className="grid justify-center items-center text-black2 my-2  w-full font-SpaceGrotesk">
                  <div className="space-y-2">
                    <p className="text-base text-black2">Our Mission</p>
                    <p className="text-base text-black2">Label</p>
                    <p className="text-base text-black2">Label</p>
                  </div>
                </div>
              </Dropdown>
            </Link>
          </li>
          <li className="md:text-black text-fcWhite  font-SpaceGrotesk font-medium text-[18px]">
            {" "}
            <Link to="javascript:void(0)">Partners</Link>
          </li>
        </ul>

            <div className="mt-3 space-y-2 md:hidden md:hidden">
              <Link
                to="/community"
                className="inline-block w-full px-4 py-2 text-[18px] font-SpaceGrotesk font-medium text-center text-white bg-fcPrimary rounded-md shadow hover:bg-gray-800"
              >
                Join Community
              </Link>
            </div>
          </div>
        </div>
        <div className="">
          {switchNavbar === false ? (
            <div
              className="hidden space-x-2 md:inline-block"
              onClick={() => setSwitchNavbar(!switchNavbar)}
            >
              <Link to="/community">
                <Button className="  font-SpaceGrotesk text-[18px] font-medium text-white bg-fcPrimary rounded-md shadow ">
                  Join Community
                </Button>
              </Link>
            </div>
          ) : (
            <div className="hidden space-x-5 md:flex items-center">
              <SecondaryButton className="px-[40px] h-14  font-SpaceGrotesk font-[500] text-[18px] text-fcPrimary  border border-[#3E5693] bg-transparent rounded-md shadow hover:bg-gray-800">
                Login
              </SecondaryButton>
              <Button
                size="md"
                className=" font-SpaceGrotesk text-[18px] font-medium text-white bg-fcPrimary rounded-md shadow "
              >
                Get Started
              </Button>
            </div>
          )}
          <hr className="w-full mt-6 text-fcPrimary2 border-b " />
        </li>

        <li className=" w-full text-fcWhite font-SpaceGrotesk">
          <Link
            to="platform"
            onClick={handleClose}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Partner
          </Link>
          <hr className="w-full mt-6 text-fcPrimary2 border-b " />
        </li>
        <li
          className=" w-full text-fcWhite font-SpaceGrotesk "
          onClick={() => setShowPartnerDropdown(!showPartnerDropdown)}
        >
          <div className="flex justify-between items-center">
            About us
            {showPartnerDropdown ? (
              <HiChevronDown className="" size={20} />
            ) : (
              <HiChevronRight size={20} />
            )}
          </div>
          {showPartnerDropdown && (
            <div className="space-y-6">
              <p className="max-w-full border-t border-usafPrimary mt-4 border-dotted pt-1 font-SpaceGrotesk text-base text-fcWhite ">
                Our mission
              </p>
              <p className="max-w-full border-t border-usafPrimary mt-4 border-dotted pt-1 font-SpaceGrotesk text-base text-fcWhite ">
                Label
              </p>
              <p className="max-w-full border-t border-usafPrimary mt-4 border-dotted pt-1 font-SpaceGrotesk text-base text-fcWhite ">
                Label
              </p>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
