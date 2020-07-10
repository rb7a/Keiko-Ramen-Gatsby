import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
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
    <div>
      <SEO title="Keiko Ramen | Noodles & Stuff" />
      <section className="relative top-125 flex justify-center">
        <Img fluid={data.bgImg.childImageSharp.fluid} alt="bowl of ramen with chopsticks" className="bg" />
        <div className="w-full absolute center bottom-0 text-center text-white">
          <h1 className="text-6xl lg:text-80 text-shadow">Keiko Ramen</h1>
          <p className="text-5xl lg:text-6xl text-shadow">Noodles & Stuff</p>
        </div>
      </section>

      <div className="mt-24 relative">
        <h2 className="text-center text-white bg-red">Menu</h2>
        <div className="relative">
          <div className='svg-flip svg-top'>
            <SVGTop color="#A50022" />
          </div>
          <Menu />
          <SVGBottom />
        </div>
        <h2 className="text-center">Items</h2>
        <div className="bg-white relative">
          <Carousel />
        </div>

        <div className="relative pt-32">
          <div className='svg-flip'>
            <SVGTop color="#A50022" />
          </div>
          <h2 className="text-center text-white bg-red">Location</h2>
          <Location />
          <SVGBottom />
        </div>
        <h2 className="text-center pt-4">Contact Us</h2>
        <div className='relative'>
          <SVGTop />
          <div className="bg-red h-24"></div>
        </div>

      </div>

    </div >
  )
}
export default IndexPage

