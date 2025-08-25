import React from 'react'

import AppNavbar from '../components/home page components/AppNavbar'
import AboutUsBody from '../components/aboutus page components/AboutUsBody'
import AboutUsSlider from '../components/aboutus page components/AboutUsSlider'
import Footer from '../components/home page components/Footer'

const About_Us_Page = () => {
  return (
    <>
      <AppNavbar />
      <AboutUsBody />
      <AboutUsSlider />
      <Footer />
    </>
  )
}

export default About_Us_Page