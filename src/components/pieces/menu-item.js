import React from 'react'
import { Link } from 'gatsby'
import cart from '../../images/cart.png'

const itemWrapper = `rounded-sm bg-white shadow-inset sm:hover:shadow-none flex justify-between items-center pl-5 gap-5 mx-auto w-full transition-transform ease-linear duration-75 transform sm:hover:scale-105 sm:hover:bg-orange sm:hover:text-white xl:w-1/2`
const cartLink = `rounded-sm bg-orange self-stretch flex flex-col items-center justify-center p-5`

const MenuItem = () => {
  return (
    <div className={itemWrapper}>
      <div className="w-full flex items-center">
        <h2 className="text-xl">Spicy Beef Ramen</h2>
        <p className="max-w-lg mr-4 py-5 text-sm ml-5">
          Bean sprouts bamboo slices Tokyo kamaboko Kumamoto toasted sesame seeds Nagoya leek bean sprouts scallions leek minced garlic curry bean sprouts ginger.
        </p>

      </div>

      <Link to='/cart' className={cartLink}>
        <img src={cart} alt="shopping cart" />
        <p className="text-white font-body text-sm whitespace-no-wrap">ADD TO CART</p>
      </Link>
    </div>
  )
}

export default MenuItem
