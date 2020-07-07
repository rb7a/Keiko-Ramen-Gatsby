import React from 'react'

const pStyles = `border-solid border-red border-2 text-red text-3xl flex items-center justify-center cursor-pointer w-10 h-10`
const numStyles = `w-10 h-10 font-heading text-2xl text-center text-white bg-red rounded-full mx-5`

const NumberOfItems = () => {
  return (
    <div className="flex justify-center">
      <p className={pStyles}>&#45;</p>
      <input className={numStyles} type="number" value="1" min="1" max="10" />
      <p className={pStyles}>&#43;</p>
    </div>
  )
}

export default NumberOfItems
