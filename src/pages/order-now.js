import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Menu from '../components/sections/menu'
import SVGBottom from '../components/pieces/svg-bottom'

const OrderNowPage = () => {
  return (
    <Layout>
      <SEO title='Order Now' />
      <div className="relative bg-clear-top">
        <Menu />
        <SVGBottom />
      </div>
    </Layout>
  )
}

export default OrderNowPage
