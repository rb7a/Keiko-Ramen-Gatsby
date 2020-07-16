import React from 'react'
import { Link } from 'gatsby'
import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart'
import cart from "../../images/cart.png"

const itemWrapper = `rounded-sm bg-white shadow-inset sm:hover:shadow-none flex justify-between items-center pl-5 gap-5 w-full transition-transform ease-linear duration-75 transform sm:hover:scale-105 sm:hover:bg-orange sm:hover:text-white`

const textWrapper = `text-black sm:hover:text-white w-full px-2 py-5 grid justify-between items-center md:flex`

const cartLink = `rounded-sm bg-orange self-stretch flex flex-col items-center justify-center p-5`

const cartText = `text-white text-sm md:text-lg text-heading whitespace-no-wrap`

const MenuItem = ({ item, desc, slug }) => {
  const { addItem } = useShoppingCart()

  return (
    <div className={itemWrapper}>

      <Link to={slug} className={textWrapper}>
        <h4 className="text-2xl whitespace-no-wrap md:whitespace-pre-wrap md:flex-grow w-3/12">{item.name}</h4>
        <p className="font-body md:mx-5">{desc}</p>
        <h4 className="text-2xl">
          {formatCurrencyString({
            value: parseInt(item.price),
            currency: item.currency,
          })}
        </h4>
      </Link>

      <div
        className={cartLink}
        onClick={() => addItem(item)}
        onKeyDown={() => addItem(item)}
        role='button'
        tabIndex="0"
      >
        <img src={cart} alt="shopping cart" />
        <p className={cartText}>
          ADD TO CART
            </p>
      </div>
    </div>
  )
}

export default MenuItem
