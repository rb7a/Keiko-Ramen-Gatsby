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
      <div className="mb-600">
        <main>{children}</main>
      </div>
      <div className="absolute w-full bg-red">
        <Footer />
      </div>
    </>
  )
}

export default Layout
