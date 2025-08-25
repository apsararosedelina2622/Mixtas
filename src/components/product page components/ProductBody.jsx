import React, { useContext, useState } from 'react'

import { Collapse } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'

import { MyContext } from '../../context/ContextProvider'

import { product, product_body } from '../../assets/assets'

const ProductBody = () => {

  const { desc_visible, setDescVisible, add_info_visible, setAdd_info_visible, review, setReview, isVisible, AddToCart, wishListData, WishList } = useContext(MyContext)


  let { id } = useParams()
  const selectedProduct = product.find((e) => e.id === Number(id))

  const [currentImage, setCurrentImage] = useState(selectedProduct?.img)

  return (
    <div className='container'>

      {isVisible && (
        <div className="bg-success text-light bg-opacity-75 d-lg-flex d-md-flex justify-content-between bg-opacity-50 py-3 px-4 mt-5">

          <div className="d-flex mt-2">
            <i className="fa-solid fa-check my-1 mx-3"></i>
            <p>"{selectedProduct?.desc}" has been added to your cart.</p>
          </div>

          <div className="mt-2">
            <Link to="/cart" className="text-decoration-none text-light border-bottom"> View Cart </Link>
          </div>

        </div>
      )}

      <div className='row'>

        <div className="col-12 mt-lg-5">

          <p className='my-4'>
            <Link to='/' className='text-decoration-none text-dark'><b> Home</b></Link> /
            <Link to='/shop' className='text-decoration-none text-dark'><b> Shop</b></Link> /
            {selectedProduct?.desc}
          </p>

        </div>

        <div className="col-lg-6 col-12">

          <img src={currentImage} alt="main product" className='w-100' />

          <div className="d-flex justify-content-between">

            {product_body.map((pro_body, index) => (
              <img key={index} src={pro_body.img} className={`mt-2 pro_img ${currentImage === pro_body.img ? 'SelectedImage' : ''}`} onClick={() => setCurrentImage(pro_body.img)} />
            ))}

          </div>

        </div>

        <div className="col-lg-6 col-12">

          <h1 className='display-5 f-bold'><b>{selectedProduct?.desc}</b></h1>
          <h2 className='text-secondary'>{selectedProduct?.price}</h2>

          <hr />

          <p className='text-secondary'>
            A product short description is a concise and brief overview of a product, providing key information to potential customers. Typically, it is a brief summary that highlights the most important features, benefits, and characteristics of the product. The goal is to quickly communicate relevant details to the consumer and entice them to learn more or make a purchase.          </p>

          <div className="d-lg-flex d-md-flex gap-4 align-items-center">
            <div>
              <button className='btn btn-dark px-lg-4 w-100 my-3 py-2' onClick={() => AddToCart(selectedProduct?.id)}>Add to Cart</button>
            </div>
          </div>

          <div onClick={() => WishList(selectedProduct.id)} className='d-flex' role='button'>
            <div>
              <i className={`fa-heart ${wishListData.some(a => a.id === selectedProduct.id)
                ? 'fa-solid text-danger'
                : 'fa-regular'
                }`}></i>
            </div>
            <div className='mx-2'>
              <p>
                {wishListData.some(a => a.id === selectedProduct.id)
                  ? 'Browse wishlist'
                  : 'Add to wishlist'}
              </p>
            </div>

          </div>

          <div className="d-flex text-secondary gap-5 mx-4">

            <div>
              <p>Categories</p>
              <p>Tags</p>
            </div>
            <div>
              <p>{selectedProduct?.product}</p>
              <p>clothing, etc, fashion, m12, men, products</p>
            </div>

          </div>

          <div className='d-flex justify-content-between description my-3' aria-controls="example-collapse-text" onClick={() => setDescVisible(!desc_visible)} >
            <div>
              <h5>Description</h5>
            </div>
            <div>
              <h5 className='fs-4' >{desc_visible ? "_" : "+"}</h5>
            </div>
          </div>

          <hr />

          <Collapse in={desc_visible}>
            <div id="example-collapse-text">
              <p className='text-secondary my-5'>In WooCommerce, a product description refers to the written content that provides information about a specific product listed on an online store. It serves to inform potential customers about the features, benefits, specifications, and other relevant details of the product. A well-crafted product description can play a crucial role in influencing a customer's purchasing decision.</p>
              <p className='text-secondary my-5'>In WooCommerce, you can create and manage product descriptions through the WordPress dashboard. Each product has its own page where you can input and format the description, add images, set prices, and manage other product-related details. Effective product descriptions are essential for e-commerce success as they help customers make informed decisions and contribute to a positive shopping experience.</p>
            </div>
          </Collapse>

          <div className='d-flex justify-content-between description' aria-controls="example-collapse-text" onClick={() => setAdd_info_visible(!add_info_visible)} >
            <div>
              <h5>Additional information</h5>
            </div>
            <div>
              <h5 className='fs-4' >{add_info_visible ? "_" : "+"}</h5>
            </div>
          </div>

          <hr />

          <Collapse in={add_info_visible}>
            <div id="example-collapse-text">
              <div className="d-flex my-5">
                <div>
                  <p>Color</p>
                  <p>Size</p>
                </div>
                <div className='mx-5 text-secondary'>
                  <p>Blue, Gray, Green, Red, Yellow</p>
                  <p>Large, Medium, Small</p>
                </div>
              </div>
            </div>
          </Collapse>

          <div className='d-flex justify-content-between description' aria-controls="example-collapse-text" onClick={() => setReview(!review)} >
            <div>
              <h5>Reviews (0)</h5>
            </div>
            <div>
              <h5 className='fs-4'>{review ? "_" : "+"}</h5>
            </div>
          </div>

          <hr />

          <Collapse in={review}>
            <div id="example-collapse-text">
              <div className="review py-4">

                <h4>Reviews</h4>
                <p className='text-secondary'>There are no reviews yet.</p>

                <h4 className='mt-5'>Be the first to review “Dime Classic Remastered Hoodie, black”</h4>

                <p className='text-secondary mt-5'>Your email address will not be published. Required fields are marked *</p>

                <p className='text-secondary'>Your rating *</p>

                <div className="d-flex text-secondary ratings">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>

                <p className='mt-5'>Your review*</p>

                <textarea name="" rows={9} id="" className='w-100'></textarea>

                <div className="row my-3">
                  <div className='col-lg-6 col-md-6'>
                    <p>Name*</p>
                    <input type="text" className='w-100 p-2' />
                  </div>
                  <div className='col-lg-6 col-md-6'>
                    <p>Email*</p>
                    <input type="email" className='w-100 p-2' />
                  </div>
                </div>

                <input type="checkbox" />
                <label htmlFor="" className='mx-3 text-secondary'>Save my name, email, and website in this browser for the next time I comment.</label>

                <button className='btn btn-dark px-5 py-2 my-5'>Submit</button>

              </div>
            </div>
          </Collapse>

          <div className="d-lg-flex d-md-flex my-4">
            <div className='d-flex mx-2'>
              <i className="fa-brands mt-1 mx-1 fa-facebook"></i>
              <p>Facebook</p>
            </div>
            <div className='d-flex mx-2'>
              <i className="fa-brands mt-1 mx-1 fa-x-twitter"></i>
              <p>Twitter</p>
            </div>
            <div className='d-flex mx-2'>
              <i className="fa-brands mt-1 mx-1 fa-pinterest"></i>
              <p>Pinterest</p>
            </div>
            <div className='d-flex mx-2'>
              <i className="fa-brands mt-1 mx-1 fa-whatsapp"></i>
              <p>WhatsApp</p>
            </div>
          </div>

        </div>
      </div>
    </div >
  )
}
export default ProductBody
