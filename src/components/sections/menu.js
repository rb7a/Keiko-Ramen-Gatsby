import React from 'react'
import MenuItem from '../pieces/menu-item'
import items from '../../data/menu-items.json'

const Menu = () => {
  return (
    <div className="relative bg-red px-0 pb-32 pt-12 sm:px-10 grid gap-1">
      {items.map(item => (
        <MenuItem price={item.price} name={item.name} desc={item.descriptionShort} />
      ))
      }
    </div>
  )
}

export default Menu
