import React from "react"
import { Link } from "gatsby"
import cart from "../../images/cart.png"
import items from "../../data/menu-items.json"

const itemWrapper = `rounded-sm bg-white shadow-inset sm:hover:shadow-none flex justify-between items-center pl-5 gap-5 mx-auto w-full transition-transform ease-linear duration-75 transform sm:hover:scale-105 sm:hover:bg-orange sm:hover:text-white xl:w-1/2`
const cartLink = `rounded-sm bg-orange self-stretch flex flex-col items-center justify-center p-5`

const MenuItems = () => {
  return (
    <div className="relative bg-red px-0 pb-32 pt-12 sm:px-10 grid gap-1">
      {items.map(item => (
        <div className={itemWrapper}>
          <div className="w-full px-2 py-5 grid justify-center items-center md:flex">
            <h4 className="text-2xl w-9/12">{item.name}</h4>
            <p className="md:mx-5">{item.descriptionShort}</p>
            <h4 className="text-2xl">${item.price}</h4>
          </div>

          <Link to="/cart" className={cartLink}>
            <img src={cart} alt="shopping cart" />
            <p className="text-white text-sm md:text-lg text-heading whitespace-no-wrap">
              ADD TO CART
            </p>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default MenuItems
