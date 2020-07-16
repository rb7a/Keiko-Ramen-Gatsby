import React from "react"
import SEO from "../components/seo"
import MenuItems from "../components/menu/menu-items"

const OrderNowPage = () => {
  return (
    <div className="bg-red">
      <SEO title="Order Now | Keiko Ramen" />
      <div className="relative clear-header grid gap-10 mt-10 pb-12 xl:mx-48">
        <h1 className="text-center text-white pt-10">Order Now</h1>
        <MenuItems />
      </div>
    </div>
  )
}

export default OrderNowPage
