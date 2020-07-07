import React from 'react'
import MenuItem from '../pieces/menu-item'

const Menu = () => {
  return (
    <div className="relative bg-red px-0 pt-16 pb-32 sm:px-10 grid gap-1">
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
    </div>
  )
}

export default Menu
