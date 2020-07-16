import React, { useState, useEffect } from "react"
import Header from "../components/layout/header"
import Footer from "../components/layout/footer"

import '@stripe/stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { CartProvider } from 'use-shopping-cart'

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY)

const Layout = ({ children }) => {
  const [url, setUrl] = useState()
  useEffect(() => {
    setUrl(window.location.origin)
  }, [])

  return (
    <CartProvider
      mode="client-only"
      stripe={stripePromise}
      successUrl={url ? `${url}/success/` : `loading`}
      cancelUrl={url ? `${url}/` : `loading`}
      currency="USD"
      allowedCountries={['US', 'GB', 'CA']}
      billingAddressCollection={true}
    >
      <Header />
      <main className="h-full relative">
        <div>{children}</div>
        <div className="relative">
          <Footer />
        </div>
      </main>
    </CartProvider>
  )
}

export default Layout

