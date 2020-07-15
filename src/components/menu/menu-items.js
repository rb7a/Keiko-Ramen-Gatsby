import React from "react"
import MenuItem from './menu-item'
import items from "../../data/menu-items.json"

const MenuItems = () => {
  return (
    <div className="relative bg-red px-0 pb-32 pt-12 sm:px-10 xl:px-0 grid gap-1">
      {items.map(item => (
        <MenuItem name={item.name} desc={item.descriptionShort} price={item.price} />
      ))}
    </div>
  )
}

export default MenuItems