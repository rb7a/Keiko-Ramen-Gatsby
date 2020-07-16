import React, { useState } from 'react'
import { useShoppingCart } from 'use-shopping-cart'

const pStyles = `border-solid border-red border-2 text-red text-3xl flex items-center justify-center cursor-pointer w-10 h-10`
const numStyles = `w-10 h-10 font-heading text-2xl text-center text-white bg-red rounded-full mx-5`

const AddToCart = ({ item }) => {
  const [count, setCount] = useState(1)
  const { addItem } = useShoppingCart()

  const incItem = () => setCount(count + 1)

  const decItem = () => setCount(count - 1)

  return (
    <div className="grid md:flex justify-start md:items-center">
      <div className="flex justify-center">
        <p
          className={pStyles}
          role='button'
          onClick={() => decItem()}
          onKeyDown={() => decItem()}
          aria-label={`Remove one ${item.name} from your count.`}
        >&#45;</p>
        <label htmlFor='number'>
          <input className={numStyles} type="number" id="number" min="1" max="10" value={count} /></label>
        <p
          className={pStyles}
          role='button'
          onKeyDown={() => incItem()}
          onClick={() => incItem()}
          aria-label={`Remove one ${item.name} from your count.`}
        >&#43;</p>
      </div>
      <button className="border-2 mt-5 md:mt-0 md:ml-5 border-orange hover:border-solid hover:btn-hover" onClick={() => addItem(item, parseInt(count))}>
        ADD TO CART
    </button>
    </div>
  )
}

export default AddToCart
