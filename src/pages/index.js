import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import bg from '../images/bg.jpg'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <img src={bg} alt="bowl of ramen with chopsticks" className="absolute top-0 w-screen" />
    <h1 className="center top-150 text text-white text-shadow text-4xl lg:text-6xl">Keiko Ramen</h1>

  </Layout>
)

export default IndexPage
