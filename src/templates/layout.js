import React from "react"
import Header from "../components/header"
import Footer from '../components/footer'

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
