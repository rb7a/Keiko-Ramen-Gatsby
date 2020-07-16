import React from 'react'
import { graphql } from "gatsby"
import Item from '../components/menu/item'

const ItemPageTemplate = ({ data }) => {
  console.log(data.stripePrice)
  return (
    <div className="relative clear-header grid gap-10 mt-16 pb-48 xl:mx-48">
      <Item
        item={data.stripePrice}
      />
    </div>
  )
}

export const itemQuery = graphql`
query Item($slug: String!) {
    stripePrice(product: { metadata: { slug: { eq: $slug}}}) {
      id
      currency
      unit_amount
      product {
        images
        name
      }
    }
  }
`

export default ItemPageTemplate