'use client'

import Link from 'next/link'

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$29',
      priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_STARTER,
      features: [
        'Up to 1,000 users',
        'Basic analytics',
        'Email support',
        'API access',
        'Monthly updates'
      ],
      popular: false
    },
    {
      name: 'Pro',
      price: '$99',
      priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_PRO,
      features: [
        'Unlimited users',
        'Advanced analytics',
        'Priority support',
        'API access',
        'Weekly updates',
        'Custom integrations',
        'Team collaboration'
      ],
      popular: true
    }
  ]

  return (
    <section id="pricing" className="py-24 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-base-content/70">
            Choose the plan that works for you
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`card bg-base-100 shadow-xl ${plan.popular ? 'ring-4 ring-primary' : ''}`}
            >
              {plan.popular && (
                <div className="badge badge-primary absolute top-4 right-4">Popular</div>
              )}
              <div className="card-body">
                <h3 className="card-title text-2xl">{plan.name}</h3>
                <div className="my-4">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-base-content/60">/month</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  href="/auth/register" 
                  className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline'} w-full`}
                >
                  Get Started
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

