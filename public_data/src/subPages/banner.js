import React from "react";
import banner1 from "../assets/banner1.png";
import lgscreen from "../assets/lgscreen.png";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <>
      <div className="banner flex flex-col-reverse md:rounded-xl rounded-md overflow-hidden md:flex-row justify-between md:justify-start mt-8 md:items-center font-mont bg-[#EEEBE2]">
        <div className="left space-y-4 bg-[#EEEBE2] flex flex-col justify-center items-center md:py-auto md:items-start md:ml-12 py-12 md:py-0">
          <h1 class="text-xl font-semibold text-center md:text-left md:text-4xl md:w-[70%] w-[60%]">
            Publish Researches With Us.
          </h1>
          <p class="w-3/4 text-center text-xs md:text-left md:text-sm font-medium">
            SCI Visionary is dedicated to allowing it's users all over the world to
            explore the new educational era.
          </p>
          <Link to="/contact-us">
            <button className="duration-300 ease-in-out bg-[#7968ec] px-6 md:px-10 py-2.5 md:py-4  rounded-full text-white text-sm md:text-md font-semibold mt-2 hover:bg-[#7D69F9] hover:drop-shadow-md md:hover:drop-shadow-lg hover:shadow-[#BDB5EE] md:hover:shadow-[#BDB5EE]">
              Contact Us
            </button>
          </Link>
        </div>
        <div className="right md:hidden rounded-md overflow-hidden">
          <img class="w-[100%] md:w-auto lg:h-auto" src={banner1} alt="" />
        </div>
        <div className="right hidden md:block rounded-xl overflow-hidden">
          <img class="w-[100%]" src={lgscreen} alt="" />
        </div>
      </div>
    </>
  );
}

export default Banner;
