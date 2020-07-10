import React from 'react'
import SEO from '../components/seo'
import Carousel from '../components/sections/carousel'

const MenuItemPage = () => {
  return (
    <div>
      <SEO title="Menu Item | Keiko Ramen" />
      <div className="relative bg-clear-top mb-32">
        <Carousel />
      </div>
    </div>
  )
}

export default MenuItemPage
