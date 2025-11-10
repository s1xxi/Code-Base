'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 bg-base-100">
      <div className="container mx-auto max-w-4xl text-center">
        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Ship your startup in days, not months
        </h1>
        
        {/* Subheadline */}
        <p className="text-xl md:text-2xl mb-8 text-base-content/70 max-w-2xl mx-auto">
          The complete SaaS boilerplate with payments, auth, and database. 
          Stop coding basics, start building your idea.
        </p>
        
        {/* CTA Button */}
        <div className="flex flex-col items-center gap-4 mb-8">
          <a 
            href="#pricing" 
            className="btn btn-primary btn-lg text-lg px-10 h-16"
          >
            Get Lifetime Access
          </a>
          <p className="text-sm text-base-content/60">
            One-time payment. No subscription.
          </p>
        </div>

        {/* Social Proof - User Avatars */}
        <div className="flex items-center justify-center gap-4 mt-12">
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
            <div className="avatar">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">
                K
              </div>
            </div>
          </div>
          <p className="text-base-content/70">
            <span className="font-bold">200+</span> founders shipped
          </p>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-base-content/60">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>One-time payment</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Lifetime updates</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Ship in 1 day</span>
          </div>
        </div>
      </div>
    </section>
  )
}
