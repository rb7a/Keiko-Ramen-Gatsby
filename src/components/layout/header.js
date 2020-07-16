import React, { useState, useEffect, useRef } from "react"
import { Link } from 'gatsby'
import { useShoppingCart } from 'use-shopping-cart'
import logo from "../../images/logo.png"
import cart from "../../images/cart.png"

const headerStyles = `fixed top-0 w-full h-125 z-20 bg-red`
const stickyHeader = `fixed top-0 w-full h-16 z-20 bg-darkRed bg-opacity-90 shadow-lg`
const headerWrapper = `relative z-10 flex items-center justify-between px-10 py-4`
const mobileNavBtn = `bg-transparent z-10 mt-2 relative text-white cursor-pointer text-xl leading-none rounded bg-transparent  block lg:hidden outline-none focus:outline-none focus:shadow-none`
const navBtnScroll = `py-0 bg-transparent z-10 mt-2 relative text-white cursor-pointer text-xl leading-none rounded bg-transparent  block lg:hidden outline-none focus:outline-none focus:shadow-none`
const hamburgerMenu = `grid h-1 w-10 relative mb-2 bg-white rounded z-10`
const menuStyles = `mobile-menu rounded-md border-solid border-black border-4 lg:border-none relative top-125 lg:top-0 mr-0 lg:mr-12 grid lg:flex items-center lg:bg-opacity-0 p-2 lg:p-0`
const linksStyles = `text-white border-b-0 border-solid border-orange hover:border-b-4 `
const badgeStyles = `absolute -mt-12 -mr-2 right-0 bg-white text-orange border-red border-solid border-2 rounded-full h-6 w-6 leading-5 pl-1`
const lgBadgeStyles = `absolute -mt-12 -mr-2 right-0 bg-white text-orange text-xs border-red border-solid border-2 rounded-full h-6 w-6 leading-5 pl-2px`

const Header = () => {
  const ref = useRef();
  const [navOpen, setNavOpen] = useState(false)
  const [isTop, setIsTop] = useState(true)
  useOnClickOutside(ref, () => setNavOpen(false))
  const { cartCount } = useShoppingCart()

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
          <img src={logo} alt="Keiko Ramen logo" className={isTop ? 'flex' : 'hidden'} />
        </Link>
        <div className="w-full flex justify-end items-center">
          <button
            className={isTop ? mobileNavBtn : navBtnScroll}
            aria-label="menu"
            onClick={() => setNavOpen(true)}
          >
            <div>
              <span className={hamburgerMenu}></span>
              <span className={hamburgerMenu}></span>
              <span className={hamburgerMenu}></span>
            </div>
          </button>
          <nav
            ref={ref}
            className={
              "absolute lg:flex flex-grow items-center" +
              (navOpen ? "grid" : " hidden")
            }
          >
            <ul className={menuStyles}>
              <li>
                <Link to='/' className={linksStyles} onClick={() => setNavOpen(false)}>HOME</Link>
              </li>
              <li>
                <Link to='/menu' className={linksStyles} onClick={() => setNavOpen(false)}>MENU</Link>
              </li>
              <li>
                <Link to='/location' className={linksStyles} onClick={() => setNavOpen(false)}>LOCATION</Link>
              </li>
              <li>
                <Link to='/order-now' onClick={() => setNavOpen(false)}>
                  <button className="ml-1 mr-2 hover:btn-hover">ORDER NOW</button>
                </Link>
              </li>
            </ul>
          </nav>
          <Link to='/cart' className="relative">
            <img src={cart} alt="shopping cart" />
            <p className={cartCount < 10 ? badgeStyles : lgBadgeStyles}>{cartCount}</p>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header

function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]
  )
}