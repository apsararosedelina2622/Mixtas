import React, { useContext } from 'react'

import { MyContext } from '../../context/ContextProvider'

const ImgGrid = () => {

  const { navigate } = useContext(MyContext)

  return (

    <>

      <div className='container cards my-5'>
        <div className='card-1 text-end p-lg-5 p-3'>
          <p className='card-title mt-4 pt-lg-5 pt-3'><i>Urban Elegance</i></p>
          <h1>Where City Style Meets <br /> Sophistication</h1>
          <button onClick={() => navigate('/shop')} className='btn btn-light my-3 py-2 px-4 card-shop-btn'>Shop Now</button>
        </div>

        <div className='card-2 px-5'>
          <p className='card-title mt-5'><i>Urban Elegance</i></p>
          <h1 className='fs-1'>Elevate your <br /> Everyday Look</h1>
          <button onClick={() => navigate('/shop')} className='btn btn-light my-3 py-2 px-4 card-shop-btn'>Shop Now</button>
        </div>

        <div className='card-3 text-center text-white py-5 px-0'>
          <h3 className='mt-5 mt-lg-4'>Mastering the Art of  Menswear</h3>
          <h1 className='display-1 fw-bold card-title'>50%</h1>
          <button onClick={() => navigate('/shop')} className='btn btn-light my-3 py-2 px-4 card-shop-btn'>Shop Now</button>
        </div>

        <div className='card-4 text-center text-white p-5'>
          <p className='card-title'><i>Timeless Classics</i></p>
          <h1>A Collection of <br /> Wardrobe <br /> Essentials</h1>
          <button onClick={() => navigate('/shop')} className='btn btn-light my-3 py-2 px-4 card-shop-btn'>Shop Now</button>
        </div>
      </div>

    </>

  )
}

export default ImgGrid