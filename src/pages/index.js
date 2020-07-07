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
    <div className='relative top-125'>
      <img src={bg} alt="bowl of ramen with chopsticks" className="absolute w-screen h-500 object-cover object-top lg:object-contain " />
      <h1 className="relative w-full text-center top-200 text-white text-shadow text-5xl sm:text-6xl">Keiko Ramen</h1>
    </div>
    <div className="relative bg-clear bg-red">
      <Menu />
      <div className="bg-white"><Carousel /></div>
      <Location />
    </div>
  </Layout >
)

export default IndexPage
