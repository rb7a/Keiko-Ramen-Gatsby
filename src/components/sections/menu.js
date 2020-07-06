import React from 'react'
import MenuItem from '../pieces/menu-item'

const Menu = () => {
  return (
    <div className="bg-red p-2 sm:p-10 grid gap-1">
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
    </div>
  )
}

export default Menu
