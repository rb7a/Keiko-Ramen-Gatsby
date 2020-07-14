import React from "react"

const Card = ({ name, price, image }) => {
  return (
    <div className="relative h-300 card-hover overflow-hidden bg-white hover:bg-orange hover:text-white shadow-xl transition-all ease-linear duration-150 rounded-sm text-center grid justify-center content-start">
      <h4 className="text-red">${price}</h4>
      <h3>{name}</h3>
      <img
        src={require(`../../images/card-images/${image}.png`)}
        alt={name}
        className="bezier absolute bottom-0"
      />
    </div>
  )
}

export default Card
