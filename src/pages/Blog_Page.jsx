import React from 'react'

import ProductNavbar from '../components/common components/ProductNavbar'
import BlogBody from '../components/blog page components/BlogBody'
import Footer from '../components/common components/Footer'

import ContextProvider from '../context/ContextProvider'

const Blog_page = () => {
  return (
    <>
      <ProductNavbar />
      <ContextProvider>
        <BlogBody />
      </ContextProvider>
      <Footer />
    </>
  )
}

export default Blog_page