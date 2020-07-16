import React from "react"
import { useShoppingCart } from 'use-shopping-cart'
import SEO from "../components/seo"
import CartSummary from '../components/cart/cart-summary'
import CartItem from "../components/cart/cart-item"

const CartPage = () => {
  const { cartDetails } = useShoppingCart()

  return (
    <div className="relative clear-header mb-32">
      <SEO title="Cart | Keiko Ramen" />
      <div className="pb-24 p-5">
        <div className="relative clear-header mb-32">
          <div>
            <h2 className="text-center md:text-left lg:ml-5">Your Order</h2>
          </div>
          <div className="grid justify-stretch md:flex md:justify-center">
            <div className="w-full grid gap-5 mb-5 md:mb-0 md:mr-5">
              {Object.keys(cartDetails).map((item, idx) => {
                const cartItem = cartDetails[item]
                return <CartItem key={idx} item={cartItem} />
              })}
            </div>
            <CartSummary items={cartDetails} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage
