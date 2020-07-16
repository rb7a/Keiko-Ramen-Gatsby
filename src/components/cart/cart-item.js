import React from "react"
import NumberOfItems from "./number-of-items"

const CartItem = ({ item }) => {
  return (
    <div className="border-t-4 border-solid border-red bg-white shadow-md rounded-sm p-5 grid justify-stretch md:flex md:justify-between">
      <div className="grid gap-5 items-center">
        <h3>{item.name}</h3>
        <p className="font-heading text-xl text-red">
          Total price: {item.formattedValue}
        </p>
      </div>
      <NumberOfItems item={item} />
    </div>
  )
}

export default CartItem
