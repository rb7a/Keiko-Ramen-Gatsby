import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Location from "../components/location"

const LocationPage = () => {
  const data = useStaticQuery(graphql`
    query {
      bgImg: file(relativePath: { eq: "restaurant.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1452) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div>
      <SEO title="Location | Keiko Ramen" />
      <div className="clear-header mb-12">
        <Img
          fluid={data.bgImg.childImageSharp.fluid}
          alt="bowl of ramen with chopsticks"
          className="max-h-525"
        />
        <h1 className="text-white text-center bg-red py-10">Location</h1>
        <Location />
      </div>
    </div>
  )
}

export default LocationPage
