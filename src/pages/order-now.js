import React from "react"
import SEO from "../components/seo"
import Carousel from "../components/menu/carousel"
import Cards from "../components/menu/cards"

const OrderNowPage = () => {
  return (
    <div>
      <SEO title="Order Now | Keiko Ramen" />
      <div className="relative clear-header grid gap-10 mt-10 mb-48 xl:mx-48">
        <h1 className="text-center">Order Now</h1>
        <Carousel />
        <Cards />
      </div>
    </div>
  )
}

export default OrderNowPage
