import React from 'react'

import { assets } from '../../assets/assets'

const Footer = () => {

    return (
        <div className='container-fluid footer text-light mt-4'>

            <div className='row p-5'>

                <div className="col-lg-3 col-md-6 mt-3">
                    <h1>Mixtas</h1>
                    <p>Whether you're a trendsetter, a minimalist, or an adventure at heart, Mixtas has something for everyone. Our diverse range of styles caters to various personas.</p>
                    <div className="d-flex">
                        <i className="border p-3 rounded-circle m-1 fa-brands fa-facebook"></i>
                        <i className="border p-3 rounded-circle m-1 fa-brands fa-x-twitter"></i>
                        <i className="border p-3 rounded-circle m-1 fa-brands fa-instagram"></i>
                        <i className="border p-3 rounded-circle m-1 fa-brands fa-pinterest"></i>
                    </div>
                </div>

                <div className="col-lg-2 col-md-6 mt-3">
                    <h5>About Us</h5>
                    <p>Our Story</p>
                    <p>Mission & Values</p>
                    <p>Meet the Team</p>
                    <p>Sustainablility Efforts</p>
                    <p>Brand Partnerships</p>
                    <p>Influencer Collaborations</p>
                </div>

                <div className="col-lg-2 col-md-6 mt-3">
                    <h5>Accessibility</h5>
                    <p>Accessibility Statement</p>
                    <p>Site Map</p>
                    <p>Web Accessibity Options</p>
                    <p>ADA Compliance</p>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                </div>

                <div className="col-lg-2 col-md-6 mt-3">
                    <h5>Join Our Community</h5>
                    <p>VIP Membership</p>
                    <p>Loyalty Program</p>
                    <p>Customer Reviews</p>
                    <p>Style Forums</p>
                    <p>Job Openings</p>
                    <p>Culture and Values</p>
                </div>

                <div className="col-lg-3 col-12 mt-3">
                    <h4>Let's get in touch</h4>
                    <p>Sign up for our newsletter and receive 10% off your</p>
                    <input type="email" placeholder='Enter your email address' className='w-100 p-2 rounded' />
                </div>

            </div>

            <hr />

            <div className="d-lg-flex d-md-flex justify-content-between px-5 py-1">

                <div>
                    <p>&copy; 2024 Mixtas All rights reserved. Developed By Apsara Rose Delina</p>
                </div>

                <div>
                    <img src={assets.footer_logo} alt="" height={20} />
                </div>

            </div>

        </div>
    )
}

export default Footer