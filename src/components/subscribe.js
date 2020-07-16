import React, { useState } from "react"
import subscribe from "../images/subscribe.png"

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [isSuccessful, setSuccessful] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false)
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
            <form
              className="grid gap-2 "
              onSubmit={async e => {
                e.preventDefault();
                setIsSubmitting(true);
                const res = await fetch(
                  `https://app.convertkit.com/forms/${process.env.GATSBY_CONVERTKIT_FORM_ID}/subscriptions`,
                  {
                    method: "post",
                    body: JSON.stringify(
                      {
                        email_address: email
                      },
                      null,
                      2
                    ),
                    headers: {
                      Accept: "application/json",
                      "Content-Type": "application/json"
                    }
                  }
                ).then(r => r.json());
                setIsSubmitting(false);
                setSuccessful(res)
                if (res.status === "failed") {
                  console.error(res);
                }
              }}>
              <label htmlFor="email" className="text-white text-xl">
                Enter your email
                <br />
                <input
                  className="p-2"
                  aria-label="your email address"
                  aria-required="true"
                  name="email_address"
                  placeholder="keiko@ramen.com"
                  value={email}
                  type="email"
                  id="email"
                  onChange={e => {
                    setEmail(e.target.value);
                  }}
                />
              </label>
              <button
                className="hover:btn-hover"
                data-element="submit"
                type="submit"
                disabled={isSubmitting}
              >
                {!isSubmitting && "Subscribe"}
                {isSubmitting && "Submitting..."}
              </button>
              <p
                className={isSuccessful.status ? 'flex text-white text-xs' : 'hidden'}>{isSuccessful.status && `Thank you for subscribing ${email}!`}
              </p>
            </form>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Subscribe
