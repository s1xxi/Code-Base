'use client'

import { useState } from 'react'
import Link from 'next/link'

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for getting started',
      monthlyPrice: 9.99,
      yearlyPrice: 100,
    features: ['Up to 1,000 users', 'Basic analytics', 'Email support', 'API access', 'Monthly updates'],
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

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section id="pricing" className="relative overflow-hidden bg-[#010615] px-4 py-24 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-base font-semibold uppercase tracking-[0.5em] text-white/80">Pricing</p>
          <h2 className="mt-3 text-4xl font-semibold leading-tight text-white">Simple pricing for serious launches</h2>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <span className={`text-base font-medium ${!isYearly ? 'text-white' : 'text-white/40'}`}>Monthly</span>
          <button
            type="button"
            onClick={() => setIsYearly(!isYearly)}
            className="relative h-8 w-16 rounded-full bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <span
              className={`absolute top-1 left-1 h-6 w-6 rounded-full bg-white shadow transition-transform ${
                isYearly ? 'translate-x-8' : 'translate-x-0'
              }`}
            ></span>
          </button>
          <span className={`text-base font-medium ${isYearly ? 'text-white' : 'text-white/40'}`}>Yearly</span>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {plans.map((plan) => {
            const isPro = plan.name === 'Pro'
            const isExpert = plan.name === 'Expert'
            // Light blue for Starter, medium blue for Pro, dark blue for Expert
            const borderColor = isExpert ? '#1e40af' : isPro ? '#3b82f6' : '#60a5fa' // dark blue, medium blue, light blue
            const glowColor = isExpert ? 'rgba(30,64,175,0.6)' : isPro ? 'rgba(59,130,246,0.6)' : 'rgba(96,165,250,0.6)'
            
            return (
              <div key={plan.name} className="group relative rounded-[34px] bg-gradient-to-br from-[#090c16] via-[#040406] to-[#050507] p-[3px] shadow-[0_35px_130px_rgba(0,0,0,0.7)]">
                <div 
                  className="pointer-events-none absolute inset-0 rounded-[34px] border-[3px] transition-all duration-500"
              style={{
                    borderColor: borderColor
                  }}
                >
                  <div 
                    className="absolute inset-0 rounded-[34px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{ 
                      boxShadow: `0 0 20px ${glowColor}, 0 0 40px ${glowColor}, 0 0 60px ${glowColor}`
              }}
                  ></div>
                  <div 
                    className="absolute inset-[5%] rounded-[30px] blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-60" 
                    style={{ 
                      background: `radial-gradient(circle,${glowColor},transparent_70%)`
                    }}
                  ></div>
                </div>
                <div className="relative h-full rounded-[32px] bg-[#010615] p-8 text-white">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-semibold text-white">{plan.name}</h3>
                    {plan.popular && <span className="rounded-full bg-white/10 px-3 py-1 text-base text-white">Popular</span>}
                </div>
                  <p className="mt-2 text-base font-medium text-white/70">{plan.description}</p>
                  <div className="mt-8 flex items-end gap-2">
                    <span className="text-5xl font-semibold text-white">
                      ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-base text-white/70">{isYearly ? '/yr' : '/mo'}</span>
                </div>

                  <ul className="mt-8 space-y-3 text-base font-medium text-white/80">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span className="text-blue-200">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                    href={`/checkout?plan=${encodeURIComponent(plan.name)}&period=${isYearly ? 'yearly' : 'monthly'}&price=${(isYearly ? plan.yearlyPrice : plan.monthlyPrice).toFixed ? (isYearly ? plan.yearlyPrice : plan.monthlyPrice).toFixed(2) : isYearly ? plan.yearlyPrice : plan.monthlyPrice}`}
                    className="btn mt-10 w-full border border-white/30 bg-white/10 text-white hover:bg-white/20"
                >
                  Get Started
                </Link>
        </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

