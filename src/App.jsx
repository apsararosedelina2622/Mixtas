import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Scroll_To_Top from './pages/Scroll_To_Top'

import Home_Page from './pages/Home_Page'
import Product_Page from './pages/Product_Page'
import Shop_Page from './pages/Shop_Page'
import Blog_page from './pages/Blog_Page'
import Order_Tracking_Page from './pages/Order_Tracking_Page'
import Cart_Page from './pages/Cart_Page'
import Wish_List_Page from './pages/Wish_List_Page'
import FAQ_Page from './pages/FAQ_Page'
import My_Account_Page from './pages/My_Account_Page'
import Forget_Password_page from './pages/Forget_Password_page'
import About_Us_Page from './pages/About_Us_Page'
import Error_Page from './pages/Error_Page'
import Contact_Page from './pages/Contact_Page'

import ContextProvider from './context/ContextProvider'

const App = () => {

  return (
    <>
      <BrowserRouter>
        <ContextProvider>
          <Scroll_To_Top />
          <Routes>

            <Route path='/' element={<Home_Page />} /> {/* ☑️ */}
            <Route path='/product/:id' element={<Product_Page />} />
            <Route path='/shop' element={<Shop_Page />} />
            <Route path='/blog/:id' element={<Blog_page />} />
            <Route path='/order-tracking' element={<Order_Tracking_Page />} />
            <Route path='/cart' element={<Cart_Page />} /> 
            <Route path='/wishlist' element={<Wish_List_Page />} />
            <Route path='/faqs' element={<FAQ_Page />} />
            <Route path='/my-account' element={<My_Account_Page />} />
            <Route path='/my-account/lost-password' element={<Forget_Password_page />} />
            <Route path='/about-us' element={<About_Us_Page />} />
            <Route path='/contact-us' element={<Contact_Page />} />
            <Route path='*' element={<Error_Page />} />

          </Routes>
        </ContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App