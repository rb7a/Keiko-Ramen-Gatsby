import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Menu from '../components/sections/menu'
import SVGBottom from '../components/pieces/svg-bottom'

const OrderNowPage = () => {
  return (
    <Layout>
      <SEO title='Order Now | Keiko Ramen' />
      <div className="relative bg-clear-top">
        <h1 className='text-white text-center bg-red'>Order Now</h1>
        <Menu />
        <SVGBottom />
      </div>
    </Layout>
  )
}

export default OrderNowPage
