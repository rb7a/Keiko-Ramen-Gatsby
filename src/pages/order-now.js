import React from "react"
import SEO from "../components/seo"
import Carousel from "../components/menu/carousel"
import Cards from "../components/menu/cards"

const OrderNowPage = () => {
  return (
    <div>
      <SEO title="Order Now | Keiko Ramen" />
      <div className="relative clear-header grid gap-10 mb-48">
        <h1 className="text-center my-5">Order Now</h1>
        <Carousel />
        <div>
          <Cards />
        </div>
      </div>
    </div>
  )
}

export default OrderNowPage
