import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Menu from '../components/sections/menu'
import Carousel from '../components/sections/carousel'
import Location from '../components/sections/location'
import SVGTop from '../components/pieces/svg-top'
import SVGBottom from '../components/pieces/svg-bottom'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  query {
    bgImg: file(relativePath: { eq: "bg.jpg" }) {
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
      <SEO title="Keiko Ramen" />

      <div className="relative top-125 flex justify-center pb-32">
        <Img fluid={data.bgImg.childImageSharp.fluid} alt="bowl of ramen with chopsticks" className="object-cover object-top lg:object-contain" style={{ width: '960px' }} />
        <h1 className="absolute w-full text-center top-25 text-white text-shadow text-4xl sm:text-6xl">Keiko Ramen</h1>
      </div>

      <div className="mt-24 relative top-125 py-12">

        <div className="relative">
          <SVGTop />
          <Menu />
          <SVGBottom />
        </div>
        <div className="bg-white relative">
          <Carousel />
        </div>
        <div className="relative">
          <SVGTop />
          <Location />
          <SVGBottom />
        </div>
      </div>
    </Layout >
  )
}
export default IndexPage

