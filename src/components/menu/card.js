import React from "react"

const Card = ({ name, price, image }) => {
  return (
    <div className="relative h-300 border-t-4 border-solid border-red card-hover overflow-hidden bg-white hover:bg-orange hover:text-white shadow-inset transition-all ease-linear duration-150 rounded-sm text-center grid justify-center content-start">
      <h4 className="text-red">${price}</h4>
      <h4 className="md:px-2">{name}</h4>
      <img
        src={require(`../../images/card-images/${image}.png`)}
        alt={name}
        className="bezier absolute bottom-0 md:w-full"
      />
    </div>
  )
}

export default Card
