import React from "react"
import { Link } from 'gatsby'
import logo from "../images/logo.png"
import cart from "../images/cart.png"

const badge = `absolute -mt-12 -mr-3 right-0 bg-white text-orange border-red border-solid border-2 rounded-full h-6 w-6 leading-5 pl-1`

const links = `border-b-0 border-solid border-orange hover:border-b-4`

const Header = () => (
  <header className="flex items-center justify-between bg-red px-10 py-4">
    <img src={logo} alt="Keiko Ramen logo" />
    <nav className="flex items-center">
      <div>
        <Link to='/menu' className={links}>MENU</Link>
      </div>
      <div>
        <Link to='/location' className={links}>LOCATION</Link>
      </div>
      <Link to='/cart'>
        <div className="relative mx-5">
          <img src={cart} alt="shopping cart" />
          <p className={badge}>0</p>
        </div>
      </Link>
      <Link to='/order'>
        <button className="bg-orange rounded-full p-3 hover:text-orange hover:bg-white focus:shadow-outline">ORDER NOW</button>
      </Link>
    </nav>
  </header>
)

export default Header
