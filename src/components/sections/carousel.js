import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import items from '../../data/menu-items.json'
import CarouselCard from '../pieces/carousel-card'

const Carousel = () => {
  const [slide, setSlide] = useState(0)
  const previousImage = () => setSlide(slide - 1)
  const nextImage = () => setSlide(slide + 1)

  const { allFile } = useStaticQuery(graphql`
    query {
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
  const { node } = allFile.edges[slide]
  return (
    <div className="xl:mx-48">
      <div className="rounded-sm py-10 flex justify-between shadow-xl">
        {slide !== 0 ?
          <div className='text-3xl sm:text-6xl text-red px-5 flex items-center cursor-pointer outline-none' onClick={previousImage} onKeyPress={previousImage} role='button' tabIndex={0}>
            <p aria-hidden='true'>&lt;</p>
          </div>
          :
          <div className='text-3xl sm:text-6xl text-lightGray px-5 flex items-center'>
            <p aria-hidden='true'>&lt;</p>
          </div>}
        {items.map((item, key) => {
          if (key === slide) {
            return (
              <CarouselCard
                key={key}
                name={item.name}
                price={item.price}
                longDesc={item.descriptionLong}
                fullImg={node.childImageSharp.fluid} />
            )
          } else return null
        })}
        {slide !== items.length - 1 ?
          <div className='text-3xl sm:text-6xl text-red px-5  flex items-center cursor-pointer outline-none' onClick={nextImage} onKeyPress={nextImage} role='button' tabIndex={0}>
            <p aria-hidden='true'>&gt;</p>
          </div>
          :
          <div className='text-3xl sm:text-6xl text-lightGray px-5 flex items-center'>
            <p aria-hidden='true'>&gt;</p>
          </div>}
      </div>
    </div>
  )
}

export default Carousel
