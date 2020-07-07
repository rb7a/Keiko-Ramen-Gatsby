import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Carousel from '../components/sections/carousel'

const Menu = () => {
  return (
    <Layout>
      <SEO title="menu" />
      <div className="relative bg-clear-top">
        <Carousel />
      </div>
    </Layout>
  )
}

export default Menu
