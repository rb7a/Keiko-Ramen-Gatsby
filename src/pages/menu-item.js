import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Carousel from '../components/sections/carousel'

const MenuItemPage = () => {
  return (
    <Layout>
      <SEO title="menu-item" />
      <div className="relative bg-clear-top">
        <Carousel />
      </div>
    </Layout>
  )
}

export default MenuItemPage
