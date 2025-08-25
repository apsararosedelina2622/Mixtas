import React from 'react'

import ProductNavbar from '../components/product page components/ProductNavbar'
import ProductBody from '../components/product page components/ProductBody'
import RelatedProducts from '../components/product page components/RelatedProducts'
import Footer from '../components/home page components/Footer'

const Product = () => {
  return (
    <>
      <ProductNavbar />
      <ProductBody />
      <RelatedProducts />
      <Footer />
    </>
  )
}

export default Product