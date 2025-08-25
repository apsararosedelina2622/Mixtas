import React, { createContext, useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { useAccordionButton } from 'react-bootstrap'

import { product } from '../assets/assets'

export const MyContext = createContext()

const ContextProvider = ({ children }) => {

    const navigate = useNavigate()

    // AppNavbar

    const [show, setShow] = useState(false)
    const [cartshow, setCartShow] = useState(false)
    const [searchshow, setSearchShow] = useState(false)
    const [loginshow, setLoginShow] = useState(false)
    const [registershow, setRegisterShow] = useState(false)
    const [pageshow, setPageShow] = useState(false)

    const [searchTerm, setSearchTerm] = useState("")
    const [filteredProducts, setFilteredProducts] = useState([])

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const carthandleClose = () => setCartShow(false)
    const carthandleShow = () => setCartShow(true)

    const searchHandleClose = () => setSearchShow(false)
    const searchHandleShow = () => setSearchShow(true)

    const loginHandleClose = () => setLoginShow(false)
    const loginHandleShow = () => setLoginShow(true)

    const registerHandleClose = () => setRegisterShow(false)
    const registerHandleShow = () => setRegisterShow(true)

    const pageHandleClose = () => setPageShow(false)
    const pageHandleShow = () => setPageShow(true)

    const handleSearch = (e) => {
        const value = e.target.value
        setSearchTerm(value)

        if (value.trim() === "") {
            setFilteredProducts([])
        } else {
            const filtered = product.filter((item) =>
                item.desc.toLowerCase().includes(value.toLowerCase())
            )
            setFilteredProducts(filtered)
        }
    }


    // New Arrival

    const [hoveredIndex, setHoveredIndex] = useState(null)

    const [showModal, setShowModal] = useState(false)
    const [currentProduct, setCurrentProduct] = useState(null)

    const handleModalToggle = (product) => {
        setCurrentProduct(product)
        setShowModal(!showModal)
    }


    // Popular Products

    const [popularHoveredIndex, setPopularHoveredIndex] = useState(null)
    const [popularShowModal, setPopularShowModal] = useState(false)
    const [popularCurrentProduct, setPopularCurrentProduct] = useState(null)

    const handlePopularModalToggle = (product) => {
        setPopularCurrentProduct(product)
        setPopularShowModal(!popularShowModal)
    }


    // Shop Body

    const [shopHoveredIndex, setShopHoveredIndex] = useState(null)

    const [pro_category, setPro_category] = useState(true)
    const [price_div, setPrice_div] = useState(false)
    const [color_div, setColor_div] = useState(false)
    const [size_div, setSize_div] = useState(false)
    const [tag_div, setTag_div] = useState(false)

    const samevalue = []
    let count = []
    product.map((e) => {
        samevalue.push(e.product)
    })

    samevalue.forEach(function (i) {
        count[i] = (count[i] || 0) + 1
    })
    let values = Object.keys(count)
    let counts = Object.values(count)

    const [ShopShowModal, setShopShowModal] = useState(false)
    const [currentShopProduct, setCurrentShopProduct] = useState(null)

    const handleShopModalToggle = (product) => {
        setCurrentShopProduct(product)
        setShopShowModal(!ShopShowModal)
    }


    // Faq

    const ToggleIcon = ({ children, eventKey, activeKey, callback }) => {

        const isOpen = activeKey === eventKey

        const decoratedOnClick = useAccordionButton(eventKey, () => {
            if (callback) callback(eventKey)
        })

        return (
            <div onClick={decoratedOnClick} className="d-flex justify-content-between align-items-center" role="button">
                <span>{children}</span>
                <i className={`fa ${isOpen ? "fa-minus" : "fa-plus"}`}></i>
            </div>
        )
    }

    const [leftActiveKey, setLeftActiveKey] = useState("1")
    const [rightActiveKey, setRightActiveKey] = useState("6")

    const handleLeftSelect = (key) => {
        setLeftActiveKey(key === leftActiveKey ? null : key)
    }

    const handleRightSelect = (key) => {
        setRightActiveKey(key === rightActiveKey ? null : key)
    }

    // Product Body

    const [desc_visible, setDescVisible] = useState(false)
    const [add_info_visible, setAdd_info_visible] = useState(false)
    const [review, setReview] = useState(false)

    const [like, setLike] = useState(false)

    const [isVisible, setIsVisible] = useState(false)

    // Related Products

    const [relatedProductHoveredIndex, setRelatedProductHoveredIndex] = useState(null)

    const [relatedProductShowModal, setRelatedProductShowModal] = useState(false)
    const [currentRelatedProduct, setCurrentRelatedProduct] = useState(null)

    const handleRelatedProductModalToggle = (product) => {
        setCurrentRelatedProduct(product)
        setRelatedProductShowModal(!relatedProductShowModal)
    }

    // Cart 

    var [cart, setCart] = useState([])
    var [cartCount, setCartCount] = useState(0)

    const AddToCart = (productID) => {
        setIsVisible(true)
        var productData = product.find(a => a.id === productID)
        var existingProduct = cart.find(a => a.id === productID)
        if (existingProduct) {
            setCart(cart.map(item =>
                item.id === productID
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            ))
        } else {
            setCart([...cart, { ...productData, quantity: 1 }])
        }
        setTimeout(() => {
            setIsVisible(false)
        }, 5000)
        setCartCount(a => a + 1)
    }

    const ToggleCart = (productID) => {
        const productData = product.find(a => a.id === productID)
        const exists = cart.find(a => a.id === productID)

        if (exists) {
            setCart(cart.filter(a => a.id !== productID))
            setCartCount(a => a - exists.quantity)
        } else {
            setCart([...cart, { ...productData, quantity: 1 }])
            setCartCount(a => a + 1)
        }
    }


    const quantityIncrement = (productID) => {
        setCart(cart.map(item =>
            item.id === productID && item.quantity < 20
                ? { ...item, quantity: item.quantity + 1 }
                : item
        ))
        setCartCount(a => a + 1)
    }

    const quantityDecrement = (productID) => {
        setCart(cart.map(item =>
            item.id === productID && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
        ))
        if (cartCount > 0) {
            setCartCount(a => a - 1)
        }
    }

    const getCartTotal = () => {
        return cart.reduce((total, item) => {
            const price = parseFloat(item.price.toString().replace(/[^0-9.]/g, ""))
            return total + (price * item.quantity)
        }, 0)
    }

    const RemoveCart = (productID) => {
        var existingProduct = cart.find(a => a.id === productID)
        if (existingProduct.quantity === 1) {
            setCart(cart.filter(a => a.id !== productID))
        }
        else {
            setCart(cart.map(item =>
                item.id === productID
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            ))
        }
        setCartCount(a => a - 1)
    }

    // Wishlist

    var [wishListData, setWishListData] = useState([])
    var [wishListCount, setWishListCount] = useState(0)

    const WishList = (productID) => {
        var exists = wishListData.find(a => a.id === productID)

        if (exists) {
            setWishListData(wishListData.filter(a => a.id !== productID))
            setWishListCount(a => a - 1)
        } else {
            var productData = product.find(a => a.id === productID)
            setWishListData([...wishListData, productData])
            setWishListCount(a => a + 1)
        }
    }

    const RemoveWishListData = (productID) => {
        setWishListData(wishListData.filter(a => a.id !== productID))
        setWishListCount(a => a - 1)
    }





    const contextValue = {

        // AppNavbar
        navigate,
        show, handleClose, handleShow,
        cartshow, carthandleClose, carthandleShow,
        searchshow, searchHandleClose, searchHandleShow,
        loginshow, loginHandleClose, loginHandleShow,
        registershow, registerHandleClose, registerHandleShow,
        pageshow, pageHandleClose, pageHandleShow,
        searchTerm, setSearchTerm,
        filteredProducts, setFilteredProducts,
        handleSearch, cartCount,

        // New Arrivals
        hoveredIndex, setHoveredIndex,
        showModal, setShowModal,
        currentProduct, setCurrentProduct,
        handleModalToggle,

        // Popular Products
        popularHoveredIndex, setPopularHoveredIndex,
        popularShowModal, setPopularShowModal,
        popularCurrentProduct, setPopularCurrentProduct,
        handlePopularModalToggle,

        // Shop Body
        shopHoveredIndex, setShopHoveredIndex,
        pro_category, setPro_category,
        price_div, setPrice_div,
        color_div, setColor_div,
        size_div, setSize_div,
        tag_div, setTag_div,
        counts, values,
        currentShopProduct, handleShopModalToggle,
        ShopShowModal,

        // Faq
        leftActiveKey, handleLeftSelect,
        rightActiveKey, handleRightSelect,
        ToggleIcon,

        // Product Body
        desc_visible, setDescVisible,
        add_info_visible, setAdd_info_visible,
        review, setReview,
        isVisible, like, setLike,

        // Related Products
        handleRelatedProductModalToggle,
        relatedProductHoveredIndex, setRelatedProductHoveredIndex,
        currentRelatedProduct, relatedProductShowModal,

        // Cart
        AddToCart, cart,
        quantityIncrement, quantityDecrement,
        RemoveCart, ToggleCart, getCartTotal,

        // Wish List
        WishList, wishListData, wishListCount,
        RemoveWishListData

    }

    return (
        <MyContext.Provider value={contextValue}>
            { children }
        </MyContext.Provider>
    )
}

export default ContextProvider
