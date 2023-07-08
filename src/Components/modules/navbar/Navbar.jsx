import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assets/Svg/myLogo.png";
import { HiChevronDown, HiChevronUp, HiChevronRight } from "react-icons/hi";
import Dropdown from "../dropdown/Dropdown";
import Button, { SecondaryButton } from "../button/Button";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { pathname } = useLocation();
  const [openProgram, setOpenProgram] = useState(false);
  const [openAboutUs, setOpenAboutUs] = useState(false);
  const [switchNavbar, setSwitchNavbar] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showPartnerDropdown, setShowPartnerDropdown] = useState(false);

  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(!nav);

  return (
    <div className="w-screen h-16 md:h-24 z-50 fixed drop-shadow-lg bg-fcWhite">
      <div
        className={` flex justify-between md:px-10 bg-fcPrimary lg:bg-fcWhite items-center w-full h-full  ${
          nav ? "bg-fcPrimary" : "bg-fcWhite py-10"
        }`}
      >
        <div className="flex items-center">
          <a href="/">
            <img
              src={Logo}
              alt="img"
              className={`md:pl-0 pl-4 md:w-full w-[100px]  ${
                nav ? "hidden" : "block"
              }  `}
            />
          </a>
        </div>
        <ul className="hidden  md:flex font-bold cursor-pointer space-x-8">
          <li className="md:text-black text-fcWhite  font-SpaceGrotesk font-medium text-[18px]">
            <Link to="/">Home</Link>
          </li>
          <li className="md:text-black text-fcWhite  font-SpaceGrotesk font-medium text-[18px]">
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
                      {" "}
                      <p className="text-base text-black2">
                        {" "}
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
                className="absolute top-16 bg-fcWhite"
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

        <div className="">
          {" "}
          <div
            className="hidden space-x-2 md:inline-block"
            onClick={() => setSwitchNavbar(!switchNavbar)}
          >
            {switchNavbar ? (
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
            ) : (
              <div className={` ${pathname === "/community" && "pt-0"} pt-0 `}>
                <Button className="  font-SpaceGrotesk text-[18px] font-medium text-white bg-fcPrimary rounded-md shadow ">
                  Join Community
                </Button>
              </div>
            )}
          </div>
        </div>
        <div className="lg:hidden mt-5 mr-5 " onClick={handleClick}>
          {!nav ? (
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
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8  text-fcWhite"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
      </div>

      <ul
        className={
          nav
            ? "lg:hidden bg-fcPrimary  px-16 space-y-6 min-h-screen pt-6"
            : "absolute  w-full hidden "
        }
      >
        <li className="   w-full text-fcWhite font-SpaceGrotesk">
          <Link to="/" onClick={handleClose} smooth={true} duration={500}>
            Home
          </Link>
          <hr className="w-full mt-6 text-fcPrimary2 border-b " />
        </li>
        <li
          className=" w-full text-fcWhite font-SpaceGrotesk "
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <div className="flex justify-between items-center">
            Growth Programs
            {showDropdown ? (
              <HiChevronDown className="" size={20} />
            ) : (
              <HiChevronRight size={20} />
            )}
          </div>
          {showDropdown && (
            <div className="space-y-6">
              <Link
                to="/growthprogram"
                onClick={handleClose}
                smooth={true}
                duration={500}
              >
                <p className="max-w-full border-t border-usafPrimary mt-4 border-dotted pt-1 font-SpaceGrotesk text-base text-fcWhite ">
                  TechLift Training
                </p>
              </Link>

              <p className="max-w-full border-t border-usafPrimary mt-4 border-dotted pt-1 font-SpaceGrotesk text-base text-fcWhite ">
                TechLift Event
              </p>
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
