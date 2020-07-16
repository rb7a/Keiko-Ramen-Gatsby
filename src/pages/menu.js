import React from "react"
import SEO from "../components/seo"
import Carousel from "../components/menu/carousel"
import Cards from "../components/menu/cards"

const MenuPage = () => {
  return (
    <div>
      <SEO title="Menu | Keiko Ramen" />
      <div className="relative clear-header grid gap-10 mt-10 pb-48 xl:mx-48">
        <h1 className="text-center pt-10">Menu</h1>
        <Carousel />
        <Cards />
      </div>
    </div>
  )
}

export default MenuPage
