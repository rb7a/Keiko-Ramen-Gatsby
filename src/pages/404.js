import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found | Keiko Ramen" />
    <div className="relative bg-clear-top grid gap-5 text-center items-center content-center mt-24">
      <h1 className='text-red'>NOT FOUND</h1>
      <p className="text-xl tracking-widest">You just hit a route that doesn&#39;t exist... the sadness.</p>
      <Link to='/'><button className="hover:btn-hover border-orange border-2 hover:border-solid ">Go get more ramen</button></Link>
    </div>
  </Layout>
)

export default NotFoundPage
