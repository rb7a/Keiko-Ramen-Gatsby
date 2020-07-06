import React from 'react'
import { Link } from 'gatsby'
import cart from '../../images/cart.png'

const Menu = () => {
  return (
    <div className="bg-red p-5">
      <div className="bg-white shadow-inset flex justify-between items-center pl-5 gap-5 mx-auto w-full xl:w-1/2">
        <h2 className="text-xl">Spicy Beef Ramen</h2>
        <div className="flex items-center">
          <p className="max-w-lg mr-4 py-5 text-sm">Bean sprouts bamboo slices Tokyo kamaboko Kumamoto toasted sesame seeds Nagoya leek bean sprouts scallions leek minced garlic curry bean sprouts ginger.</p>
          <Link to='/cart' className="bg-orange self-stretch flex flex-col items-center justify-center p-5">
            <img src={cart} alt="shopping cart" />
            <p className="text-white font-body text-sm whitespace-no-wrap">ADD TO CART</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Menu
