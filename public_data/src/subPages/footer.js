import React from "react";
import foologo from "../assets/foologo.svg";
import mailicon from "../assets/mailicon.svg";
// import callicon from "../assets/callicon.svg";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer bg-black text-white mt-10 px-5 py-12 md:hidden">
        <div className="logo">
          <img className="w-36" src={foologo} alt="" />
          <p className="text-xs w-3/4 my-4">
            Publish researches with us. Uncover your potential, achieve your
            academic and professional goals with SCI Visionary.
          </p>
        </div>
        <div className="det"></div>
        <div className="foot">
          <div className="space-y-1 mt-8">
            <h2 className="text-xl font-medium underline-offset-8 cursor-pointer">
              Resources
            </h2>
            <ul className="manu text-sm space-y-4 py-2">
              <li className="cursor-pointer"><NavLink to="/about-us"> About Us</NavLink></li>
              <li className="cursor-pointer"><NavLink to="/journals"> Journals</NavLink></li>
              <li className="cursor-pointer"><NavLink to="/guidelines"> Guidelines</NavLink></li>
              <li className="cursor-pointer"><NavLink to="/contact-us"> Contact Us</NavLink></li>
              <li className="cursor-pointer"><NavLink to="/submit"> Submit Manuscripts</NavLink></li>
            </ul>
          </div>
          <div className="space-y-1 my-8">
            <h2 className="text-xl font-medium underline-offset-8 cursor-pointer">
              Contact
            </h2>
            <ul className="manu text-sm space-y-5 py-3">
              <li className="cursor-pointer flex space-x-3">
                <img className="w-5" src={mailicon} alt="" />
                <p className="text-sm">support@scivisionary.com</p>
              </li>
            </ul>
          </div>
          <hr />
          <p className="text-xs text-[#858585] text-center my-4">
            © 2023 | GleeDesign Studio
          </p>
        </div>
      </div>

      <div className="footer bg-black text-white mt-10 px-5 py-12 hidden md:block md:px-8 xl:px-16">
        <div className="grid grid-cols-3">
          <div className="logo">
            <img className="w-36" src={foologo} alt="" />
            <p className="text-xs w-3/4 my-4">
              Publish researches with us. Uncover your potential, achieve your
              academic and professional goals with SCI Visionary.
            </p>
          </div>

          <div className="mr-8 space-y-1">
            <h2 className="text-xl font-medium underline-offset-8 cursor-pointer">
              Resources
            </h2>
            <ul className="manu text-sm space-y-4 py-2">
              <li className="cursor-pointer"><NavLink to="/about-us"> About Us</NavLink></li>
              <li className="cursor-pointer"><NavLink to="/journals"> Journals</NavLink></li>
              <li className="cursor-pointer"><NavLink to="/guidelines"> Guidelines</NavLink></li>
              <li className="cursor-pointer"><NavLink to="/contact-us"> Contact Us</NavLink></li>
              <li className="cursor-pointer"><NavLink to="/submit"> Submit Manuscripts</NavLink></li>
            </ul>
          </div>

          <div className="space-y-1">
            <h2 className="text-xl font-medium underline-offset-8 cursor-pointer">
              Contact
            </h2>
            <ul className="manu text-sm space-y-5 py-3">
              <li className="cursor-pointer flex space-x-3">
                <img className="w-5" src={mailicon} alt="" />
                <p className="text-sm">support@scivisionary.com</p>
              </li>
              {/* <li className="flex space-x-3">
                <img className="w-5" src={callicon} alt="" />
                <p className="text-sm">+91 99999 00000</p>
              </li> */}
            </ul>
          </div>
        </div>
        <hr className="mt-6 border-[#3c3c3c] " />
        <p className="text-xs text-[#3c3c3c] text-center my-4">
          © 2023 | GleeDesign Studio
        </p>
      </div>
    </>
  );
}

export default Footer;
