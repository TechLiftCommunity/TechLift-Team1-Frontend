import { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const [openProgram, setOpenProgram] = useState(false);
  const [openAboutUs, setOpenAboutUs] = useState(false);

  return (
    <nav className="w-full fixed shadow z-50 bg-white">
      <div className="justify-between  mx-auto lg:max-w-full md:items-center md:flex md:mx-16">
        <div>
          <div className="flex items-center justify-between py-3 md:py-7 md:block">
            <a href="javascript:void(0)">
              <h2 className="text-3xl font-bold text-black">LOGO</h2>
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
              <li className="text-black  font-Inter font-medium text-xl">
                <a href="javascript:void(0)">Home</a>
              </li>
              <li className="text-black  font-Inter font-medium text-xl">
                <Link
                  href="javascript:void(0)"
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
                </Link>
              </li>
              <li className="text-black  font-Inter font-medium text-xl">
              <Link
                  href="javascript:void(0)"
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
                </Link>
              </li>
              <li className="text-black  font-Inter font-medium text-xl">
                <a href="javascript:void(0)">Partners</a>
              </li>
            </ul>

            <div className="mt-3 space-y-2 lg:hidden md:hidden">
              <a
                href="javascript:void(0)"
                className="inline-block w-full px-4 py-2 text-xl font-Inter font-medium text-center text-white bg-fcPrimary rounded-md shadow hover:bg-gray-800"
              >
                Join Community
              </a>
            </div>
          </div>
        </div>
        <div className="hidden space-x-2 md:inline-block">
          <a
            href="javascript:void(0)"
            className="px-9 py-4  font-Inter text-xl font-medium text-white bg-fcPrimary rounded-md shadow hover:bg-gray-800"
          >
            Join Community
          </a>
        </div>
      </div>
    </nav>
  );
}
