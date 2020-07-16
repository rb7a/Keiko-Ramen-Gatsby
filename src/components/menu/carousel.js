import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import ItemDetail from "./item-detail"

const Carousel = () => {
  const [slide, setSlide] = useState(0)
  const previousImage = () => setSlide(slide - 1)
  const nextImage = () => setSlide(slide + 1)

  const detailsQuery = useStaticQuery(graphql`
    query ItemDetailQuery {
        allStripePrice {
          edges {
            node {
              id
              currency
              unit_amount
              product {
                name
                metadata {
                  slug
                }
              }
            }
          }
      }
      allFile(
        sort: { fields: name, order: DESC }
        filter: { relativeDirectory: { eq: "full-images" } }
      ) {
        edges {
          node {
            id
            name
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const { node } = detailsQuery.allFile.edges[slide]

  return (
    <div className="rounded-sm py-10 flex justify-between shadow-xl border-t-8 border-solid border-red">
      {slide !== 0 ? (
        <div
          className="text-3xl sm:text-6xl text-red px-5 flex items-center cursor-pointer outline-none"
          onClick={previousImage}
          onKeyPress={previousImage}
          role="button"
          tabIndex={0}
        >
          <p aria-hidden="true">&lt;</p>
        </div>
      ) : (
          <div className="text-3xl sm:text-6xl text-lightGray px-5 flex items-center">
            <p aria-hidden="true">&lt;</p>
          </div>
        )}
      {detailsQuery.allStripePrice.edges.map(({ node: price }, key) => {
        if (key === slide) {
          const item = {
            item: price.id,
            name: price.product.name,
            price: price.unit_amount,
            currency: price.currency,
          }
          return (
            <ItemDetail
              key={price.id}
              item={item}
              slug={price.product.metadata.slug}
              fullImg={node.childImageSharp.fluid}
            />
          )
        } else return null
      })}
      {slide !== detailsQuery.allStripePrice.edges.length - 1 ? (
        <div
          className="text-3xl sm:text-6xl text-red px-5  flex items-center cursor-pointer outline-none"
          onClick={nextImage}
          onKeyPress={nextImage}
          role="button"
          tabIndex={0}
        >
          <p aria-hidden="true">&gt;</p>
        </div>
      ) : (
          <div className="text-3xl sm:text-6xl text-lightGray px-5 flex items-center">
            <p aria-hidden="true">&gt;</p>
          </div>
        )}
    </div>
  )
}

export default Carousel
