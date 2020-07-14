import React from "react"
import SEO from "../components/seo"
import CartItem from "../components/cart/cart-item"

const CartPage = () => {
  return (
    <div>
      <SEO title="Cart | Keiko Ramen" />
      <div className="pb-24 p-5">
        <div className="relative clear-header mb-32">
          <div>
            <h2 className="text-center md:text-left lg:ml-5">Your Order</h2>
          </div>
          <div className="grid gap-5 lg:flex lg:ml-5">
            <div className="grid gap-5">
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
            </div>

            <div className="bg-red shadow-lg px-5 grid justify-center p-5 gap-5 text-white lg:w-8/12 xl:max-w-sm lg:ml-5">
              <div className="grid justify-center">
                <h3 className="text-2xl text-center">Order Details</h3>
                <hr />
                <div className="flex justify-between">
                  <h4 className="text-xl">Spicy Beef Ramen</h4>
                  <h4 className="text-xl ml-5">$12.00</h4>
                </div>
                <p>Qty. 4</p>
                <hr />
              </div>

              <div className="grid gap-2 items-end content-end  tracking-widest">
                <div className="grid gap-2 items-center">
                  <p className="text-lg font-bold flex justify-between">
                    <span>Subtotal</span>
                    <span>$12.00</span>
                  </p>
                  <p className="text-lg font-bold flex justify-between">
                    <span>Tax</span>
                    <span>$0.72</span>
                  </p>
                  <p className="text-lg font-bold flex justify-between">
                    <span>Total</span>
                    <span className="text-orange border-solid border-white border-2 p-1 mb-5">
                      $12.72
                    </span>
                  </p>
                </div>
                <button className="hover:btn-hover">Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage
