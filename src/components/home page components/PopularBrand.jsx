import React, { useContext } from "react"

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

import { MyContext } from "../../context/ContextProvider"
import { popular_brand } from '../../assets/assets'

const PopularBrand = () => {

  const { navigate } = useContext(MyContext)

  return (

    <div className="container">

      <div className="title my-3 mt-5 text-center">
        <p className="text-secondary">TOP BRANDS</p>
        <h1 className='display-5 my-4'><b>Popular Brands</b></h1>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        loop={true}
        speed={1000}
        spaceBetween={50}
        slidesPerView={6}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          1200: {
            slidesPerView: 6
          },
          768: {
            slidesPerView: 4
          },
          320: {
            slidesPerView: 3
          },
        }}
      >

        {popular_brand.map((brand) => (

          <SwiperSlide onClick={() => navigate('/shop')} key={brand.img}>
            <div className="my-2">
              <img src={brand.img} alt="" className='w-100' />
            </div>
          </SwiperSlide>

        ))}

      </Swiper>

    </div>

  )

}

export default PopularBrand