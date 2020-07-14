import React from "react"
import SEO from "../components/seo"
import Carousel from "../components/menu/carousel"
import Card from "../components/menu/card"
import items from "../data/menu-items.json"

const OrderNowPage = () => {
  return (
    <div>
      <SEO title="Order Now | Keiko Ramen" />
      <div className="mb-48">
        <div className="relative clear-header">
          <h1 className="text-center">Order Now</h1>
          <Carousel />
          <div className="grid gap-10 gtc justify-center mt-8 xl:mx-48">
            {items.map(item => (
              <Card name={item.name} price={item.price} image={item.image} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderNowPage
