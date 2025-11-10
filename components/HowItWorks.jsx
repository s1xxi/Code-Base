export default function HowItWorks() {
  return (
    <section className="py-20 px-4 bg-[#e0f2fe]">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-3 text-black">
            How it works?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Step 1 */}
          <div className="text-center">
            <div className="text-6xl font-semibold text-black/20 mb-4">1</div>
            <h3 className="text-xl font-semibold mb-3 text-black">Sign up free</h3>
            <p className="text-black/60">
              Start your 7-day free trial. No credit card required. Set up in under 2 minutes.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="text-6xl font-semibold text-black/20 mb-4">2</div>
            <h3 className="text-xl font-semibold mb-3 text-black">Customize & build</h3>
            <p className="text-black/60">
              Clone the code, add your branding, build your features. Deploy in one click.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="text-6xl font-semibold text-black/20 mb-4">3</div>
            <h3 className="text-xl font-semibold mb-3 text-black">Launch & earn</h3>
            <p className="text-black/60">
              Go live. Start accepting payments. Scale your SaaS and grow your revenue.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a 
            href="#pricing" 
            className="btn btn-lg bg-black hover:bg-black/80 text-white border-none px-10"
          >
            Start free trial
          </a>
        </div>
      </div>
    </section>
  )
}
