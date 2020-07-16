import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Card from './card'

const Cards = () => {
  const cardsQuery = useStaticQuery(graphql`
  query CardsQuery {
      allStripePrice {
        edges {
          node {
            id
            currency
            unit_amount
            product {
              images
              name
              metadata {
                slug
              }
            }
          }
        }
    }
  }
`)
  return (
    <div className="mt-8 grid gap-10 gtc justify-center">
      {cardsQuery.allStripePrice.edges.map(({ node: price }) => {
        const item = {
          item: price.id,
          name: price.product.name,
          price: price.unit_amount,
          currency: price.currency,
        }
        return (
          <Card
            key={price.id}
            item={item}
            slug={price.product.metadata.slug}
            image={price.product.images}
          />
        )

      })}
    </div>
  )
}

export default Cards
