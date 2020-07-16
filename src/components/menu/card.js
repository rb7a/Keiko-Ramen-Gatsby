import React from "react"
import { Link } from 'gatsby'
import { formatCurrencyString } from 'use-shopping-cart'

const cardWrapper = `relative h-250 border-t-4 border-solid border-red card-hover overflow-hidden bg-white hover:bg-orange hover:text-white shadow-inset transition-all ease-linear duration-150 rounded-sm text-center grid justify-center content-start`

const Card = ({ item, slug, image }) => {
  return (
    <Link to={slug} className={cardWrapper}>
      <h4 className="text-red">
        {formatCurrencyString({
          value: parseInt(item.price),
          currency: item.currency,
        })}
      </h4>
      <h4 className="text-black md:px-2">{item.name}</h4>
      <img
        src={image}
        alt={item.name}
        className="bezier rounded-full top-150 absolute bottom-0 w-64 h-64"
      />
    </Link>
  )
}

export default Card
