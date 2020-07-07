import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Menu from '../components/sections/menu'

const OrderNowPage = () => {
  return (
    <Layout>
      <SEO title='Order Now' />
      <div className="relative bg-clear-top">
        <Menu />
      </div>
    </Layout>
  )
}

export default OrderNowPage
