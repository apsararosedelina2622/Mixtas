import React from 'react'

import { Link } from 'react-router-dom'

const OrderTrackingBody = () => {
    return (

        <div className='container'>

            <div className="head text-center my-5">
                <h1 className='display-5'><b>Order Tracking</b></h1>
                <p className='my-4'><Link to={'/'} className='text-decoration-none text-dark'><b> Home </b> </Link><a href="#" className='text-decoration-none text-secondary'>/ Order Tracking </a></p>
            </div>

            <div className='row'>

                <div className="col-3"></div>

                <div className="col-lg-6 col-12">

                    <div>
                        <p className='text-secondary my-5'>To track your order please enter your Order ID in the box below and press the "Track" button. This was given to you on your receipt and in the confirmation email you should have received.</p>
                    </div>

                    <div>
                        <p>Order ID</p>
                        <input type="text" className='w-100 p-2' placeholder='Found in  your order confirmation email.' />
                    </div>

                    <div className='my-4'>
                        <p>Billing email</p>
                        <input type="text" className='w-100 p-2' placeholder='Email used during checkout.' />
                    </div>

                    <button className='btn btn-dark px-4 my-4'>Track</button>

                </div>

                <div className="col-3"></div>

            </div>

        </div>

    )
}

export default OrderTrackingBody