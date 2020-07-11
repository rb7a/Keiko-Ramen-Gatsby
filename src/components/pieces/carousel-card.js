import React from 'react'
import NumberOfItems from '../pieces/number-of-items'
import AddToCart from '../pieces/add-to-cart'
import Img from 'gatsby-image'

const CarouselCard = ({ name, longDesc, price, fullImg, node }) => {

  return (
    <div className='flex'>
      <div className="w-full xl:w-1/2">
        <h2>{name}</h2>
        <p>{longDesc}</p>
        <h2 className="text-red">{price}</h2>
        <div className="flex items-center">
          <NumberOfItems />
          <div className="ml-5">
            <AddToCart />
          </div>
        </div>
      </div>
      <div className="hidden lg:flex xl:w-1/2 justify-end">
        <img src={fullImg} alt={name} className="object-cover h-500 mb-2" />
      </div>
    </div >
  )
}

export default CarouselCard