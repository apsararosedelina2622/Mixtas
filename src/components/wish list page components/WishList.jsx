import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { MyContext } from '../../context/ContextProvider'

import { assets } from '../../assets/assets'

const WishList = () => {

  const { wishListData, RemoveWishListData } = useContext(MyContext)

  return (

    <div className='container-fluid px-lg-5'>

      <div className='my-5'>
        <p className='my-4'><Link to={'/'} className='text-decoration-none text-dark'><b> Home </b> </Link> &gt; cart</p>
        <h1 className='fs-1 display-3'><b>Wishlist</b></h1>
      </div>

      {
        wishListData.length === 0
          ?
          <div className="col-12 my-5">
            <div className="text-center my-4">
              <img src={assets.wish_list_default_img} alt="" height={75} />
              <p className='text-secondary my-4'>No products added to the wishlist</p>
            </div>
          </div>
          :
          wishListData.map((value, index) => {
            return (
              <div className='row my-2' key={index}>

                <div className="col-6">

                  <div className="d-flex justify-content-between">
                    <div className="d-flex align-items-center">
                      <p className='fs-3 m-lg-3' onClick={() => RemoveWishListData(value.id)}>&times;</p>
                      <img src={value.img} alt="" className='d-none d-lg-block d-md-block mx-2' height={80} />
                    </div>
                    <div className='my-lg-4 py-md-2'>
                      <p>{value.desc}</p>
                    </div>
                  </div>

                </div>

                <div className="col-6">

                  <div className="d-flex justify-content-between">
                    <div className="d-flex m-lg-4 text-secondary">
                      <p className='mx-lg-3 py-md-2'>${value.price}</p>
                      <p className='d-none d-lg-block my-lg-2'>IN STOCK</p>
                    </div>
                    <div className='my-lg-2'>
                      <img src={assets.bag_icon} alt="" height={50} />
                    </div>
                  </div>

                </div>

              </div>
            )
          })
      }

      <div>

        <p className='display-5 fs-4'><b>Share on:</b></p>

        <div className="d-flex">
          <i className="p-2 text-light mx-1 bg-primary fa-brands fa-facebook"></i>
          <i className="p-2 text-light mx-1 bg-info fa-brands fa-x-twitter"></i>
          <i className="p-2 text-light mx-1 bg-danger fa-brands fa-pinterest"></i>
          <i className="p-2 text-light mx-1 bg-warning fa-regular fa-envelope"></i>
          <i className="p-2 text-light mx-1 bg-success fa-brands fa-whatsapp"></i>
        </div>

      </div>

    </div>

  )
}

export default WishList