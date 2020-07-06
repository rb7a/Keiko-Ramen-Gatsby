import React, { useState } from "react"
import { Link } from 'gatsby'
import logo from "../images/logo.png"
import cart from "../images/cart.png"

const headerStyles = `relative z-10 flex items-center justify-between  px-10 py-4 bg-red`
const hamburgerMenu = `grid h-1 w-10 relative mb-2 bg-white rounded z-10`
const mobileNavBtn = `bg-transparent z-10 -mt-2 mr-10 absolute text-white cursor-pointer text-xl leading-none rounded bg-transparent  block lg:hidden outline-none focus:outline-none focus:shadow-none`
const ulStyles = `border-solid border-black border-2 lg:border-none bg-red mt-10 lg:-mt-2 mr-0 lg:mr-12 grid lg:flex items-center lg:bg-opacity-0 p-5 lg:p-0`
const linksStyles = `border-b-0 border-solid border-orange hover:border-b-4 `
const badgeStyles = `absolute -mt-12 -mr-2 right-0 bg-white text-orange border-red border-solid border-2 rounded-full h-6 w-6 leading-5 pl-1`

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  return (
    <header className={headerStyles}>
      <img src={logo} alt="Keiko Ramen logo" />
      <div className="w-full flex justify-end">
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
          <ul className={ulStyles}>
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

    </header>
  )
}

export default Header
