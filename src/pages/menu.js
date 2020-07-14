import React from 'react'
import SEO from '../components/seo'
import Menu from '../components/sections/menu'
import SVGBottom from '../components/pieces/svg-bottom'

const MenuPage = () => {
  return (
    <div>
      <SEO title='Menu | Keiko Ramen' />
      <div className="clear-header">
        <h1 className='text-white text-center bg-red'>Menu</h1>
        <Menu />
        <SVGBottom />
      </div>
    </div>
  )
}

export default MenuPage