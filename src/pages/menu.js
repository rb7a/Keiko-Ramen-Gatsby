import React from "react"
import SEO from "../components/seo"
import MenuItems from "../components/menu/menu-items"
import SVGBottom from "../components/svg-bottom"

const MenuPage = () => {
  return (
    <div>
      <SEO title="Menu | Keiko Ramen" />
      <div className="clear-header">
        <h1 className="text-white text-center bg-red">Menu</h1>
        <MenuItems />
        <SVGBottom />
      </div>
    </div>
  )
}

export default MenuPage
