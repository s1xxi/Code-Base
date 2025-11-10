'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section className="pt-32 pb-24 px-4 bg-[#0c4a6e]">
      <div className="container mx-auto max-w-5xl text-center">
        {/* Main Headline */}
        <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight text-white animate-slide-down">
          Ship your startup in days, not months
        </h1>
        
        {/* Subheadline */}
        <p className="text-xl md:text-3xl mb-12 text-white/80 max-w-3xl mx-auto animate-slide-up font-light">
          The complete SaaS boilerplate with payments, auth, and database. 
          Stop coding basics, start building your product.
        </p>
        
        {/* CTA Button */}
        <div className="flex flex-col items-center gap-4 mb-12 animate-scale-in">
          <a 
            href="#pricing" 
            className="btn btn-lg bg-[#0ea5e9] hover:bg-[#0284c7] text-white border-none text-xl px-12 h-16 font-semibold"
          >
            Start free trial
          </a>
          <p className="text-white/70 text-lg">
            7-day free trial • No credit card required
          </p>
        </div>

        {/* Social Proof */}
        <div className="flex items-center justify-center gap-4 mt-16 animate-fade-in">
          <div className="avatar-group -space-x-4">
            <div className="avatar">
              <div className="w-12 h-12 rounded-full bg-[#0ea5e9]"></div>
            </div>
            <div className="avatar">
              <div className="w-12 h-12 rounded-full bg-[#0284c7]"></div>
            </div>
            <div className="avatar">
              <div className="w-12 h-12 rounded-full bg-[#06b6d4]"></div>
            </div>
            <div className="avatar">
              <div className="w-12 h-12 rounded-full bg-[#0ea5e9]"></div>
            </div>
          </div>
          <p className="text-white/90 text-lg">
            <span className="font-bold">500+</span> founders shipped
          </p>
        </div>
      </div>
    </section>
  )
}
