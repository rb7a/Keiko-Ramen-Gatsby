import React from 'react'
import map from '../../images/map.png'

const Location = () => {
  return (
    <div className="relative bg-red pt-24 ">
      <div className="custom-shape-divider-top-1594131229">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>
      <div className="rounded-sm bg-white p-0 md:p-10 mx-auto xl:mx-48 grid md:flex">

        <img src={map} alt="map location of Keiko Ramen" className="w-full md:w-1/2 object-cover" />
        <div className="px-0 py-5 sm:p-10 grid w-full md:w-1/2 justify-center text-orange p-10">
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
