import React from 'react'

import ProductNavbar from '../components/common components/ProductNavbar'
import ProductBody from '../components/product page components/ProductBody'
import RelatedProducts from '../components/product page components/RelatedProducts'
import Footer from '../components/common components/Footer'

import ContextProvider from '../context/ContextProvider'

const Product = () => {
  return (
    <>
      <ProductNavbar />
      <ContextProvider>
        <ProductBody />
      </ContextProvider>
      <RelatedProducts />
      <Footer />
    </>
  )
}

export default Product