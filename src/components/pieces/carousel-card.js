import React from 'react'
import Img from 'gatsby-image'
import NumberOfItems from '../pieces/number-of-items'
import AddToCart from '../pieces/add-to-cart'

const CarouselCard = ({ name, longDesc, price, fullImg }) => {
  return (
    <div className='grid lg:grid-cols-carousel gap-5 justify-between'>
      <div className='w-full'>
        <h2 className='whitespace-no-wrap'>{name}</h2>
        <p>{longDesc}</p>
        <h2 className="text-red">{price}</h2>
        <div className="flex items-center">
          <NumberOfItems />
          <div className="ml-5">
            <AddToCart />
          </div>
        </div>
      </div>
      <div className="hidden lg:flex justify-end">
        <Img fluid={fullImg} alt={name} className="object-cover object-center w-full mb-2" />
      </div>
    </div >
  )
}

export default CarouselCard