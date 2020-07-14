import React from "react"
import Img from "gatsby-image"
import NumberOfItems from "../cart/number-of-items"
import AddToCart from "../cart/add-to-cart"

const ItemDetail = ({ name, longDesc, price, fullImg }) => {
  return (
    <div className="grid lg:grid-cols-carousel items-stretch xxl:items-center justify-between">
      <div>
        <h2 className="text-2xl sm:text-5xl whitespace-no-wrap">{name}</h2>
        <p className="text-xs sm:text-sm xl:text-lg">{longDesc}</p>
        <h2 className="text-red">{price}</h2>
        <div className="grid md:flex justify-start md:items-center">
          <NumberOfItems />
          <div className="mt-2 md:mt-0 md:ml-5">
            <AddToCart />
          </div>
        </div>
      </div>
      <div className="hidden lg:flex ml-5 xxl:max-h-525">
        <Img fluid={fullImg} alt={name} className="object-cover w-full" />
      </div>
    </div>
  )
}

export default ItemDetail
