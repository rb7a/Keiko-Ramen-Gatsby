import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from '../components/layout'
import SEO from '../components/seo'
import Location from '../components/sections/location'
import SVGBottom from '../components/pieces/svg-bottom'

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
    <Layout>
      <SEO title="Location" />
      <div className="relative bg-clear-top">
        <Img fluid={data.bgImg.childImageSharp.fluid} alt="bowl of ramen with chopsticks" className="object-cover lg:max-h-screen" />
        <Location />
        <SVGBottom />
      </div>
    </Layout>
  )
}

export default LocationPage
