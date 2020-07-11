import React from 'react'

const NextArrow = (nextImage) => {
  return (
    <div className='text-6xl text-red mr-5 my-64 cursor-pointer' onClick={nextImage}>
      <p aria-hidden='true'>&gt;</p>
    </div>
  )
}

export default NextArrow