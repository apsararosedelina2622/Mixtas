import React, { useContext } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

import { Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { MyContext } from '../../context/ContextProvider'
import { product } from '../../assets/assets'


const PopularProducts = () => {

  const { navigate, popularHoveredIndex, setPopularHoveredIndex, popularShowModal, popularCurrentProduct, handlePopularModalToggle, WishList, wishListData, AddToCart, isVisible, cart, ToggleCart } = useContext(MyContext)

  return (
    <>

      <div className='container'>
        <div className="title my-3 text-center">
          <p className="text-secondary">TOP PRODUCTS</p>
          <h1 className="display-5">
            <b>Popular Products</b>
          </h1>
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
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
            320: {
              slidesPerView: 1,
            },
          }}
        >
          {product.map((product, index) => (product.category === 'Popular') ? (
            <SwiperSlide
              key={product.img}
              onMouseEnter={() => setPopularHoveredIndex(index)}
              onMouseLeave={() => setPopularHoveredIndex(null)}
              className="position-relative"
            >
              <div className="d-flex flex-column my-3" onClick={() => { navigate('/product/' + product.id) }}>
                <div>
                  <img src={popularHoveredIndex === index ? product.hover_img : product.img}
                    alt={product.desc} className="w-100" />
                </div>
                <div className="my-1">
                  <p className="text-secondary">{product.product}</p>
                  <p>{product.desc}</p>
                  <p className="text-secondary">{product.price}</p>
                </div>
              </div>

              {popularHoveredIndex === index && (
                <div className="position-absolute top-0 end-0 p-2">
                  <div role='button' className="icon-wrapper mt-4 me-3" style={{ animationDelay: "0.3s" }} onClick={() => WishList(product.id)}>
                    <i className={`bi p-3 d-flex justify-content-center fs-5 shadow bg-white rounded-circle ${wishListData.some(a => a.id === product.id)
                      ? 'bi-suit-heart-fill text-dark'
                      : 'bi-suit-heart'
                      }`} size={30} />
                  </div>
                  <div role='button' className="icon-wrapper mt-2 me-3" style={{ animationDelay: "0.2s" }}>
                    <i className='bi p-3 d-flex justify-content-center fs-5 bi-search text-dark shadow bg-white rounded-circle'
                      onClick={() => handlePopularModalToggle(product)} />
                  </div>
                  <div role='button' className="icon-wrapper mt-2 me-3" style={{ animationDelay: "0.1s" }} onClick={() => ToggleCart(product.id)}>
                    <i className={`bi p-3 d-flex justify-content-center fs-5 shadow bg-white rounded-circle ${cart.some(a => a.id === product.id)
                      ? 'bi-cart-fill'
                      : 'bi-cart'
                      }`} size={30} />
                  </div>
                </div>
              )}

            </SwiperSlide>
          ) : '')}
        </Swiper>

        <div onClick={() => navigate('/shop')} className="text-center">
          <button className="btn btn-light border-dark px-4 show_more_btn">
            Show More Products
          </button>
        </div>
      </div>

      {popularCurrentProduct && (
        <Modal show={popularShowModal} onHide={handlePopularModalToggle} size="xl" centered>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            {isVisible && (
              <div className="bg-success text-light bg-opacity-75 d-lg-flex d-md-flex justify-content-between bg-opacity-50 py-3 px-4 my-3">

                <div className="d-flex mt-2">
                  <i className="fa-solid fa-check my-1 mx-3"></i>
                  <p>"{popularCurrentProduct?.desc}" has been added to your cart.</p>
                </div>

                <div className="mt-2">
                  <Link to="/cart" className="text-decoration-none text-light border-bottom"> View Cart </Link>
                </div>

              </div>
            )}
            <div className='row'>

              <div className="col-lg-6">
                <img src={popularCurrentProduct.img} alt="" className='w-100' />
              </div>

              <div className="col-lg-6">

                <p className='display-6 fw-normal'>{popularCurrentProduct.desc}</p>
                <p className='fs-3'>{popularCurrentProduct.price}</p>
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
                    <button className='btn btn-dark px-lg-4 rounded-1 w-100 my-3 py-2' onClick={() => AddToCart(popularCurrentProduct.id)}>Add To Cart</button>
                  </div>
                </div>

                <div onClick={() => WishList(popularCurrentProduct.id)} className='d-flex' role='button'>
                  <div>
                    <i className={`bi fs-5 ${wishListData.some(a => a.id === popularCurrentProduct.id)
                      ? 'bi-suit-heart-fill text-danger'
                      : 'bi-suit-heart'
                      }`}></i>
                  </div>
                  <div className='mx-2 my-1'>
                    <p>
                      {wishListData.some(a => a.id === popularCurrentProduct.id)
                        ? 'Remove from Wishlist'
                        : 'Add to Wishlist'}
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

export default PopularProducts