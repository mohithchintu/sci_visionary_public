// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import lgscreen3 from "../assets/lgscreen3.png";
import lgscreen4 from "../assets/lgscreen4.png";
import lgscreen from "../assets/lgscreen.png";
import lgscreen2 from "../assets/lgscreen2.png";
import { Link } from "react-router-dom";

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '../styles.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

export default function Slider() {
    return (
        <>
            <div className='lg:rounded-2xl md:my-12'>
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Autoplay, Pagination]}
                    grabCursor={true}
                    spaceBetween={10}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: true,
                    }}
                    loop={true}
                    slidesPerView={1}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 0,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    className="mySwiper lg:rounded-2xl"
                >
                    <SwiperSlide >
                        <div className="banner flex flex-col-reverse md:rounded-xl rounded-md overflow-hidden md:flex-row justify-between items-stretch md:justify-start md:items-center font-mont bg-[#EEEBE2]">
                            <div className="left space-y-4 bg-[#EEEBE2] flex flex-col justify-center items-center md:py-auto md:items-start md:ml-12 py-12 md:py-6">
                                <h1 class="text-xl font-semibold text-center md:text-left md:text-2xl lg:text-4xl md:w-[70%] w-[60%]">
                                    Publish Researches With Us.
                                </h1>
                                <p class="w-3/4 text-center text-xs md:text-left md:text-sm font-medium">
                                    SCI Visionary is dedicated to allowing it's users all over the world to
                                    explore the new educational era.
                                </p>
                                <Link to="/contact-us">
                                    <button className="duration-300 ease-in-out bg-[#7968ec] px-5 md:px-10 py-2 md:py-4  rounded-full text-white text-sm md:text-md font-semibold mt-2 hover:bg-[#7D69F9] hover:drop-shadow-md md:hover:drop-shadow-lg hover:shadow-[#BDB5EE] md:hover:shadow-[#BDB5EE]">
                                        Contact Us
                                    </button>
                                </Link>
                            </div>
                            <div className="right min-h-max md:hidden rounded-md overflow-hidden">
                                <img class="object-fill min-h-max md:w-auto lg:h-auto" src={lgscreen} alt="" />
                            </div>
                            <div className="right hidden md:block rounded-xl overflow-hidden">
                                <img class="h-96" src={lgscreen} alt="" />
                            </div>
                        </div>
                    </SwiperSlide>



                    <SwiperSlide >
                        <div className="banner flex flex-col-reverse md:rounded-xl rounded-md overflow-hidden md:flex-row justify-between md:justify-start md:items-center font-mont bg-[#260939]">
                            <div className="left space-y-4 bg-[#260939] text-white flex flex-col justify-center items-center md:py-auto md:items-start md:ml-12 py-12 md:py-6">
                                <h1 class="text-xl font-semibold text-center md:text-left md:text-2xl lg:text-4xl md:w-[70%] w-[60%]">
                                    Why Publish with SCI Visionary?
                                </h1>
                                <p class="w-3/4 text-center text-xs md:text-left md:text-sm font-medium">
                                    Experience a new educational era with global accessibility and unparalleled opportunities.
                                </p>
                                <Link to="/contact-us">
                                    <button className="duration-300 ease-in-out bg-[#7968ec] px-6 md:px-10 py-2.5 md:py-4  rounded-full text-white text-sm md:text-md font-semibold mt-2 hover:bg-[#7D69F9] hover:drop-shadow-md md:hover:drop-shadow-lg hover:shadow-[#BDB5EE] md:hover:shadow-[#BDB5EE]">
                                        Contact Us
                                    </button>
                                </Link>
                            </div>
                            <div className="right min-h-max md:hidden rounded-md overflow-hidden">
                                <img class="object-fill min-h-max md:w-auto lg:h-auto" src={lgscreen3} alt="" />
                            </div>
                            <div className="right hidden md:block rounded-xl overflow-hidden">
                                <img class="h-96" src={lgscreen3} alt="" />
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide >
                        <div className="banner flex flex-col-reverse md:rounded-xl rounded-md overflow-hidden md:flex-row justify-between md:justify-start md:items-center font-mont bg-[#030303]">
                            <div className="left space-y-4 text-white bg-[#030303] flex flex-col justify-center items-center md:py-auto md:items-start md:ml-12 py-12 md:py-6">
                                <h1 class="text-xl font-semibold text-center md:text-left md:text-2xl lg:text-4xl md:w-[70%] w-[60%]">
                                    Benefits with SCI Visionary.
                                </h1>
                                <p class="w-3/4 text-center text-xs md:text-left md:text-sm font-medium">
                                    Engage in a collaborative network of researchers, united in pioneering educational innovation.
                                </p>
                                <Link to="/contact-us">
                                    <button className="duration-300 ease-in-out bg-[#7968ec] px-6 md:px-10 py-2.5 md:py-4  rounded-full text-white text-sm md:text-md font-semibold mt-2 hover:bg-[#7D69F9] hover:drop-shadow-md md:hover:drop-shadow-lg hover:shadow-[#BDB5EE] md:hover:shadow-[#BDB5EE]">
                                        Contact Us
                                    </button>
                                </Link>
                            </div>
                            <div className="right min-h-max md:hidden rounded-md overflow-hidden">
                                <img class="object-fill min-h-max md:w-auto lg:h-auto" src={lgscreen4} alt="" />
                            </div>
                            <div className="right hidden md:block rounded-xl overflow-hidden">
                                <img class="h-96" src={lgscreen4} alt="" />
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide >
                        <div className="banner flex flex-col-reverse md:rounded-xl rounded-md overflow-hidden md:flex-row justify-between items-stretch md:justify-start md:items-center font-mont bg-[#011A30]">
                            <div className="left space-y-4 bg-[#011A30] text-white flex flex-col justify-center items-center md:py-auto md:items-start md:ml-12 py-12 md:py-6">
                                <h1 class="text-xl font-semibold text-center md:text-left md:text-2xl lg:text-4xl md:w-[70%] w-[60%]">
                                    Contribute Your Newest Discoveries.
                                </h1>
                                <p class="w-3/4 text-center text-xs md:text-left md:text-sm font-medium">
                                    Contribute your latest insights, advancing knowledge and shaping the forefront of your field's progression and understanding.
                                </p>
                                <Link to="/contact-us">
                                    <button className="duration-300 ease-in-out bg-[#7968ec] px-6 md:px-10 py-2.5 md:py-4  rounded-full text-white text-sm md:text-md font-semibold mt-2 hover:bg-[#7D69F9] hover:drop-shadow-md md:hover:drop-shadow-lg hover:shadow-[#BDB5EE] md:hover:shadow-[#BDB5EE]">
                                        Contact Us
                                    </button>
                                </Link>
                            </div>
                            <div className="right min-h-max md:hidden rounded-md overflow-hidden">
                                <img class="object-fill min-h-max md:w-auto lg:h-auto" src={lgscreen2} alt="" />
                            </div>
                            <div className="right hidden md:block rounded-xl overflow-hidden">
                                <img class="h-96" src={lgscreen2} alt="" />
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
            {/* 
            <div className=' hidden md:block lg:hidden'>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    spaceBetween={-160}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2250,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    slidesPerView={1.3}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: -300,
                        depth: 100,
                        modifier: 1,
                        slideShadows: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='rounded-xl h-[48vw]'></div>
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className=' block md:hidden'>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    spaceBetween={0}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2250,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    slidesPerView={1.24}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: -30,
                        depth: 400,
                        modifier: 1,
                        slideShadows: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='rounded-xl h-[48vw]'></div>
                    </SwiperSlide>
                </Swiper>
            </div> */}
        </>
    );
}
