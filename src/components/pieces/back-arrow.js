import React from 'react'

const BackArrow = (previousImage) => {
  return (
    <div className='text-6xl text-red mr-5 my-64 cursor-pointer' onClick={previousImage}>
      <p aria-hidden='true'>&lt;</p>
    </div>
  )
}

export default BackArrow
