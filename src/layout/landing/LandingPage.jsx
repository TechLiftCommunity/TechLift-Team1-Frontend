
import { useLocation } from "react-router-dom";

import { Footer, Navbar } from "../../Components/modules/navbar";

const LandingPage = ({ children, footer = true }) => {
  const { pathname } = useLocation();
 
  return (
    <div className=" w-full min-h-screen">
      <Navbar  />

      <div className={`${pathname === "/" && "pt-0"} lg:pt-0`}>
        {children}
        {/* {footer && <Footer />} */}
      </div>
    </div>
  );
};

export default LandingPage;
