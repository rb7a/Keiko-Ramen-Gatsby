import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Menu from '../components/menu'
import bg from '../images/bg.jpg'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <img src={bg} alt="bowl of ramen with chopsticks" className="absolute top-0 w-screen" />
      <h1 className="center top-150 text text-white text-shadow text-4xl lg:text-6xl">Keiko Ramen</h1>
    </div>
    <div className="bg-red bg-clear py-24 px-32">
      <Menu />
    </div>
  </Layout>
)

export default IndexPage
