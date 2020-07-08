import React from 'react'
import NumberOfItems from './number-of-items'
import beef from '../../images/card-images/beef.png'

const CartItem = () => {
  return (
    <>
      <div className="bg-white shadow-md rounded-sm pt-5 grid md:flex justify-between">
        <div className="flex justify-center">
          <img src={beef} alt="Spicy Beef Ramen" className=" object-cover object-bottom" />
        </div>
        <div className="grid md:ml-5">
          <h3>Spicy Beef Ramen</h3>
          <p>Bean sprouts bamboo slices Tokyo kamaboko Kumamoto toasted sesame seeds Nagoya leek bean sprouts scallions leek minced garlic curry bean sprouts ginger.</p>
        </div>
        <div className="flex justify-between md:grid text-right md:ml-5">
          <h3 className='text-red'>$12.00</h3>
          <NumberOfItems />
        </div>
      </div>
    </>
  )
}

export default CartItem
