'use client'

import ButtonAccount from './ButtonAccount'

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-4 bg-base-200">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-base-content/70">
            One payment. Lifetime access. No subscriptions.
          </p>
        </div>
        
        <div className="max-w-xl mx-auto">
          <div className="card bg-base-100 shadow-2xl border-4 border-primary relative overflow-visible">
            {/* Floating Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="badge badge-primary badge-lg px-6 py-4 text-sm font-bold shadow-lg">
                🔥 BEST VALUE
              </div>
            </div>

            <div className="card-body items-center text-center p-8 md:p-12">
              <h3 className="text-3xl font-bold mb-2">Lifetime Access</h3>
              <p className="text-base-content/60 mb-6">Everything you need to launch your SaaS</p>
              
              {/* Price */}
              <div className="py-8">
                <div className="flex items-start justify-center mb-2">
                  <span className="text-4xl font-bold mt-2">$</span>
                  <span className="text-8xl font-bold">49</span>
                </div>
                <p className="text-base-content/60 text-lg">one-time payment</p>
              </div>
              
              {/* Features List */}
              <ul className="space-y-4 mb-8 text-left w-full max-w-md">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-success flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <span className="font-semibold text-lg">Complete Next.js codebase</span>
                    <p className="text-sm text-base-content/60">Production-ready and fully customizable</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-success flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <span className="font-semibold text-lg">Auth + Payments + Database</span>
                    <p className="text-sm text-base-content/60">Email, Google OAuth, Stripe, MongoDB</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-success flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <span className="font-semibold text-lg">Lifetime updates</span>
                    <p className="text-sm text-base-content/60">Get all future improvements for free</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-success flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <span className="font-semibold text-lg">Unlimited projects</span>
                    <p className="text-sm text-base-content/60">Use for as many SaaS products as you want</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-success flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <span className="font-semibold text-lg">Email support</span>
                    <p className="text-sm text-base-content/60">Get help when you need it</p>
                  </div>
                </li>
              </ul>
              
              {/* CTA Button */}
              <ButtonAccount priceId="one_time" />
              
              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center gap-4 mt-8 text-sm text-base-content/60">
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                  </svg>
                  <span>Secure payment</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                  </svg>
                  <span>7-day refund</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                  </svg>
                  <span>Instant access</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="text-center mt-12">
            <div className="flex items-center justify-center gap-4">
              <div className="avatar-group -space-x-4">
                <div className="avatar">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                    J
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                    M
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white font-bold">
                    S
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white font-bold">
                    A
                  </div>
                </div>
              </div>
              <p className="text-base-content/70">
                <span className="font-bold">200+ founders</span> already shipped with this
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
