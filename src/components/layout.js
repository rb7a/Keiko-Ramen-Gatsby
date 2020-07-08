/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Header from "./header"
import Footer from './footer'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="h-full relative">
        <div>{children}</div>
        <div className='relative'><Footer /></div>
      </main>

    </>
  )
}

export default Layout
