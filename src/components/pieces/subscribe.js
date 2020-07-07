import React from 'react'
import subscribe from '../../images/subscribe.png'
const Subscribe = () => {
  return (
    <div className="px-0 py-5 sm:p-10 grid md:flex justify-center">

      <div className="relative xl:mx-48">
        <img src={subscribe} alt="subscribe for deals and offers" className="hidden lg:block" />
        <h3 className="lg:hidden text-white">Subscribe for<br />deals & offers!</h3>
        <div className="grid justify-center lg:absolute email">

          <div className="flex">
            <div className="grid">
              <label htmlFor="email" className="text-white text-xl">Enter your email<br />
                <input type="email" id="email" name="email" className="p-2" /></label>
            </div>
            <div className="bg-orange p-2 self-end cursor-pointer">
              <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.99718 11.5941L9.72467 12.41L10.4728 11.6129L19 2.52683V17H1V2.62429L8.99718 11.5941ZM2.23131 1H17.6901L9.76251  1Z" stroke="white" stroke-width="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subscribe
