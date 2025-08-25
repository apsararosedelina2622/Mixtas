import React, { useContext } from 'react'

import { Link } from 'react-router-dom'
import NewInStore from './NewInStore'

import { MyContext } from '../../context/ContextProvider'

import { assets } from '../../assets/assets'

const CartList = () => {

    const { cart, quantityIncrement, quantityDecrement, RemoveCart, getCartTotal } = useContext(MyContext)

    return (
        <>

            <div className='container-fluid p-lg-5 p-md-5'>

                <div>
                    <p className='my-4'><Link to={'/'} className='text-decoration-none text-dark'><b> Home </b> </Link> &gt; cart</p>
                    <h1 className='fs-1 display-3'><b>Cart</b></h1>
                </div>

                {
                    cart.length === 0
                        ?
                        <div className='row my-5'>

                            <div className="col-12 my-5">
                                <div className="text-center my-4">
                                    <img src={assets.cart_default_img} alt="" height={95} />
                                    <p className='my-3'>Your cart is currently empty!</p>
                                    <p className='my-3'><span className='mx-4 fs-4'>.</span><span className='mx-4 fs-4'>.</span><span className='mx-4 fs-4'>.</span></p>
                                </div>
                            </div>

                            <NewInStore />

                        </div>
                        :
                        <div className='row my-5'>

                            <div className="col-lg-7 col-12">

                                <div className='border p-3 d-lg-flex d-none justify-content-between'>
                                    <div>
                                        <h6>PRODUCT</h6>
                                    </div>
                                    <div>
                                        <h6>TOTAL</h6>
                                    </div>
                                </div>
                                {cart.map((product, index) => {
                                    return (

                                        <div className='border p-lg-3 p-1 d-flex justify-content-between' key={index}>
                                            <div className='d-flex'>
                                                <div>
                                                    <img src={product.img} alt="" height={80} />
                                                </div>
                                                <div className='mx-lg-3 text-secondary'>
                                                    <h6 className='text-dark'>{product.desc}</h6>
                                                    <p>{product.price}</p>
                                                    <p>A product short description is a concise and brief overview of a product…</p>
                                                    <div className='btn-group rounded'>
                                                        <span className='btn btn-light border fs-5' onClick={() => quantityDecrement(product.id)}>-</span>
                                                        <span className='btn btn-light border text-secondary fs-5 '>{product.quantity}</span>
                                                        <span className='btn btn-light border fs-5' onClick={() => quantityIncrement(product.id)}>+</span>
                                                    </div>
                                                    <Link className='text-secondary ms-2' onClick={() => RemoveCart(product.id)}>Remove item</Link>
                                                </div>
                                            </div>
                                            <div>
                                                <p className='text-secondary'>${(parseFloat(product.price.toString().replace(/[^0-9.]/g, "")) * product.quantity).toFixed(2)}</p>
                                            </div>
                                        </div>
                                    )
                                })}

                            </div>

                            <div className="col-lg-1"></div>

                            <div className="col-lg-4 col-12 my-4">

                                <div className='text-end d-lg-block d-md-block d-none'>
                                    <h6>CART TOTALS</h6>
                                </div>
                                <hr />
                                <div className='my-2'>
                                    <p className='my-3'>Add a coupon</p>
                                </div>
                                <hr />
                                <div className='text-secondary d-flex justify-content-between'>
                                    <div>
                                        <p>Subtotal</p>
                                    </div>
                                    <div>
                                        <p><b>${getCartTotal().toFixed(2)}</b></p>
                                    </div>
                                </div>
                                <hr />
                                <div className='text-secondary d-flex justify-content-between'>
                                    <div>
                                        <h4>Total</h4>
                                    </div>
                                    <div>
                                        <h5><b>${getCartTotal().toFixed(2)}</b></h5>
                                    </div>
                                </div>

                                <button className='btn btn-warning w-100 fs-4 my-3'><i><b><span className='text-primary'>Pay</span><span className='text-info'>Pal</span></b></i></button>
                                <div className="d-flex align-items-center my-3">
                                    <hr className="flex-grow-1" />
                                    <span className="mx-2 text-muted">OR</span>
                                    <hr className="flex-grow-1" />
                                </div>
                                <div className='w-100 bg-dark my-3 text-light text-center p-1'>
                                    <p className='mt-2'>Proceed to Checkout</p>
                                </div>

                            </div>

                        </div>
                }

            </div>

        </>

    )
}

export default CartList