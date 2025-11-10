export default function HowItWorks() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20 animate-slide-down">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-[#0c4a6e]">
            How it works?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Step 1 */}
          <div className="text-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="text-8xl font-bold text-[#0ea5e9] mb-6">1</div>
            <h3 className="text-2xl font-bold mb-4 text-[#0c4a6e]">Sign up free</h3>
            <p className="text-[#0c4a6e]/70 text-lg">
              Start your 7-day free trial. No credit card required. Set up in under 2 minutes.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-8xl font-bold text-[#0284c7] mb-6">2</div>
            <h3 className="text-2xl font-bold mb-4 text-[#0c4a6e]">Customize & build</h3>
            <p className="text-[#0c4a6e]/70 text-lg">
              Clone the code, add your branding, build your features. Deploy in one click.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="text-8xl font-bold text-[#06b6d4] mb-6">3</div>
            <h3 className="text-2xl font-bold mb-4 text-[#0c4a6e]">Launch & earn</h3>
            <p className="text-[#0c4a6e]/70 text-lg">
              Go live. Start accepting payments. Scale your SaaS and grow your revenue.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-scale-in">
          <a 
            href="#pricing" 
            className="btn btn-lg bg-[#0ea5e9] hover:bg-[#0284c7] text-white border-none text-xl px-10"
          >
            Start free trial
          </a>
        </div>
      </div>
    </section>
  )
}
