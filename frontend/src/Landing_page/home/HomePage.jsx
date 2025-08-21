import React from "react";
import Navbar from "../Navbar";
import HeroSection from "./HeroSection";
import Awards from "./Awards";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Education from "./Education";
import OpenAccount from "../openAccount";


const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
    </>
  );
};

export default HomePage;
