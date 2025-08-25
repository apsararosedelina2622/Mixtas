import React from 'react'

import { grid_img } from '../../assets/assets'

const ImgGrid = () => {
  return (

    <>

      <div className="container img-grid my-5">

        <div className="section-1">
          <div className="card card1 border-0 rounded-0">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <img src={grid_img.grid_img1} alt="" height={350} className='w-100' />
              </div>
              <div className="col-12 card-img-overlay d-flex flex-column justify-content-center align-items-end">
                <i>Urban Elegance Where</i>
                <p className='fs-1 m-0 fw-bold'>Where City</p>
                <p className='fs-1 m-0 fw-bold'>Style Meets</p>
                <p className='fs-1 m-0 fw-bold'>Sophistication</p>
                <button className='btn btn-light my-3 px-4 py-2'>Shop Now</button>
              </div>
            </div>
          </div>
        </div>

        <div className="section-2">
          <div className="card card4 border-0 rounded-0">
            <div className="p-3 card-img-overlay">
              <i>Timeless Classics</i>
              <p className='fs-1 m-0 fw-bold'>A Collection of</p>
              <p className='fs-1 m-0 fw-bold'>Wardrobe</p>
              <p className='fs-1 m-0 fw-bold'>Essentials</p>
              <button className='btn btn-light my-3 px-4 py-2'>Shop Now</button>
            </div>
            <img src={grid_img.grid_img2} alt="" className='img-fluid' />
          </div>
        </div>

        <div className="section-3 text-light">
          <div className="card border-0 rounded-0 card2">
            <img src={grid_img.grid_img3} alt="" height={410} className='w-100' />
            <div className="card-img-overlay text-end p-3 d-flex flex-column justify-content-center align-items-end">
              <i>Urban Elegance</i>
              <p className='fs-1 m-0 fw-bold'>Elevate your</p>
              <p className='fs-1 m-0 fw-bold'>Everyday Look</p>
              <button className='btn btn-light my-3 px-4 py-2'>Shop Now</button>
            </div>
          </div>
        </div>

        <div className="section-4 card3 text-light text-center d-flex flex-column align-items-center justify-content-center p-3">
          <p className='fs-1 m-0 fw-bold'>Mastering the Art</p>
          <p className='fs-1 m-0 fw-bold'>of Menswear</p>
          <h1 className='display-1 fw-bold'>50%</h1>
          <button className='btn btn-light my-3 px-4 py-2'>Shop Now</button>
        </div>

      </div>

    </>

  )
}

export default ImgGrid