import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'

const AddToCart = ({ item }) => {
  const { addItem } = useShoppingCart()
  return (
    <button className="border-2 hover:border-orange hover:border-solid hover:btn-hover " onClick={() => addItem(item)}>
      ADD TO CART
    </button>
  )
}

export default AddToCart
