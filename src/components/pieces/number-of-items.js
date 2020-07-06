import React from 'react'

const pStyles = `border-solid border-red border-2 text-red flex items-center justify-center w-10 h-10`

const NumberOfItems = () => {
  return (
    <div className="flex justify-center">
      <p className={pStyles}>–</p><input className="w-10 h-10 font-heading  text-2xl text-center text-white bg-red rounded-full mx-5" type="text" value="1" min="0" max="10" /><p className={pStyles}>+</p>
    </div>
  )
}

export default NumberOfItems
