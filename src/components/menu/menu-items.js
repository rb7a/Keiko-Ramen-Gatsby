import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import MenuItem from './menu-item'

const MenuItems = () => {
  const itemsQuery = useStaticQuery(graphql`
      query ItemsQuery {
        allStripePrice {
          edges {
            node {
              unit_amount
              product {
                description
                images
                name
                metadata {
                  slug
                }
              }
              currency
              id
            }
          }
      }
    }
  `)
  return (
    <div className="relative bg-red px-0 pb-32 pt-12 sm:px-10 xl:px-0 grid gap-1">
      {itemsQuery.allStripePrice.edges.map(({ node: price }) => {
        const item = {
          sku: price.id,
          name: price.product.name,
          price: price.unit_amount,
          currency: price.currency,
        }
        return (
          <MenuItem
            key={price.id}
            item={item}
            desc={price.product.description}
            slug={price.product.metadata.slug}
          />
        )

      })}
    </div>
  )
}

export default MenuItems