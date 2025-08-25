import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

import { about_team_img } from '../../assets/assets'

const AboutUsSlider = () => {
  return (
    <div className='container'>

      <div className="title my-4 text-center">
        <h1 className='display-5'><b>Meet The Our Team</b></h1>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        loop={true}
        speed={1000}
        spaceBetween={50}
        slidesPerView={4}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          1200: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 3,
          },
          320: {
            slidesPerView: 1,
          }
        }}
      >

        {about_team_img.map((about_us_team) => (

          <SwiperSlide key={about_us_team.img}>
            <div className='d-flex flex-column my-3'>
              <img src={about_us_team.img} alt="" className='w-100' />
              <div className="my-2 text-center">
                <h5>{about_us_team.name}</h5>
                <p className='text-secondary'>{about_us_team.position}</p>
              </div>
            </div>
          </SwiperSlide>

        ))}

      </Swiper>

    </div>

  )

}

export default AboutUsSlider