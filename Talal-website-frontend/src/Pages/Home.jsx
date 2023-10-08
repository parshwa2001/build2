import React, { useEffect } from "react";

import Testimonials from "../Layouts/homeMain/Testimonials";
import Newsletter from "../Layouts/homeMain/Newsletter";
import AboutUs from "../Layouts/homeMain/AboutUs";
import HomeSlider from "../components/Sliders/HomeSlider";
import FlipCard from "../components/Sliders/FlipCard";// Import the CupPreloader component

import { useState } from "react";
import Stats from "../Layouts/homeMain/Stats";
import CardContainer from "../Layouts/homeMain/PhotoGallery";
import PhotoGallery from "../Layouts/homeMain/PhotoGallery";
import Portfolio from "../Layouts/homeMain/Portfolio";

function Home() {

  useEffect(() => {
    document.title = "Talal-Al-ghamin group | Home";
  }, []);


  return (
    <div>
      
        <>
          <div style={{ width: "100%", height: "100%" }}>
            <HomeSlider />
          </div>
          <AboutUs />
          <Portfolio/>
          <FlipCard />
          <Testimonials />
          <Stats/>
          <PhotoGallery/>
        </>
    </div>
  );
}

export default Home;
