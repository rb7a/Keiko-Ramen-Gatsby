import React from "react"
import map from "../images/map.png"

const Location = () => {
  return (
    <div className="relative bg-red pb-24">
      <div className="rounded-sm bg-white p-0 md:p-10 mx-auto xl:mx-48 grid md:flex">
        <img
          src={map}
          alt="map location of Keiko Ramen"
          className="w-full md:w-1/2 object-cover"
        />
        <div className="px-0 py-5 sm:p-10 grid w-full md:w-1/2 justify-center text-darkOrange">
          <h2>Phone</h2>
          <p className="font-heading text-black text-xl">(123)555-1234</p>
          <h2>Location</h2>
          <p className="font-heading text-black grid text-xl">
            <span>40 Washington Square S</span>
            <span>New York, NY 10012</span>
          </p>
          <h2>Hours</h2>
          <p className="font-heading text-black grid text-xl">
            <span>Mon-Fri 11am - midnight</span>
            <span>Sat & Sun 11am - 2am</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Location
