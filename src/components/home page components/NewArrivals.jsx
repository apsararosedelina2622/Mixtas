import React, { useContext } from 'react'
import { Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { MyContext } from '../../context/ContextProvider'

import { product } from '../../assets/assets'

const NewArrivals = () => {

  const { navigate, hoveredIndex, setHoveredIndex, showModal, currentProduct, handleModalToggle, AddToCart, isVisible, WishList, wishListData, cart, ToggleCart } = useContext(MyContext)

  return (
    <>

      <div className='container'>
        <div className="title my-3 mt-5 text-center">
          <p className='text-secondary'>LATEST PRODUCTS</p>
          <h1 className='display-5'><b>New Arrivals</b></h1>
        </div>

        <div className='row'>
          {product.map((new_arr, index) => (new_arr.category === 'New arrival') ?
            (
              <div
                className='col-lg-3 col-md-6 my-3 position-relative'
                key={new_arr.desc}
                onMouseEnter={() => setHoveredIndex(index)}
              >

                <div onClick={() => navigate('/product/' + new_arr.id)}>
                  <div className="position-relative" >
                    <img src={hoveredIndex === index ? new_arr.hover_img : new_arr.img} alt={new_arr.desc} className='w-100' />
                  </div>

                  <div className="mt-3">
                    <p className='text-secondary'>{new_arr.product}</p>
                    <p>{new_arr.desc}</p>
                    <p className='text-secondary'>{new_arr.price}</p>
                  </div>
                </div>

                {hoveredIndex === index && (
                  <div className="position-absolute top-0 end-0 p-2">
                    <div className="icon-wrapper" style={{ animationDelay: "0.3s" }} onClick={() => WishList(new_arr.id)} >
                      <i className={`fa-heart mx-4 my-2 p-2 shadow-sm fs-5 bg-white rounded-circle ${wishListData.some(a => a.id === new_arr.id)
                        ? 'fa-solid text-dark'
                        : 'fa-regular'
                        }`} size={30} />
                    </div>
                    <div className="icon-wrapper" style={{ animationDelay: "0.2s" }}>
                      <i className="fa-solid fa-magnifying-glass text-dark mx-4 my-2 p-2 shadow-sm fs-5 bg-white rounded-circle" size={30} onClick={() => handleModalToggle(new_arr)} />
                    </div>
                    <div className="icon-wrapper mt-2" style={{ animationDelay: "0.1s" }} onClick={() => ToggleCart(new_arr.id)}>
                      <i className={`mx-4 my-2 mt-2 px-2 py-1 shadow-sm fs-5 bg-white rounded-circle bi ${cart.some(a => a.id === new_arr.id)
                        ? 'bi-cart-fill'
                        : 'bi-cart'
                        }`} size={30} />
                    </div>
                  </div>
                )}
              </div>
            ) : ''

          )}
        </div>

      </div>

      {currentProduct && (
        <Modal show={showModal} onHide={handleModalToggle} size='xl'>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            {isVisible && (
              <div className="bg-success text-light bg-opacity-75 d-lg-flex d-md-flex justify-content-between bg-opacity-50 py-3 px-4 my-3">

                <div className="d-flex mt-2">
                  <i className="fa-solid fa-check my-1 mx-3"></i>
                  <p>"{currentProduct?.desc}" has been added to your cart.</p>
                </div>

                <div className="mt-2">
                  <Link to="/cart" className="text-decoration-none text-light border-bottom"> View Cart </Link>
                </div>

              </div>
            )}
            <div className='row'>

              <div className="col-lg-6">
                <img src={currentProduct.img} alt="" className='w-100' />
              </div>

              <div className="col-lg-6">

                <p className='display-6 fw-normal'>{currentProduct.desc}</p>
                <p className='fs-3'>{currentProduct.price}</p>
                <p>A product short description is a concise and brief overview of a product, providing key information to potential customers. Typically, it is a brief summary that highlights the most important features, benefits, and characteristics of the product. The goal is to quickly communicate relevant details to the consumer and entice them to learn more or make a purchase.</p>
                <p>Color : <span className='text-black fw-medium'>Black</span></p>
                <i className='fs-4 mx-1 fa fa-square text-black'></i>
                <i className='fs-4 mx-1 fa fa-square text-primary'></i>
                <i className='fs-4 mx-1 fa fa-square text-secondary'></i>
                <i className='fs-4 mx-1 fa fa-square text-success'></i>
                <i className='fs-4 mx-1 fa fa-square text-danger'></i>
                <i className='fs-4 mx-1 fa fa-square text-warning'></i>

                <div className='d-lg-flex d-md-flex gap-4 my-3 align-items-center'>
                  <div>
                    <button className='btn btn-dark px-lg-4 rounded-1 w-100 my-3 py-2' onClick={() => AddToCart(currentProduct.id)}>Add To Cart</button>
                  </div>
                </div>

                <div onClick={() => WishList(currentProduct.id)} className='d-flex' role='button'>
                  <div>
                    <i className={`fa-heart ${wishListData.some(a => a.id === currentProduct.id)
                      ? 'fa-solid text-danger'
                      : 'fa-regular'
                      }`}></i>
                  </div>
                  <div className='mx-2'>
                    <p>
                      {wishListData.some(a => a.id === currentProduct.id)
                        ? 'Browse wishlist'
                        : 'Add to wishlist'}
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </Modal.Body>
        </Modal>
      )}

    </>
  )
}

export default NewArrivals