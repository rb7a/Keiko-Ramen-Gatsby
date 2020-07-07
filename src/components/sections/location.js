import React from 'react'
import map from '../../images/map.png'

const Location = () => {
  return (
    <div className="bg-red px-0 py-5 sm:p-10">
      <div className="rounded-sm bg-white p-0 md:p-10 mx-auto xl:mx-48 grid md:flex">
        <img src={map} alt="map location of Keiko Ramen" className="w-full md:w-1/2 object-cover" />
        <div className="grid w-1/2 justify-center text-orange p-10">
          <h3>Phone</h3>
          <p className="font-heading text-black">(123)555-1234</p>
          <h3>Location</h3>
          <p className="font-heading text-black grid">
            <span>40 Washington Square S</span>
            <span>New York, NY 10012</span>
          </p>
          <h3>Hours</h3>
          <p className="font-heading text-black grid">
            <span>Mon-Fri 11am - midnight</span>
            <span>Sat & Sun 11am - 2am</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Location
