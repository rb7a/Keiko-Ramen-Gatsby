import React from 'react'
import Subscribe from './pieces/subscribe'
import Socials from './pieces/socials'
import SVGTop from './pieces/svg-top'

const Footer = () => {
  return (
    <div className="relative bg-red py-20 mt-24">
      <SVGTop />
      <Subscribe />
      <Socials />
    </div>
  )
}

export default Footer
