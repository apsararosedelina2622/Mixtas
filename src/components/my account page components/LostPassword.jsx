import React from 'react'

import { Link } from 'react-router-dom'

const LostPassword = () => {
  return (
    <div className='container-fluid px-lg-5'>

      <div className='my-5'>
        <p className='my-4'> <Link to={'/'} className='text-decoration-none text-dark'> Home </Link> &gt; <Link to={'/my-account'} className='text-decoration-none text-dark'>  My Account </Link> &gt; Lost Password</p>
        <h1 className='fs-1 display-3'><b>My Account</b></h1>
      </div>

      <div className='row'>

        <div className="col-lg-4 col-md-3"></div>

        <div className="col-lg-4 col-md-6 col-12">

          <p className='text-secondary'>Lost your password? Please enter your username or email address. You will receive a link to create a new password via email.</p>

          <p>Username or email</p>

          <input type="text" className='w-100 py-2 border' />

          <button className='btn btn-dark px-4 my-4 py-2'>Rest Password</button>

        </div>

        <div className="col-lg-4 col-md-3"></div>

      </div>

    </div>
  )
}

export default LostPassword