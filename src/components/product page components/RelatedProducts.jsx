import React, { useContext } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

import { Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { MyContext } from '../../context/ContextProvider'

import { product } from '../../assets/assets'

const RelatedProducts = () => {

  const { navigate, handleRelatedProductModalToggle, setRelatedProductHoveredIndex, relatedProductHoveredIndex, currentRelatedProduct, relatedProductShowModal, LikeBtn, setLikeBtn, AddToCart, isVisible, wishListData, WishList, ToggleCart, cart } = useContext(MyContext)

  return (
    <>

      <div className='container'>
        <div className="title my-4 text-center">
          <h1 className='display-5'><b>Related Products</b></h1>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          loop={true}
          speed={500}
          spaceBetween={50}
          slidesPerView={4}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            1200: { slidesPerView: 4 },
            768: { slidesPerView: 2 },
            320: { slidesPerView: 1 }
          }}
        >

          {product.map((product, index) => (
            <SwiperSlide
              key={product.id}
              onMouseEnter={() => setRelatedProductHoveredIndex(index)}
            >
              <div className='d-flex flex-column my-3 position-relative' onClick={() => { navigate('/product/' + product.id) }}>
                <img src={relatedProductHoveredIndex === index ? product.hover_img : product.img} alt={product.desc} className='w-100' />

                <div className="mt-3">
                  <p className='text-secondary'>{product.product}</p>
                  <p>{product.desc}</p>
                  <p className='text-secondary'>{product.price}</p>
                </div>
              </div>

              {relatedProductHoveredIndex === index && (
                <div className="position-absolute top-0 end-0 p-3 d-flex flex-column">
                  <div className="icon-wrapper" style={{ animationDelay: "0.3s" }} onClick={() => WishList(product.id)}>
                    <i className={`fa-heart mx-2 my-2 p-2 shadow-sm fs-5 bg-white rounded-circle ${wishListData.some(a => a.id === product.id)
                      ? 'fa-solid text-dark'
                      : 'fa-regular'
                      }`} size={30} />
                  </div>
                  <div className="icon-wrapper" style={{ animationDelay: "0.2s" }}>
                    <i className="fa-solid fa-magnifying-glass text-dark mx-2 my-2 p-2 shadow-sm fs-5 bg-white rounded-circle" onClick={() => handleRelatedProductModalToggle(product)} />
                  </div>
                  <div className="icon-wrapper mt-2" style={{ animationDelay: "0.1s" }} onClick={() => ToggleCart(product.id)}>
                    <i className={`mx-2 my-2 px-2 py-1 shadow-sm fs-5 bg-white rounded-circle bi ${cart.some(a => a.id === product.id)
                      ? 'bi-cart-fill'
                      : 'bi-cart'
                      }`} size={30} />
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}

        </Swiper>
      </div>

      {currentRelatedProduct && (
        <Modal show={relatedProductShowModal} onHide={handleRelatedProductModalToggle} size="xl">
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            {isVisible && (
              <div className="bg-success text-light bg-opacity-75 d-lg-flex d-md-flex justify-content-between bg-opacity-50 py-3 px-4 my-3">

                <div className="d-flex mt-2">
                  <i className="fa-solid fa-check my-1 mx-3"></i>
                  <p>"{currentRelatedProduct?.desc}" has been added to your cart.</p>
                </div>

                <div className="mt-2">
                  <Link to="/cart" className="text-decoration-none text-light border-bottom"> View Cart </Link>
                </div>

              </div>
            )}
            <div className='row'>

              <div className="col-lg-6">
                <img src={currentRelatedProduct.img} alt="" className='w-100' />
              </div>

              <div className="col-lg-6">

                <p className='display-6 fw-normal'>{currentRelatedProduct.desc}</p>
                <p className='fs-3'>{currentRelatedProduct.price}</p>
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
                    <button className='btn btn-dark px-lg-4 rounded-1 w-100 my-3 py-2' onClick={() => AddToCart(currentRelatedProduct.id)}>Add To Cart</button>
                  </div>
                </div>

                <div onClick={() => WishList(currentRelatedProduct.id)} className='d-flex' role='button'>
                  <div>
                    <i className={`fa-heart ${wishListData.some(a => a.id === currentRelatedProduct.id)
                      ? 'fa-solid text-danger'
                      : 'fa-regular'
                      }`}></i>
                  </div>
                  <div className='mx-2'>
                    <p>
                      {wishListData.some(a => a.id === currentRelatedProduct.id)
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

export default RelatedProducts
