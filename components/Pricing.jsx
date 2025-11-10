'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false)

  const plans = [
    {
      name: 'Starter',
      description: 'For side projects',
      monthlyPrice: 9.99,
      yearlyPrice: 100,
      features: [
        'Up to 1,000 users',
        'Basic analytics',
        'Email support',
        'API access',
        'Monthly updates',
      ],
    },
    {
      name: 'Pro',
      description: 'For growing businesses',
      monthlyPrice: 19.99,
      yearlyPrice: 220,
      features: [
        'Up to 10,000 users',
        'Advanced analytics',
        'Priority support',
        'API access',
        'Weekly updates',
        'Custom integrations',
        'Team collaboration',
      ],
      popular: true,
    },
    {
      name: 'Expert',
      description: 'For enterprises',
      monthlyPrice: 29.99,
      yearlyPrice: 320,
      features: [
        'Unlimited users',
        'Real-time analytics',
        '24/7 Premium support',
        'Unlimited API',
        'Daily updates',
        'White-label',
        'Account manager',
        'SLA guarantee',
      ],
    },
  ]

  return (
    <section id="pricing" className="py-20 px-4 bg-[#e0f2fe]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold mb-3 text-black">
            Simple pricing
          </h2>
          <p className="text-black/60">
            7-day free trial • Cancel anytime
          </p>
        </div>

        {/* Monthly/Yearly Toggle */}
        <div className="flex items-center justify-center gap-4 mb-14">
          <span className={`text-sm font-medium ${!isYearly ? 'text-black' : 'text-black/40'}`}>
            Monthly
          </span>
          
          <button
            onClick={() => setIsYearly(!isYearly)}
            className="relative w-16 h-8 rounded-full bg-black/10 transition-all duration-300"
          >
            <div
              className={`absolute top-1 left-1 w-6 h-6 bg-black rounded-full shadow transition-transform duration-300 ${
                isYearly ? 'transform translate-x-8' : ''
              }`}
            ></div>
          </button>
          
          <span className={`text-sm font-medium ${isYearly ? 'text-black' : 'text-black/40'}`}>
            Yearly
          </span>
          
          {isYearly && (
            <span className="badge bg-black text-white border-none font-normal text-xs">
              Save up to 47%
            </span>
          )}
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`card bg-white/50 border hover:bg-white/70 transition-colors duration-200 ${
                plan.popular ? 'border-black' : 'border-black/10'
              }`}
            >
              {plan.popular && (
                <div className="badge bg-black text-white border-none absolute -top-2 left-1/2 transform -translate-x-1/2 font-normal text-xs px-3">
                  MOST POPULAR
                </div>
              )}

              <div className="card-body p-6">
                <h3 className="text-xl font-semibold text-black mb-1">{plan.name}</h3>
                <p className="text-black/50 text-sm mb-4">{plan.description}</p>

                {/* Price */}
                <div className="py-4 border-b border-black/5">
                  <div className="flex items-start justify-center mb-1">
                    <span className="text-2xl font-semibold text-black mt-1">$</span>
                    <span className="text-4xl font-semibold text-black">
                      {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                  </div>
                  <p className="text-black/50 text-center text-sm">
                    {isYearly ? 'per year' : 'per month'}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-2 my-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="text-black/60 text-sm">
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href="/auth/register"
                  className={`btn w-full font-normal ${
                    plan.popular
                      ? 'bg-black hover:bg-black/80 text-white border-none'
                      : 'btn-outline border border-black/20 text-black hover:bg-black/5'
                  }`}
                >
                  Start free trial
                </Link>

                <p className="text-center text-xs text-black/40 mt-3">
                  7-day free trial • No card required
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust */}
        <div className="text-center mt-16">
          <div className="flex items-center justify-center gap-3">
            <div className="avatar-group -space-x-3">
              <div className="avatar">
                <div className="w-8 h-8 rounded-full bg-black/10"></div>
              </div>
              <div className="avatar">
                <div className="w-8 h-8 rounded-full bg-black/10"></div>
              </div>
              <div className="avatar">
                <div className="w-8 h-8 rounded-full bg-black/10"></div>
              </div>
            </div>
            <p className="text-black/60 text-sm">
              <span className="font-medium text-black">500+</span> founders already shipped
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
