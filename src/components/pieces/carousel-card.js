import React from 'react'
import Img from 'gatsby-image'
import NumberOfItems from '../pieces/number-of-items'
import AddToCart from '../pieces/add-to-cart'

const CarouselCard = ({ name, longDesc, price, fullImg }) => {
  return (
    <div className='grid lg:grid-cols-carousel gap-5 justify-between'>
      <div>
        <h2 className='text-2xl sm:text-5xl whitespace-no-wrap'>{name}</h2>
        <p className="text-xs sm:text-sm">{longDesc}</p>
        <h2 className="text-red">{price}</h2>
        <div className="grid md:flex justify-start md:items-center">
          <NumberOfItems />
          <div className="mt-2 md:mt-0 md:ml-5">
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