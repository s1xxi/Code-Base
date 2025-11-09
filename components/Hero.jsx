import Link from 'next/link'

export default function Hero() {
  return (
    <section className="hero min-h-[90vh] bg-gradient-to-br from-primary/10 to-secondary/10">
      <div className="hero-content text-center">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Build Your SaaS Faster
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-base-content/80">
            Skip the boring stuff. Ship your product in days, not months. 
            Complete authentication, payments, and database setup included.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/auth/register" className="btn btn-primary btn-lg">
              Get Started Free
            </Link>
            <Link href="#pricing" className="btn btn-outline btn-lg">
              View Pricing
            </Link>
          </div>
          <div className="mt-12 flex gap-8 justify-center text-sm">
            <div className="stat place-items-center">
              <div className="stat-value text-primary">5 min</div>
              <div className="stat-desc">Setup Time</div>
            </div>
            <div className="stat place-items-center">
              <div className="stat-value text-secondary">100%</div>
              <div className="stat-desc">Type Safe</div>
            </div>
            <div className="stat place-items-center">
              <div className="stat-value text-accent">∞</div>
              <div className="stat-desc">Possibilities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

