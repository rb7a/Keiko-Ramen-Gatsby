import React, { useState, useEffect } from "react"
import { Link } from 'gatsby'
import logo from "../images/logo.png"
import cart from "../images/cart.png"

const headerStyles = `fixed top-0 w-full h-125 z-10 bg-red`
const stickyHeader = `fixed top-0 w-full h-125 z-10 bg-darkRed bg-opacity-50 shadow-lg`
const headerWrapper = `relative z-10 flex items-center justify-between px-10 py-4`
const mobileNavBtn = `bg-transparent z-10 mt-2 relative text-white cursor-pointer text-xl leading-none rounded bg-transparent  block lg:hidden outline-none focus:outline-none focus:shadow-none`
const hamburgerMenu = `grid h-1 w-10 relative mb-2 bg-white rounded z-10`
const menuStyles = `rounded-md border-solid border-black border-4 lg:border-none bg-red relative top-125 lg:top-0 mr-0 lg:mr-12 grid lg:flex items-center lg:bg-opacity-0 p-2 lg:p-0`
const linksStyles = `border-b-0 border-solid border-orange hover:border-b-4 `
const badgeStyles = `absolute -mt-12 -mr-2 right-0 bg-white text-orange border-red border-solid border-2 rounded-full h-6 w-6 leading-5 pl-1`

const Header = ({ sticky }) => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [isTop, setIsTop] = useState(true)

  useEffect(() => {
    document.addEventListener('scroll', () => {
      const scroll = window.scrollY > 125;
      const top = window.scrollY < 124
      if (scroll) {
        setIsTop(!isTop)
      } else if (top) {
        setIsTop(true)
      }
    });
  }, [])

  return (
    <header className={isTop ? headerStyles : stickyHeader}>
      <div className={headerWrapper}>
        <Link to='/'>
          <img src={logo} alt="Keiko Ramen logo" />
        </Link>
        <div className="w-full flex justify-end items-center">
          <button
            className={mobileNavBtn}
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <div>
              <span className={hamburgerMenu}></span>
              <span className={hamburgerMenu}></span>
              <span className={hamburgerMenu}></span>
            </div>
          </button>
          <nav
            className={
              "absolute lg:flex flex-grow items-center" +
              (navbarOpen ? "grid" : " hidden")
            }
          >
            <ul className={menuStyles}>
              <li>
                <Link to='/' className={linksStyles}>HOME</Link>
              </li>
              <li>
                <Link to='/menu' className={linksStyles}>MENU</Link>
              </li>
              <li>
                <Link to='/location' className={linksStyles}>LOCATION</Link>
              </li>
              <li>
                <Link to='/order'>
                  <button className="ml-1 mr-2 hover:btn-hover">ORDER NOW</button>
                </Link>
              </li>
            </ul>
          </nav>
          <Link to='/cart' className="relative">
            <img src={cart} alt="shopping cart" />
            <p className={badgeStyles}>0</p>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
