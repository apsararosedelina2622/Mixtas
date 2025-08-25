import React, { useContext } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

import { MyContext } from '../../context/ContextProvider'

import { slider } from '../../assets/assets'

const Slider = () => {

  const { navigate } = useContext(MyContext)

  return (

    <div className='container'>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        loop={true}
        speed={1000}
        spaceBetween={50}
        slidesPerView={5}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          1200: {
            slidesPerView: 5,
          },
          768: {
            slidesPerView: 3,
          },
          320: {
            slidesPerView: 1,
          }
        }}
      >
        {slider.map((slide) => (

          <SwiperSlide onClick={() => { navigate('/shop') }} key={slide.img}>
            <div className='d-flex flex-column my-3 mt-5'>
              <img src={slide.img} alt="" className='w-100' />
              <div className="d-flex justify-content-between my-3 fs-5">
                <p>{slide.desc}</p>
                <img src={slide.icon} alt="" height={30} width={30} />
              </div>
            </div>
          </SwiperSlide>

        ))}

      </Swiper>

    </div>

  )
}

export default Slider