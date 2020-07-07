import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Menu from '../components/sections/menu'
import Carousel from '../components/sections/carousel'
import Location from '../components/sections/location'
import bg from '../images/bg.jpg'

const IndexPage = () => (
  <Layout>
    <SEO title="Keiko Ramen" />
    <div className="relative top-125 flex justify-center">
      <img src={bg} alt="bowl of ramen with chopsticks" className="object-cover object-top lg:object-contain " />
      <h1 className="absolute w-full text-center top-25 text-white text-shadow text-4xl sm:text-6xl">Keiko Ramen</h1>
    </div>

    <div className="relative top-125 mb-24 bg-red">
      <Menu />
      <div className="bg-white"><Carousel /></div>
      <Location />
    </div>
  </Layout >
)

export default IndexPage
