import React from "react"
import subscribe from "../images/subscribe.png"

const Subscribe = () => {
  return (
    <div className="px-0 py-5 sm:p-10 grid md:flex justify-center">
      <div className="relative xl:mx-48">
        <img
          src={subscribe}
          alt="subscribe for deals and offers"
          className="hidden lg:block"
        />
        <h3 className="lg:hidden text-white">
          Subscribe for
          <br />
          deals & offers!
        </h3>
        <div className="grid justify-center lg:absolute email">
          <div className="flex">
            <div className="grid">
              <label htmlFor="email" className="text-white text-xl">
                Enter your email
                <br />
                <input type="email" id="email" name="email" className="p-2" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subscribe
