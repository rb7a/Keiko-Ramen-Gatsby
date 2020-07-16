import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Card from './card'
import items from "../../data/menu-items.json"

const Cards = () => {
  return (
    <div className="mt-8 grid gap-10 gtc justify-center">
      {items.map(item => (
        <Card name={item.name} price={item.price} image={item.image} />
      ))}
    </div>
  )
}

export default Cards
