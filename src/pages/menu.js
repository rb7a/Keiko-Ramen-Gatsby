import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Carousel from '../components/sections/carousel'
import MenuCard from '../components/pieces/menu-card'

const MenuPage = () => {
  return (
    <Layout>
      <SEO title="Menu" />
      <div className="pb-24">
        <div className="relative bg-clear-top">
          <Carousel />
          <div className="grid gap-10 gtc justify-center xl:mx-48">
            <MenuCard />
            <MenuCard />
            <MenuCard />
            <MenuCard />
            <MenuCard />
            <MenuCard />
            <MenuCard />
            <MenuCard />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default MenuPage
