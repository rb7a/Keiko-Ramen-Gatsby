import React, { useState } from 'react'
import { Link } from 'gatsby'
import { useShoppingCart } from 'use-shopping-cart'

const CartSummary = ({ items }) => {
  const [loading, setLoading] = useState(false)
  const {
    cartDetails,
    formattedTotalPrice,
    redirectToCheckout,
    cartCount,
    clearCart,
  } = useShoppingCart()
  return (
    <div>
      {Object.keys(items).length === 0 ?
        (<div className="text-red grid gap-10 justify-center w-screen pr-10 xxl:pr-0">
          <h2 className="text-center xxl:whitespace-no-wrap">Oh the sadness, you don't have any ramen in your cart!</h2>
          <Link to='/' className="mx-auto"><button className="font-body text-4xl whitespace-no-wrap hover:btn-hover border-orange border-2 hover:border-solid">Go get more ramen</button></Link>
        </div>) :
        (<div className="bg-red shadow-lg px-5 grid p-5 gap-5 text-white">
          <div className="grid justify-stretch">
            <h3 className="text-2xl text-center border-orange border-solid border-b-2">Order Details</h3>
            <div className="grid">

              {Object.keys(cartDetails).map(item => {
                const cartItem = cartDetails[item]
                return (
                  <div className="flex justify-between border-orange border-solid border-b-2">
                    <h4 className="text-xl whitespace-no-wrap">{cartItem.name}</h4>
                    <div className="grid items-center">
                      <h4 className="text-xl ml-5">{cartItem.formattedValue}</h4>
                      <p className="text-right">Qty. {cartItem.quantity}</p>
                    </div>
                  </div>
                )
              })}

            </div>
          </div>

          <div className="grid gap-2 items-end content-end tracking-widest">
            <div className="grid gap-2 items-center">
              <p className="text-lg font-bold flex justify-between">
                <span>Items</span>
                <span>{cartCount}</span>
              </p>
              <p className="text-lg font-bold flex justify-between">
                <span>Total</span>
                <span className="text-orange border-solid border-white border-2 p-1 mb-5">
                  {formattedTotalPrice}
                </span>
              </p>
            </div>
            <button
              className="hover:btn-hover"
              disabled={loading}
              onClick={() => {
                setLoading(true)
                redirectToCheckout()
              }}
            >
              {loading ? 'Loading...' : 'Checkout'}
            </button>

            <button onClick={clearCart}>
              Clear cart
            </button>
          </div>
        </div>)}
    </div>

  )
}

export default CartSummary
