export default function HowItWorks() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20 animate-slide-down">
          <h2 className="text-5xl md:text-6xl font-black mb-4 text-ocean-deep">
            How it works?
          </h2>
          <p className="text-xl text-ocean-blue/70">
            Get started in 3 simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Step 1 */}
          <div className="text-center group animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="mb-6 flex justify-center">
              <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-ocean-teal to-seafoam flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
              </div>
            </div>
            <div className="inline-block px-4 py-1 bg-ocean-blue/10 rounded-full text-ocean-teal font-bold mb-3">
              STEP 1
            </div>
            <h3 className="text-2xl font-black mb-3 text-ocean-deep">Sign up free</h3>
            <p className="text-ocean-blue/70 text-lg leading-relaxed">
              Start your 7-day free trial. No credit card required. Set up your account in under 2 minutes.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center group animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="mb-6 flex justify-center">
              <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-ocean-blue to-ocean-teal flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
            </div>
            <div className="inline-block px-4 py-1 bg-ocean-blue/10 rounded-full text-ocean-teal font-bold mb-3">
              STEP 2
            </div>
            <h3 className="text-2xl font-black mb-3 text-ocean-deep">Customize & build</h3>
            <p className="text-ocean-blue/70 text-lg leading-relaxed">
              Clone the code, add your branding, and build your unique features. Deploy in one click.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center group animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="mb-6 flex justify-center">
              <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-seafoam to-ocean-teal flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
            </div>
            <div className="inline-block px-4 py-1 bg-ocean-blue/10 rounded-full text-ocean-teal font-bold mb-3">
              STEP 3
            </div>
            <h3 className="text-2xl font-black mb-3 text-ocean-deep">Launch & earn</h3>
            <p className="text-ocean-blue/70 text-lg leading-relaxed">
              Go live on Vercel. Start accepting payments. Scale your SaaS and grow your revenue.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-scale-in">
          <a 
            href="#pricing" 
            className="btn btn-lg bg-gradient-to-r from-ocean-teal to-seafoam text-white border-none text-xl px-10 hover:shadow-xl hover:scale-105 transition-all duration-300 font-bold"
          >
            Start Your Free Trial
          </a>
        </div>
      </div>
    </section>
  )
}
