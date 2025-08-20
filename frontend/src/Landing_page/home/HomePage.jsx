import React from 'react'
import Navbar from '../Navbar'
import HeroSection from './HeroSection'
import Awards from './Awards'
import Stats from './Stats'
import Pricing from './Pricing'
import Education from './Education'
import OpenAccount from '../openAccount'
import Footer from "../Footer"

const HomePage = () => {
  return (
    <>
        <Navbar/>
        <HeroSection/>
        <Awards/>
        <Stats/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
        <Footer/>
    </>
  )
}

export default HomePage