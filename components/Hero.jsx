'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section className="pt-24 pb-20 px-4 bg-[#e0f2fe]">
      <div className="container mx-auto max-w-4xl text-center">
        {/* Main Headline */}
        <h1 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight text-black">
          Ship your startup in days, not months
        </h1>
        
        {/* Subheadline */}
        <p className="text-lg md:text-xl mb-10 text-black/70 max-w-2xl mx-auto">
          The complete SaaS boilerplate with payments, auth, and database. 
          Stop coding basics, start building your product.
        </p>
        
        {/* CTA Button */}
        <div className="flex flex-col items-center gap-3 mb-10">
          <a 
            href="#pricing" 
            className="btn btn-lg bg-black hover:bg-black/80 text-white border-none px-10"
          >
            Start free trial
          </a>
          <p className="text-black/60 text-sm">
            7-day free trial • No credit card required
          </p>
        </div>

        {/* Social Proof */}
        <div className="flex items-center justify-center gap-3 mt-12">
          <div className="avatar-group -space-x-3">
            <div className="avatar">
              <div className="w-10 h-10 rounded-full bg-black/10"></div>
            </div>
            <div className="avatar">
              <div className="w-10 h-10 rounded-full bg-black/10"></div>
            </div>
            <div className="avatar">
              <div className="w-10 h-10 rounded-full bg-black/10"></div>
            </div>
          </div>
          <p className="text-black/70 text-sm">
            <span className="font-medium text-black">500+</span> founders shipped
          </p>
        </div>
      </div>
    </section>
  )
}
