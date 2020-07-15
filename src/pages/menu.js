import React from "react"
import SEO from "../components/seo"
import MenuItems from "../components/menu/menu-items"

const MenuPage = () => {
  return (
    <div className="bg-red">
      <SEO title="Menu | Keiko Ramen" />
      <div className="clear-header pb-12 xl:mx-48">
        <h1 className="text-white text-center bg-red pt-10">Menu</h1>
        <MenuItems />
      </div>
    </div>
  )
}

export default MenuPage
