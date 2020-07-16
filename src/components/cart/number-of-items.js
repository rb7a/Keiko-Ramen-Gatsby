import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'

const pStyles = `border-solid border-red border-2 text-red text-3xl flex items-center justify-center cursor-pointer w-10 h-10`
const numStyles = `w-10 h-10 font-heading text-2xl text-center text-white bg-red rounded-full mx-5`

const NumberOfItems = ({ item }) => {
  const {
    incrementItem,
    decrementItem,
    removeItem
  } = useShoppingCart()
  return (
    <div className="grid gap-5 items-center">
      <p
        className="text-right"
        role='button'
        onClick={() => removeItem(item.sku)}
        aria-label={`Remove all ${item.name} from your cart`}
      >
        X
        </p>
      <div className="flex">
        <p
          className={pStyles}
          role='button'
          onClick={() => decrementItem(item.sku)}
          aria-label={`Remove one ${item.name} from your cart`}
        >&#45;</p>
        <p className={numStyles}>{item.quantity}</p>
        <p
          className={pStyles}
          role='button'
          onClick={() => incrementItem(item.sku)}
          aria-label={`Remove one ${item.name} from your cart`}
        >&#43;</p>
      </div>
    </div>
  )
}

export default NumberOfItems
