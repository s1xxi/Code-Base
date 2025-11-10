'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Launch Your SaaS in
            <span className="text-primary"> Minutes</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-base-content/70">
            The complete boilerplate with authentication, payments, and database. 
            Stop building from scratch and start shipping.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#pricing" 
              className="btn btn-primary btn-lg text-lg px-8"
            >
              Get Lifetime Access - $49
            </a>
            <Link 
              href="/auth/login" 
              className="btn btn-outline btn-lg text-lg px-8"
            >
              Sign In
            </Link>
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-base-content/60">
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
              <span>Lifetime access</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Free updates forever</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
