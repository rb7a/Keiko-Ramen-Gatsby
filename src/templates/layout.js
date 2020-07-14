import React from "react"
import Header from "../components/layout/header"
import Footer from "../components/layout/footer"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="h-full relative">
        <div>{children}</div>
        <div className="relative">
          <Footer />
        </div>
      </main>
    </>
  )
}

export default Layout

