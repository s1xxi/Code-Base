'use client'

import ButtonAccount from './ButtonAccount'

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-base-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple Pricing
          </h2>
          <p className="text-xl text-base-content/70">
            One payment. Lifetime access. No subscriptions.
          </p>
        </div>
        
        <div className="max-w-lg mx-auto">
          <div className="card bg-base-100 shadow-2xl border-4 border-primary">
            <div className="badge badge-primary badge-lg absolute top-6 right-6">
              Best Value
            </div>
            <div className="card-body items-center text-center p-8">
              <h3 className="card-title text-3xl mb-2">Lifetime Access</h3>
              <div className="py-6">
                <div className="flex items-start justify-center">
                  <span className="text-3xl font-bold mt-2">$</span>
                  <span className="text-7xl font-bold">49</span>
                </div>
                <p className="text-base-content/60 mt-2">one-time payment</p>
              </div>
              
              <ul className="space-y-4 mb-8 text-left w-full">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-success flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-lg">Lifetime access to dashboard</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-success flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-lg">All features included</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-success flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-lg">Free updates forever</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-success flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-lg">24/7 email support</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-success flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-lg">No recurring fees. Ever.</span>
                </li>
              </ul>
              
              <ButtonAccount priceId="one_time" />
              
              <p className="text-sm text-base-content/60 mt-6">
                ✨ Pay once, own it forever. Simple as that.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
