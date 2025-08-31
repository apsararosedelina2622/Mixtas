import React, { useContext } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

import { Carousel } from 'react-bootstrap'

import { MyContext } from '../../context/ContextProvider'
import { carousel_img, sm_carousel_img } from '../../assets/assets'

const AppCarousel = () => {

  const { navigate } = useContext(MyContext)
  
  return (
    <>

      <div className="container-fluid carousel m-0 p-0 d-lg-flex d-md-flex d-none">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          loop={true}
          speed={1000}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
        >
          {carousel_img.map((carousel_img, index) => (
            <SwiperSlide key={index}>
              <div
                className="d-flex align-items-center justify-content-start w-100"
                style={{
                  backgroundImage: `url(${carousel_img.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '100vh',
                }}
              >
                <div className="text-white position-relative ps-5" style={{ zIndex: 2 }}>
                  <h4 className="my-3 text-dark">NEW ARRIVALS</h4>
                  <h1 className="display-1 fw-bold text-dark">
                    Stylish <br /> Comfort For <br /> Fall Nights
                  </h1>
                  <button className="btn btn-dark px-5 py-3 my-3 c-btn" onClick={() => navigate("/shop")}>Shop Now</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="d-block d-md-none">
        <Carousel style={{ height: "40vh" }} className="overflow-hidden custom-carousel" indicators controls={false} >

          {sm_carousel_img.map((carousel_img, index) => (

            <Carousel.Item key={index} style={{ height: "40vh" }}>
              <img src={carousel_img.img} alt="" className="w-100 h-100 object-fit-cover" />
              <Carousel.Caption className="d-flex align-items-center h-100 justify-content-start text-start ps-3" style={{ top: 0, left: 0 }} >
                <div>
                  <h6 className="text-dark">NEW ARRIVALS</h6>
                  <h3 className="display-5 fw-bold text-dark"> Stylish Comfort <br /> For Fall Nights </h3>
                  <button className="btn btn-dark btn-sm px-3">Shop Now</button>
                </div>
              </Carousel.Caption>
            </Carousel.Item>

          ))}

        </Carousel>
      </div>

    </>
  )
}

export default AppCarousel
