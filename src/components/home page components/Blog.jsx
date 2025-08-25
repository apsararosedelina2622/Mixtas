import React, { useContext } from "react"

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

import { MyContext } from "../../context/ContextProvider"

import { blog } from '../../assets/assets'

const Blog = () => {

  const { navigate } = useContext(MyContext)

  return (

    <div className="container">

      <div className="title my-3 mt-5 text-center">
        <p className="text-secondary">LATEST POSTS</p>
        <h1 className='display-5'><b>Blog & Insights</b></h1>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        loop={true}
        speed={1000}
        spaceBetween={50}
        slidesPerView={3}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          1200: {
            slidesPerView: 3
          },
          768: {
            slidesPerView: 3
          },
          320: {
            slidesPerView: 1
          }
        }}
      >

        {blog.map((blog) => (

          <SwiperSlide onClick={() => { navigate('/blog/' + blog.id) }} key={blog.img}>
            <div className="my-2">
              <div className="blog-img overflow-hidden">
                <img src={blog.img} alt="" className='blogimg w-100' />
              </div>
              <div className="my-2">
                <p className='text-secondary'>{blog.title}</p>
                <p className='fs-5'>{blog.desc}</p>
              </div>
            </div>
          </SwiperSlide>

        ))}

      </Swiper>

    </div>

  )

}

export default Blog