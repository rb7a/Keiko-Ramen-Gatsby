import React from 'react'
import { Link } from 'gatsby'
import cart from '../images/cart.png'

const Menu = () => {
  return (
    <div className="bg-white shadow-inset flex justify-between items-center pl-5 ">
      <h2>Menu Item</h2>
      <div className="flex items-center">
        <p className="max-w-lg mr-6s">Bean sprouts bamboo slices Tokyo kamaboko Kumamoto toasted sesame seeds Nagoya leek bean sprouts scallions leek minced garlic curry bean sprouts ginger.</p>
        <Link to='/cart' className="bg-orange self-stretch flex flex-col items-center justify-center p-5">
          <img src={cart} alt="shopping cart" />
          <p className="text-white font-body">ADD TO CART</p>
        </Link>
      </div>
    </div>
  )
}

export default Menu
