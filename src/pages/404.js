import React from "react"
import { Link } from 'gatsby'
import SEO from "../components/seo"

const NotFoundPage = () => (
  <div>
    <SEO title="404: Not found | Keiko Ramen" />
    <div className="clear-header grid gap-5 text-center content-start pt-12 pb-64">
      <h1 className='text-red text-5xl xl:text-6xl'>NOT FOUND</h1>
      <p className="text-md xl:text-xl tracking-widest">You just hit a route that doesn&#39;t exist... the sadness.</p>
      <Link to='/'><button className="hover:btn-hover border-orange border-2 hover:border-solid ">Go get more ramen</button></Link>
    </div>
  </div>
)

export default NotFoundPage
