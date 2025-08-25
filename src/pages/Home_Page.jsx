import React from 'react'

import AppNavbar from '../components/home page components/AppNavbar'
import AppCarousel from '../components/home page components/AppCarousel'
import Slider from '../components/home page components/Slider'
import NewArrivals from '../components/home page components/NewArrivals'
import ImgGrid from '../components/home page components/ImgGrid'
import PopularProducts from '../components/home page components/PopularProducts'
import PopularBrand from '../components/home page components/PopularBrand'
import Blog from '../components/home page components/Blog'
import Footer from '../components/home page components/Footer'

const Home = () => {
  return (
    <>
      <AppNavbar />
      <AppCarousel />
      <Slider />
      <NewArrivals />
      <PopularProducts />
      <ImgGrid />
      <PopularBrand />
      <Blog />
      <Footer />
    </>
  )
}

export default Home