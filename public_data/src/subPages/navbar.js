import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {NavLink} from 'react-router-dom';
import logoo from "../assets/logoo.svg";

export default function Navbar() {
  const navlinks = [
    {
      title: "About Us",
      link: "/about-us",
    },
    {
      title: "Journals",
      link: "/journals",
    },
    {
      title: "Guidelines",
      link: "/guidelines",
    },
    {
      title: "Submit Manuscripts",
      link: "/submit",
    },
    {
      title: "Contact Us",
      link: "/contact-us",
    },
  ];

  const [open, setOpen] = useState(false);
  
  const handleMenu = () => {
    setOpen((prev) => !prev);
  }

  return (
    <>
      <div className="nav flex px-5 justify-between py-2 md:px-8 xl:px-16 bg-white drop-shadow-md font-mont w-auto items-center">
        <div className="left cursor-pointer">
          <NavLink to="/"><img className="w-3/4 md:w-auto " src={logoo} alt="" /></NavLink>
        </div>

        <div>
        <div className="right hidden md:block">
          <div className="ml-10 flex items-baseline space-x-10">
            {navlinks.map((link, index) => (
              <NavLink
                className={({isActive}) => {
                  return  'text-sm duration-300 cursor-pointer py-2 px-1' +
                  (isActive ? 'text-black font-semibold bg-[#F8F6FF] rounded-lg py-2 px-1' : 'py-2 px-1 hover:rounded-lg text-gray-700 hover:bg-[#F8F6FF] hover:font-semibold')
                }}
                // className="text-sm cursor-pointer py-2 px-2 hover:bg-[#F8F6FF] rounded-md"
                key={index}
                to={link.link}
              >
                {link.title}
              </NavLink>
            ))}
          </div>

        </div>
        {/* Hamburger Buttons */}
        <div className=" flex md:hidden">
          <button type="button" onClick={handleMenu} className="flex items-center justify-center p-2 rounded-md text-black">
            <span className="sr-only">Open Main Menu</span>
            {open === true ? <FaTimes/> : <FaBars/>}
          </button>
        </div>
        </div>
      </div>
        
        {/* Mobile Menu */}
        {open ? (
          <div className="md:hidden">
            <div className=" px-2 pt-2 pb-3 space-y-1 sm:px-3 text-right bg-gray-100">
              {navlinks.map((link,index) =>(
                <NavLink
                className="text-black hover:text-gray-800 block px-3 py-2 font-medium"
                key={index}
                to={link.link}
              >
                {link.title}
              </NavLink>
              ))}
            </div>
          </div>
        ) : null}
        
    </>
  );
}
