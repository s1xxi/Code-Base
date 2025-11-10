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
    <section id="pricing" className="py-24 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-slide-down">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-[#0c4a6e]">
            Simple pricing
          </h2>
          <p className="text-xl text-[#0c4a6e]/70">
            7-day free trial • Cancel anytime
          </p>
        </div>

        {/* Monthly/Yearly Toggle */}
        <div className="flex items-center justify-center gap-4 mb-16 animate-scale-in">
          <span className={`text-lg font-semibold ${!isYearly ? 'text-[#0c4a6e]' : 'text-[#0c4a6e]/40'}`}>
            Monthly
          </span>
          
          <button
            onClick={() => setIsYearly(!isYearly)}
            className="relative w-20 h-10 rounded-full bg-[#0c4a6e] transition-all duration-300"
          >
            <div
              className={`absolute top-1 left-1 w-8 h-8 bg-white rounded-full shadow-lg transition-transform duration-300 ${
                isYearly ? 'transform translate-x-10' : ''
              }`}
            ></div>
          </button>
          
          <span className={`text-lg font-semibold ${isYearly ? 'text-[#0c4a6e]' : 'text-[#0c4a6e]/40'}`}>
            Yearly
          </span>
          
          {isYearly && (
            <span className="badge badge-lg bg-[#0ea5e9] text-white border-none font-semibold">
              Save up to 47%
            </span>
          )}
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`card bg-white shadow-xl hover:shadow-2xl transition-all duration-300 animate-slide-up ${
                plan.popular ? 'border-4 border-[#0ea5e9]' : 'border border-[#0c4a6e]/20'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="badge badge-lg bg-[#0ea5e9] text-white border-none absolute -top-3 left-1/2 transform -translate-x-1/2 font-bold px-6">
                  MOST POPULAR
                </div>
              )}

              <div className="card-body p-8">
                <h3 className="text-3xl font-bold text-[#0c4a6e] mb-2">{plan.name}</h3>
                <p className="text-[#0c4a6e]/60 mb-6">{plan.description}</p>

                {/* Price */}
                <div className="py-6 border-b border-[#0c4a6e]/10">
                  <div className="flex items-start justify-center mb-2">
                    <span className="text-3xl font-bold text-[#0c4a6e] mt-2">$</span>
                    <span className="text-6xl font-bold text-[#0c4a6e]">
                      {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                  </div>
                  <p className="text-[#0c4a6e]/60 text-center">
                    {isYearly ? 'per year' : 'per month'}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-3 my-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="text-[#0c4a6e]/80">
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href="/auth/register"
                  className={`btn btn-lg w-full text-lg font-semibold ${
                    plan.popular
                      ? 'bg-[#0ea5e9] hover:bg-[#0284c7] text-white border-none'
                      : 'btn-outline border-2 border-[#0c4a6e] text-[#0c4a6e] hover:bg-[#0c4a6e] hover:text-white'
                  }`}
                >
                  Start free trial
                </Link>

                <p className="text-center text-sm text-[#0c4a6e]/60 mt-4">
                  7-day free trial • No card required
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust */}
        <div className="text-center mt-20 animate-fade-in">
          <div className="flex items-center justify-center gap-4">
            <div className="avatar-group -space-x-4">
              <div className="avatar">
                <div className="w-10 h-10 rounded-full bg-[#0ea5e9]"></div>
              </div>
              <div className="avatar">
                <div className="w-10 h-10 rounded-full bg-[#0284c7]"></div>
              </div>
              <div className="avatar">
                <div className="w-10 h-10 rounded-full bg-[#06b6d4]"></div>
              </div>
            </div>
            <p className="text-[#0c4a6e]/70">
              <span className="font-bold text-[#0c4a6e]">500+</span> founders already shipped
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
