import React from 'react'
import { Link } from 'gatsby'
import SEO from '../components/seo'

const SuccessPage = () => {
  return (
    <div>
      <SEO title="Thank You | Keiko Ramen" />
      <div className="clear-header grid gap-5 text-center content-start pt-12 pb-64">
        <h1 className='text-red text-5xl xl:text-6xl'>Thank You!</h1>
        <p className="text-md xl:text-xl tracking-widest">Sit back and relax, we are cooking up some delicious ramen for you!</p>
        <Link to='/'><button className="hover:btn-hover border-orange border-2 hover:border-solid ">Go get more ramen</button></Link>
      </div>
    </div>
  )
}

export default SuccessPage
