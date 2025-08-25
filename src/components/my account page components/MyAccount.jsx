import React from 'react'

import { Link } from 'react-router-dom'

const MyAccount = () => {
  return (
    <div className='container-fluid px-5'>

      <div className='mt-5'>
        <p className='my-4'><Link to={'/'} className='text-decoration-none text-dark'> Home </Link> &gt; My Account</p>
        <h1 className='fs-1 display-3'><b>My Account</b></h1>
      </div>

      <div className='row'>

        <div className="col-lg-5 col-12">

          <form action="">

            <div className='my-3'>
              <h1 className='fs-3'>Login</h1>

              <input type="email" className='w-100 p-2 my-3' placeholder='Username or email address' />
              <input type="password" className='w-100 p-2 my-3' placeholder='Password' />

              <input type="checkbox" />
              <label htmlFor="" className='mx-3 text-secondary'>Remember me</label>
            </div>

            <button className='btn btn-dark w-100 my-2' type='submit'>Log In</button>

          </form>

          <Link to={'/my-account/lost-password'} className='text-decoration-none text-dark border-bottom border-dark'>Lost your password?</Link>

        </div>

        <div className="col-lg-2"></div>

        <div className="col-lg-5 col-12">

          <form action="">

            <div className='my-3'>
              <h1 className='fs-3'>Register</h1>

              <input type="email" className='w-100 p-2 my-3' placeholder='Email address' />

              <p className='text-secondary'>A password will be sent to your email address.</p>

              <p className='text-secondary my-3'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our<Link className='text-dark'> privacy policy </Link>.</p>
            </div>

            <button className='btn btn-dark my-2 px-4' type='submit'>Register</button>

          </form>


        </div>

      </div>

    </div>
  )
}

export default MyAccount