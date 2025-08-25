import React, { useContext } from 'react'

import { Dropdown, Offcanvas, Badge, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { MyContext } from '../../context/ContextProvider'

import { assets } from '../../assets/assets'

const AppNavbar = () => {

  const { navigate, show, handleClose, handleShow, cartshow, carthandleClose, carthandleShow, searchshow, searchHandleClose, searchHandleShow, loginshow, loginHandleClose, loginHandleShow, registershow, registerHandleClose, registerHandleShow, pageshow, pageHandleClose, pageHandleShow, searchTerm, filteredProducts, handleSearch, cartCount, cart, RemoveCart, wishListCount, getCartTotal } = useContext(MyContext)

  return (
    <>

      <div className="container p-3">

        <div className="row align-items-center my-lg-4">

          <div className="col-auto d-lg-none">
            <p className="navbar-toggler my-md-3 p-2" onClick={handleShow}>
              <span className="navbar-toggler-icon" height={30} width={30}>
                <i className="fa-solid fa-bars"></i>
              </span>
            </p>
          </div>

          <div className="col-lg-4 col-md-2 d-md-block d-none d-lg-block"></div>

          <div className="col-lg-4 col-5 text-center">
            <div>
              <Link to={'/'}><img src={assets.logo} alt="Logo" className="img-fluid mx-3" style={{ maxWidth: '100%', maxHeight: '100px' }} /></Link>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-6">
            <div className="d-flex justify-content-end align-items-lg-start align-items-end mt-lg-4">
              <img src={assets.user_icon} alt="User" height={20} width={20} className="mx-2 my-1" onClick={loginHandleShow} />
              <img src={assets.search_icon} alt="Search" height={25} width={25} className="mx-2 my-lg-1" onClick={searchHandleShow} />
              <Link to={'/wishlist'} className="text-decoration-none text-dark position-relative d-none d-md-inline d-lg-inline">
                <img src={assets.like_icon} alt="Like" height={20} width={20} className="mx-2 my-lg-1 mb-md-1" />
                <Badge className="bg-dark position-absolute top-0 start-100 translate-middle rounded-circle p-1">{wishListCount === 0 ? "" : wishListCount}</Badge>
              </Link>
              <div className="position-relative">
                <img src={assets.bag_icon} alt="Bag" height={28} width={28} className="mx-2" onClick={carthandleShow} />
                <Badge className="bg-dark position-absolute top-0 start-100 translate-middle rounded-circle p-1">{cartCount === 0 ? "" : cartCount}</Badge>
              </div>
            </div>
          </div>

        </div>

      </div>

      <div className="bg-light d-none d-lg-flex justify-content-center gap-5 py-3 sticky-top">
        <Link to={'/'} className="text-decoration-none text-dark">HOME</Link>
        <Link to={'/shop'} className="text-decoration-none text-dark">SHOP</Link>
        <Link className="text-decoration-none text-dark">
          <Dropdown>
            <Dropdown.Toggle as="div" className="text-dark p-0 m-0 custom-dropdown-toggle" id="dropdown-basic">
              PAGES
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item><Link to={'/about-us'} className="text-decoration-none text-dark">About Us</Link></Dropdown.Item>
              <Dropdown.Item><Link to={'/faqs'} className="text-decoration-none text-dark">FAQs</Link></Dropdown.Item>
              <Dropdown.Item><Link to={'/my-account'} className="text-decoration-none text-dark">Account</Link></Dropdown.Item>
              <Dropdown.Item><Link to={'/order-tracking'} className="text-decoration-none text-dark">Order Tracking</Link></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Link>
        <Link className="text-decoration-none text-dark" to={'/blog/1'}>BLOG</Link>
        <Link to={'/contact-us'} className="text-decoration-none text-dark">CONTACT US</Link>
      </div>

      {/* MENU */}

      <Offcanvas show={show} onHide={handleClose} placement="start" className="w-100">

        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <div className="d-flex flex-column">
            <Link to={'/'} className="border-top text-decoration-none text-dark py-2" onClick={handleClose}>HOME</Link>
            <Link to={'/shop'} className="border-top text-decoration-none text-dark py-2" onClick={handleClose}>SHOP</Link>
            <Link className="border-top text-decoration-none text-dark py-2" onClick={pageHandleShow}>PAGES</Link>

            <Offcanvas show={pageshow} onHide={pageHandleClose} placement="end" className="w-100">

              <Offcanvas.Header closeButton>
                <Offcanvas.Title></Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body>
                <div className="d-flex flex-column">

                  <Link to={'/about-us'} className="border-top py-2 text-decoration-none text-dark">About Us</Link>
                  <Link to={'/faqs'} className="border-top py-2 text-decoration-none text-dark">FAQs</Link>
                  <Link to={'/my-account'} className="border-top py-2 text-decoration-none text-dark">Account</Link>
                  <Link to={'/order-tracking'} className="border-top border-bottom py-2 text-decoration-none text-dark">Order Tracking</Link>

                </div>
              </Offcanvas.Body>

            </Offcanvas>

            <Link className="border-top text-decoration-none text-dark py-2" to={'/blog/1'}>BLOG</Link>
            <Link className="border-top border-bottom text-decoration-none text-dark py-2" to={'/contact-us'}>CONTACT US</Link>
          </div>
        </Offcanvas.Body>

      </Offcanvas>

      <Offcanvas show={cartshow} onHide={carthandleClose} placement="end">
        <Offcanvas.Header closeButton className='pt-4'>
          <Offcanvas.Title >SHOPPING CART</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>

          {
            cart.length === 0
              ?
              <div className='container text-center text-secondary my-auto'>
                <i className="fa-solid fa-bag-shopping fa-10x bg-light p-4 rounded-circle"></i>
                <p className='my-3'>No products in the cart.</p>
              </div>
              :
              <>
                <hr className='m-0' />
                <div className='my-3 d-flex flex-column justify-content-between' style={{ minHeight: '80vh' }}>
                  <div>

                    {
                      cart.map((value, index) => {
                        return (
                          <div className='row p-1 mt-3 my-auto' key={index}>

                            <div className="col-3">
                              <img src={value.img} className="rounded" height={95} alt="Product Image" />
                            </div>

                            <div className="col-7">
                              <p className='mx-2 m-0'>{value.desc}</p>
                              <h6 className='mx-2'>${value.price}</h6>
                              <p className='mx-2 m-0'>Quantity : {value.quantity}</p>
                            </div>

                            <div className="col-2 my-auto">
                              <i class="fa-regular fa-circle-xmark" onClick={() => RemoveCart(value.id)}></i>
                            </div>

                          </div>
                        )
                      })
                    }

                  </div>

                  <div>
                    <div className="d-flex justify-content-between my-2">
                      <b>Subtotal:</b>
                      <p className='text-secondary'>${getCartTotal().toFixed(2)}</p>
                    </div>
                    <hr />
                    <div className="d-flex gap-2">
                      <button className="btn border w-50 py-3" onClick={() => navigate('/cart')}>View Cart</button>
                      <button className="btn btn-dark w-50 bg-black">Checkout</button>
                    </div>
                  </div>
                </div>
              </>
          }

        </Offcanvas.Body>
      </Offcanvas>

      {/* SEARCH */}

      <Offcanvas show={searchshow} onHide={searchHandleClose} className="h-100" placement="top">
        <Offcanvas.Header closeButton className="m-lg-5 m-md-3 m-2">
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <div className='container'>
            <div className="row justify-content-center mb-4">
              <div className="col-lg-2"></div>

              <div className="col-lg-8">

                <div className="d-flex align-items-center border-bottom border-dark">
                  <input type="text" value={searchTerm} onChange={handleSearch} className="w-100 border-0 display-5 fs-3 py-4" placeholder="Search Products" style={{ outline: "none" }} />
                  <div className="ms-2 text-secondary">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </div>
                </div>

                {filteredProducts?.length > 0 && <p className='text-secondary my-3'>Search Result</p>}

                {searchTerm.trim() !== "" && (
                  <div className='row'>
                    {filteredProducts.length > 0 ? (
                      filteredProducts.map((item) => (
                        <div key={item.id} className="mb-4 col-lg-4 col-md-6 col-12">
                          <Card className="h-100 border-0 shadow-sm" onClick={() => navigate('/product/' + item.id)}>
                            <div className="overflow-hidden">
                              <Card.Img variant="top" src={item.img} className="img-fluid hover-zoom" alt={item.desc} />
                            </div>
                            <Card.Body>
                              <Card.Text className="text-secondary">{item.product}</Card.Text>
                              <Card.Text>{item.desc}</Card.Text>
                              <Card.Text className="text-secondary">{item.price}</Card.Text>
                            </Card.Body>
                          </Card>
                        </div>
                      ))
                    ) : (
                      <div className="text-center fs-5 my-3 text-muted">No results found</div>
                    )}
                  </div>
                )}

              </div>

              <div className="col-lg-2"></div>
            </div>

          </div>
        </Offcanvas.Body>
      </Offcanvas>

      {/* LOGIN */}

      <Offcanvas show={loginshow} onHide={loginHandleClose} placement='end'>
        <Offcanvas.Header closeButton className='m-1'>
          <Offcanvas.Title>LOGIN</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>

          <div className='container'>
            <div className='row'>

              <form action="" className='my-4'>

                <div>
                  <input type="text" placeholder='Username or email address' className='w-100 py-2 px-3 border' />
                </div>

                <div>
                  <input type="text" placeholder='Password' className='w-100 py-2 px-3 my-4 border' />
                </div>

                <div>
                  <input type="checkbox" />
                  <label htmlFor="" className='mx-3'>Remember me</label>
                </div>

                <div>
                  <button className='btn btn-dark my-4 py-2 w-100'>Log In</button>
                </div>

                <div>
                  <p onClick={() => navigate('/my-account/lost-password')}><u>Lost your password?</u></p>
                </div>

                <div className='text-center text-secondary'>
                  <p>Not a member?<span className='text-dark mx-1' onClick={registerHandleShow}><u>Register</u></span></p>
                </div>

              </form>

            </div>
          </div>

        </Offcanvas.Body>
      </Offcanvas>

      {/* REGISTER */}

      <Offcanvas show={registershow} onHide={registerHandleClose} placement='end'>
        <Offcanvas.Header closeButton className='m-1'>
          <Offcanvas.Title>Register</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>

          <div className='container'>
            <div className='row'>

              <form action="" className='my-4'>

                <div>
                  <input type="text" placeholder='Email address' className='w-100 py-2 px-3 border' />
                </div>

                <div className='text-secondary my-3'>
                  <p>A password will be sent to your email address.</p>
                </div>

                <div className='text-secondary my-4'>
                  <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <u className='text-dark' >privacy policy</u>.</p>
                </div>

                <div>
                  <button className='btn btn-dark my-4 py-2 w-100'>Register</button>
                </div>

                <div className='text-center text-secondary'>
                  <p>Already a member?<span className='text-dark mx-1' onClick={loginHandleShow}><u>Login</u></span></p>
                </div>

              </form>

            </div>
          </div>

        </Offcanvas.Body>
      </Offcanvas>

    </>
  )
}

export default AppNavbar