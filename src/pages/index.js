import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Menu from '../components/sections/menu'
import Carousel from '../components/sections/carousel'
import Location from '../components/sections/location'
import SVG from '../components/pieces/svg'

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

      <div className="relative top-125 flex justify-center">
        <Img fluid={data.bgImg.childImageSharp.fluid} alt="bowl of ramen with chopsticks" className="object-cover object-top lg:object-contain" style={{ width: '960px' }} />
        <h1 className="absolute w-full text-center top-25 text-white text-shadow text-4xl sm:text-6xl">Keiko Ramen</h1>
      </div>

      <div className="bg-red clear-footer mt-24 relative top-125 py-12">
        <div class="custom-shape-divider-top-1594131228">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
          </svg>
        </div>
        <div className="relative">
          <Menu />
          <div className="custom-shape-divider-bottom-1594131361">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
            </svg>
          </div>
        </div>
        <div className="bg-white relative">
          <Carousel />
        </div>
        <div className="relative">
          <SVG />
          <Location />
        </div>
      </div>
    </Layout >
  )
}
export default IndexPage

