import React, { useContext } from 'react'

import { Collapse, Modal } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown'
import { Link } from 'react-router-dom'

import { MyContext } from '../../context/ContextProvider'

import { product } from '../../assets/assets'

const ShopBody = () => {

    const { navigate, pro_category, setPro_category, price_div, setPrice_div, color_div, setColor_div, size_div, setSize_div, tag_div, setTag_div, counts, values, currentShopProduct, handleShopModalToggle, ShopShowModal, shopHoveredIndex, setShopHoveredIndex, isVisible, AddToCart, WishList, wishListData, ToggleCart, cart } = useContext(MyContext)

    return (
        <>
            <div className='container'>

                <div className="head text-center my-5">
                    <h1 className='display-5'><b>Shop</b></h1>
                    <p className='my-4'><Link to={'/'} className='text-decoration-none text-dark'><b> Home </b> </Link><a href="#" className='text-decoration-none text-secondary'>/ Shop </a></p>
                </div>

                <div className='row'>

                    <div className="col-lg-3 col-md-none">

                        <div className="col-12">

                            <div className='d-flex justify-content-between pt-3 px-3 border' onClick={() => setPro_category(!pro_category)}>
                                <h6>Product Categories</h6>
                                <p>{pro_category ? <i className="fa-solid fa-angle-down my-1"></i> : <i className="fa-solid fa-angle-up my-1"></i>}</p>
                            </div>

                            <Collapse in={pro_category}>
                                <div>
                                    <div className='text-secondary border py-3'>
                                        {values.map((e, index) => {
                                            return (
                                                <div className='d-flex justify-content-between px-3' key={index}>
                                                    <p className='shop_filter'><i className="fa-solid fa-chevron-right mx-2"></i>{e}</p>
                                                    <p>{counts[index]}</p>
                                                </div>
                                            )
                                        })}


                                    </div>
                                </div>
                            </Collapse>



                        </div>

                        <div className="col-12 my-4">

                            <div className='d-flex justify-content-between pt-3 px-3 border' onClick={() => setPrice_div(!price_div)}>
                                <h6>Price</h6>
                                <p>{price_div ? <i className="fa-solid fa-angle-down my-1"></i> : <i className="fa-solid fa-angle-up my-1"></i>}</p>
                            </div>

                            <Collapse in={price_div}>
                                <div>
                                    <div className='text-secondary border py-3'>
                                        <div className='d-flex justify-content-between px-3'>
                                            <p className='shop_filter'>$50-$100</p>
                                        </div>
                                        <div className='d-flex justify-content-between px-3'>
                                            <p className='shop_filter'>$100-$150</p>
                                        </div>
                                        <div className='d-flex justify-content-between px-3'>
                                            <p className='shop_filter'>$150-$200</p>
                                        </div>
                                        <div className='d-flex justify-content-between px-3'>
                                            <p className='shop_filter'>$200-$250</p>
                                        </div>
                                        <div className='d-flex justify-content-between px-3'>
                                            <p className='shop_filter'>$250-$300</p>
                                        </div>
                                        <div className='d-flex justify-content-between px-3'>
                                            <p className='shop_filter'>$1-$50</p>
                                        </div>
                                    </div>
                                </div>
                            </Collapse>

                        </div>

                        <div className="col-12">

                            <div className='d-flex justify-content-between pt-3 px-3 border' onClick={() => setColor_div(!color_div)}>
                                <h6>Color</h6>
                                <p>{color_div ? <i className="fa-solid fa-angle-down my-1"></i> : <i className="fa-solid fa-angle-up my-1"></i>}</p>
                            </div>

                            <Collapse in={color_div}>
                                <div>
                                    <div className='text-secondary border py-3'>
                                        <div className='d-flex justify-content-between px-3'>
                                            <p className='shop_filter'><i className="fa-solid fa-circle mx-2 text-primary"></i>Blue</p>
                                            <p>(46)</p>
                                        </div>
                                        <div className='d-flex justify-content-between px-3'>
                                            <p className='shop_filter'><i className="fa-solid fa-circle mx-2 text-secondary"></i>Gray</p>
                                            <p>(46)</p>
                                        </div>
                                        <div className='d-flex justify-content-between px-3'>
                                            <p className='shop_filter'><i className="fa-solid fa-circle mx-2 text-success"></i>Green</p>
                                            <p>(46)</p>
                                        </div>
                                        <div className='d-flex justify-content-between px-3'>
                                            <p className='shop_filter'><i className="fa-solid fa-circle mx-2 text-danger"></i>Red</p>
                                            <p>(46)</p>
                                        </div>
                                        <div className='d-flex justify-content-between px-3'>
                                            <p className='shop_filter'><i className="fa-solid fa-circle mx-2 text-warning"></i>Yellow</p>
                                            <p>(46)</p>
                                        </div>
                                    </div>
                                </div>
                            </Collapse>

                        </div>

                        <div className="col-12 my-4">

                            <div className='d-flex justify-content-between pt-3 px-3 border' onClick={() => setSize_div(!size_div)}>
                                <h6>Size</h6>
                                <p>{size_div ? <i className="fa-solid fa-angle-down my-1"></i> : <i className="fa-solid fa-angle-up my-1"></i>}</p>
                            </div>

                            <Collapse in={size_div}>
                                <div>
                                    <div className='text-secondary border py-3'>
                                        <div className='d-flex justify-content-between px-3'>
                                            <p className='shop_filter'>Large</p>
                                            <p>(46)</p>
                                        </div>
                                        <div className='d-flex justify-content-between px-3'>
                                            <p className='shop_filter'>Medium</p>
                                            <p>(46)</p>
                                        </div>
                                        <div className='d-flex justify-content-between px-3'>
                                            <p className='shop_filter'>Small</p>
                                            <p>(46)</p>
                                        </div>
                                    </div>
                                </div>
                            </Collapse>

                        </div>

                        <div className="col-12">

                            <div className='d-flex justify-content-between pt-3 px-3 border' onClick={() => setTag_div(!tag_div)}>
                                <h6>Tags</h6>
                                <p>{tag_div ? <i className="fa-solid fa-angle-down my-1"></i> : <i className="fa-solid fa-angle-up my-1"></i>}</p>
                            </div>

                            <Collapse in={tag_div}>
                                <div>
                                    <div className='border'>
                                        <div className='d-flex'>
                                            <button className='btn m-1 tagbtn'>Clothing</button>
                                            <button className='btn m-1 tagbtn'>Etc</button>
                                            <button className='btn m-1 tagbtn'>Fashion</button>
                                            <button className='btn m-1 tagbtn'>M11</button>
                                        </div>
                                        <div className='d-flex'>
                                            <button className='btn m-1 tagbtn'>M12</button>
                                            <button className='btn m-1 tagbtn'>M31</button>
                                            <button className='btn m-1 tagbtn'>M32</button>
                                            <button className='btn m-1 tagbtn'>M41</button>
                                        </div>
                                        <div className='d-flex'>
                                            <button className='btn m-1 tagbtn'>M71</button>
                                            <button className='btn m-1 tagbtn'>M72</button>
                                            <button className='btn m-1 tagbtn'>M81</button>
                                            <button className='btn m-1 tagbtn'>Men</button>
                                        </div>
                                        <div className='d-flex'>
                                            <button className='btn m-1 tagbtn'>Product</button>
                                            <button className='btn m-1 tagbtn'>Women</button>
                                        </div>
                                    </div>
                                </div>
                            </Collapse>

                        </div>

                    </div>

                    <div className="col-lg-9 my-md-3 my-3">

                        <div className="d-flex justify-content-between">

                            <div>
                                <p className='text-secondary'>Showing 1-12 of 47 results</p>
                            </div>

                            <div className="d-lg-flex d-md-flex d-none">

                                <div className="d-flex mt-2 mx-2">
                                    <p className='mx-1'>Show</p>
                                    <p className='mx-1'>12</p>
                                    <p className='mx-1'>15</p>
                                    <p className='mx-1'>30</p>
                                </div>

                                <Dropdown>
                                    <Dropdown.Toggle variant="none" className='border' id="dropdown-basic">
                                        Default sorting
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="" className='dropdown_Item'>Default sorting</Dropdown.Item>
                                        <Dropdown.Item href="" className='dropdown_Item'>Sort by popularity</Dropdown.Item>
                                        <Dropdown.Item href="" className='dropdown_Item'>Sort by average raring</Dropdown.Item>
                                        <Dropdown.Item href="" className='dropdown_Item'>Sort by latest</Dropdown.Item>
                                        <Dropdown.Item href="" className='dropdown_Item'>Sort by price: low to high</Dropdown.Item>
                                        <Dropdown.Item href="" className='dropdown_Item'>Sort by price: high to low</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                                <div>
                                    <i className="fa-solid fa-table-cells-large border mx-3 p-2 text-light bg-dark"></i>
                                </div>

                                <div>
                                    <i className="fa-solid fa-list border p-2"></i>
                                </div>

                            </div>

                        </div>

                        <div className='row'>

                            {product.map((new_arr, index) => (
                                new_arr.category === 'shop' && (
                                    <div
                                        className='col-lg-4 col-md-6 my-3 position-relative'
                                        key={new_arr.desc}
                                        onMouseEnter={() => setShopHoveredIndex(index)}
                                    >
                                        <div className="position-relative" onClick={() => navigate('/product/' + new_arr.id)}>
                                            <img src={shopHoveredIndex === index ? new_arr.hover_img : new_arr.img} alt={new_arr.desc} className='w-100' />
                                        </div>

                                        <div className="mt-3">
                                            <p className='text-secondary'>{new_arr.product}</p>
                                            <p>{new_arr.desc}</p>
                                            <p className='text-secondary'>{new_arr.price}</p>
                                        </div>

                                        {shopHoveredIndex === index && (
                                            <div className="position-absolute top-0 end-0 p-2">
                                                <div className="icon-wrapper" style={{ animationDelay: "0.3s" }} onClick={() => WishList(new_arr.id)}>
                                                    <i className={`fa-heart mx-4 fs-5 my-2 p-2 shadow-sm bg-white rounded-circle ${wishListData.some(a => a.id === new_arr.id)
                                                        ? 'fa-solid text-dark'
                                                        : 'fa-regular'
                                                        }`} size={30} />
                                                </div>
                                                <div className="icon-wrapper" style={{ animationDelay: "0.2s" }}>
                                                    <i className="fa-solid fs-5 fa-magnifying-glass text-dark mx-4 my-1 p-2 shadow-sm bg-white rounded-circle" size={30} onClick={() => handleShopModalToggle(new_arr)} />
                                                </div>
                                                <div className="icon-wrapper mt-2" style={{ animationDelay: "0.1s" }} onClick={() => ToggleCart(new_arr.id)}>
                                                    <i className={`mx-4 my-2 px-2 py-1 fs-5 shadow-sm bg-white rounded-circle bi ${cart.some(a => a.id === new_arr.id)
                                                        ? 'bi-cart-fill'
                                                        : 'bi-cart'
                                                        }`} size={30} />
                                                </div>
                                            </div>
                                        )}

                                    </div>
                                )
                            ))}

                        </div>

                    </div>

                </div>

            </div>

            {currentShopProduct && (
                <Modal show={ShopShowModal} onHide={handleShopModalToggle} size="xl">
                    <Modal.Header closeButton></Modal.Header>
                    <Modal.Body>
                        {isVisible && (
                            <div className="bg-success text-light bg-opacity-75 d-lg-flex d-md-flex justify-content-between bg-opacity-50 py-3 px-4 my-3">

                                <div className="d-flex mt-2">
                                    <i className="fa-solid fa-check my-1 mx-3"></i>
                                    <p>"{currentShopProduct?.desc}" has been added to your cart.</p>
                                </div>

                                <div className="mt-2">
                                    <Link to="/cart" className="text-decoration-none text-light border-bottom"> View Cart </Link>
                                </div>

                            </div>
                        )}
                        <div className='row'>

                            <div className="col-lg-6">
                                <img src={currentShopProduct.img} alt="" className='w-100' />
                            </div>

                            <div className="col-lg-6">

                                <p className='display-6 fw-normal'>{currentShopProduct.desc}</p>
                                <p className='fs-3'>{currentShopProduct.price}</p>
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
                                        <button className='btn btn-dark px-lg-4 rounded-1 w-100 my-3 py-2' onClick={() => AddToCart(currentShopProduct.id)}>Add To Cart</button>
                                    </div>
                                </div>

                                <div onClick={() => WishList(currentShopProduct.id)} className='d-flex' role='button'>
                                    <div>
                                        <i className={`fa-heart ${wishListData.some(a => a.id === currentShopProduct.id)
                                            ? 'fa-solid text-danger'
                                            : 'fa-regular'
                                            }`}></i>
                                    </div>
                                    <div className='mx-2'>
                                        <p>
                                            {wishListData.some(a => a.id === currentShopProduct.id)
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

export default ShopBody