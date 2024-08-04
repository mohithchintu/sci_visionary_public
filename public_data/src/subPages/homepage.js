import React from 'react';
import Slider from './slider';
import Journalslist from './journals_l';
import Navbar from './navbar';
import Footer from './footer';
import LogoSlide from '../components/logoSlide';

function HomePage() {
  return (
    <>
      <Navbar />
      <div className='xl:container mx-auto'>
        {/* <Banner /> */}
        <Slider />
        <LogoSlide />
        <Journalslist />
      </div>
      <Footer />
    </>
  )
}

export default HomePage