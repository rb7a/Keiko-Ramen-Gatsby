import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import CartItem from '../components/pieces/cart-item'

const CartPage = () => {
  return (
    <Layout>
      <SEO title="Cart" />
      <div className="clear-footer pb-24">
        <div className="relative bg-clear-top">
          <div>
            <h2 className="text-center md:text-left">Your Order</h2>
          </div>
          <div className='grid lg:flex'>
            <div className='grid gap-5'>
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
            </div>
            <div>
              <div className="bg-red shadow-lg px-5 grid justify-between p-5 gap-5 text-white lg:ml-5 w-full">


                <div className='grid justify-center'>
                  <h3>Order Details</h3>
                  <hr />
                  <div className="flex">
                    <h4>Spicy Beef Ramen</h4>
                    <h4>$12.00</h4>
                  </div>
                  <p>Qty. 4</p>
                  <hr />
                </div>

                <div className='grid gap-2'>
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
                    <span className='text-orange border-solid border-white border-2'>$12.72</span>
                  </p>
                  <button className='w-full'>Checkout</button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CartPage
