import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
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
      bgImg: file(relativePath: { eq: "ramen-bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Keiko Ramen" />
      <section className="relative top-125 flex justify-center">
        <Img fluid={data.bgImg.childImageSharp.fluid} alt="bowl of ramen with chopsticks" className="bg" />
      </section>
      <div className="w-full absolute center bottom-0 text-center text-white">
        <h1 className="text-5xl sm:text-80 text-shadow">Keiko Ramen</h1>
        <p className="text-5xl sm:text-6xl text-shadow">Noodles & Stuff</p>
      </div>
      <div className="mt-24 relative pt-12">
        <h2 className="text-center">Menu</h2>
        <div className="relative">
          <SVGTop />
          <Menu />
          <SVGBottom />
        </div>
        <h2 className="text-center">Items</h2>
        <div className="bg-white relative">
          <Carousel />
        </div>
        <h2 className="text-center">Location</h2>
        <div className="relative">
          <SVGTop />
          <Location />
          <SVGBottom />
        </div>
        <h2 className="text-center pt-4">Contact Us</h2>
        <div className='relative'>
          <SVGTop />
          <div className="bg-red h-24"></div>
        </div>

      </div>

    </Layout >
  )
}
export default IndexPage

