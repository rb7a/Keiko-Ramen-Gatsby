import React, { useState } from 'react'
import items from '../../data/menu-items.json'
import CarouselCard from '../pieces/carousel-card'

const Carousel = () => {
  const [slide, setSlide] = useState(0)
  const previousImage = () => setSlide(slide - 1)
  const nextImage = () => setSlide(slide + 1)
  return (
    <div className="py-12 xl:mx-48">
      <div className="rounded-sm p-10 flex justify-between gap-5 shadow-xl">
        {slide !== 0 ?
          <div className='text-6xl text-red mr-5 flex items-center cursor-pointer outline-none' onClick={previousImage} onKeyPress={previousImage} role='button' tabIndex={0}>
            <p aria-hidden='true'>&lt;</p>
          </div>
          : ''}
        {items.map((item, key) => {
          if (key === slide) {
            return (
              <CarouselCard key={key} name={item.name} price={item.price} longDesc={item.descriptionLong} fullImg={require(`../../images/full-images/${item.image}-ramen.jpg`)} />
            )
          }
        })}
        {slide !== items.length - 1 ?
          <div className='text-6xl text-red mr-5 flex items-center cursor-pointer outline-none' onClick={nextImage} onKeyPress={nextImage} role='button' tabIndex={0}>
            <p aria-hidden='true'>&gt;</p>
          </div>
          : ''}
      </div>
      {/* <div className='flex justify-between w-full'>
        <button onClick={() => handlePrevious()} className='w-32'>Previous</button>
        <button onClick={() => handleNext()} className='w-32'>Next</button>
      </div> */}
    </div>
  )
}

export default Carousel
