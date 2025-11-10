'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 bg-gradient-to-br from-ocean-deep via-ocean-blue to-ocean-teal overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-seafoam/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-ocean-teal/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-seafoam/10 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto max-w-5xl text-center relative z-10">
        {/* Main Headline - BOLD & ANIMATED */}
        <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight text-white animate-slide-down">
          Ship Your SaaS
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-seafoam via-ocean-teal to-white animate-pulse-slow">
            In Record Time
          </span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-xl md:text-3xl mb-10 text-seafoam/90 max-w-3xl mx-auto font-medium animate-slide-up">
          Complete SaaS boilerplate with authentication, payments, and database. 
          <span className="text-white font-bold"> Start earning in days, not months.</span>
        </p>
        
        {/* CTA Button - Animated */}
        <div className="flex flex-col items-center gap-4 mb-10 animate-scale-in">
          <a 
            href="#pricing" 
            className="btn btn-lg bg-seafoam hover:bg-seafoam/80 text-ocean-deep border-none text-xl px-12 h-16 font-bold shadow-2xl hover:shadow-seafoam/50 transition-all duration-300 hover:scale-105"
          >
            Start Free Trial
            <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </a>
          <p className="text-seafoam/80 text-lg font-medium">
            ✨ 7-day free trial • No credit card required
          </p>
        </div>

        {/* Social Proof - User Avatars - Animated */}
        <div className="flex items-center justify-center gap-4 mt-12 animate-fade-in">
          <div className="avatar-group -space-x-4">
            <div className="avatar border-2 border-white">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-bold text-lg">
                J
              </div>
            </div>
            <div className="avatar border-2 border-white">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center text-white font-bold text-lg">
                M
              </div>
            </div>
            <div className="avatar border-2 border-white">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-400 flex items-center justify-center text-white font-bold text-lg">
                S
              </div>
            </div>
            <div className="avatar border-2 border-white">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-red-400 flex items-center justify-center text-white font-bold text-lg">
                A
              </div>
            </div>
            <div className="avatar border-2 border-white">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400 flex items-center justify-center text-white font-bold text-lg">
                K
              </div>
            </div>
          </div>
          <p className="text-white font-semibold text-lg">
            <span className="font-black text-seafoam">500+</span> founders already shipped
          </p>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-8 mt-16 text-base text-white/80">
          <div className="flex items-center gap-2 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <svg className="w-6 h-6 text-seafoam" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="font-semibold">7-day free trial</span>
          </div>
          <div className="flex items-center gap-2 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <svg className="w-6 h-6 text-seafoam" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="font-semibold">Cancel anytime</span>
          </div>
          <div className="flex items-center gap-2 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <svg className="w-6 h-6 text-seafoam" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="font-semibold">Deploy in 1 day</span>
          </div>
        </div>
      </div>

      {/* Wave SVG at Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-16 md:h-24 fill-current text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>
    </section>
  )
}
