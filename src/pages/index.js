import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Menu from '../components/sections/menu'
import Carousel from '../components/sections/carousel'
import bg from '../images/bg.jpg'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <img src={bg} alt="bowl of ramen with chopsticks" className="absolute w-screen h-500 object-cover lg:object-contain" />
      <h1 className="relative w-full text-center top-200 text-white text-shadow text-5xl sm:text-6xl">Keiko Ramen</h1>
    </div>
    <div className="relative bg-clear">
      <Menu />
      <Carousel />
    </div>


  </Layout>
)

export default IndexPage
