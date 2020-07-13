import React from 'react'
import Img from 'gatsby-image'
import NumberOfItems from '../pieces/number-of-items'
import AddToCart from '../pieces/add-to-cart'

const CarouselCard = ({ name, longDesc, price, fullImg }) => {
  return (
    <div className='flex items-stretch xxl:items-center justify-between'>
      <div className='flex-1'>
        <h2 className='text-2xl sm:text-5xl whitespace-no-wrap'>{name}</h2>
        <p className="text-xs sm:text-sm xl:text-lg">{longDesc}</p>
        <h2 className="text-red">{price}</h2>
        <div className="grid md:flex justify-start md:items-center">
          <NumberOfItems />
          <div className="mt-2 md:mt-0 md:ml-5">
            <AddToCart />
          </div>
        </div>
      </div>
      <div className="hidden flex-1 lg:flex ml-5 xxl:max-h-525">
        <Img fluid={fullImg} alt={name} className="object-cover w-full" />
      </div>
    </div >
  )
}

export default CarouselCard