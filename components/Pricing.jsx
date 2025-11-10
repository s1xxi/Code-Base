'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false)

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for side projects',
      monthlyPrice: 9.99,
      yearlyPrice: 100,
      features: [
        'Up to 1,000 users',
        'Basic analytics',
        'Email support',
        'API access',
        'Monthly updates',
        'Community support',
      ],
      popular: false,
    },
    {
      name: 'Pro',
      description: 'Best for growing businesses',
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
        'Advanced security',
      ],
      popular: true,
    },
    {
      name: 'Expert',
      description: 'For enterprise & scale',
      monthlyPrice: 29.99,
      yearlyPrice: 320,
      features: [
        'Unlimited users',
        'Real-time analytics',
        '24/7 Premium support',
        'Unlimited API access',
        'Daily updates',
        'White-label options',
        'Dedicated account manager',
        'SLA guarantee',
        'Custom features',
      ],
      popular: false,
    },
  ]

  const calculateSavings = (monthly, yearly) => {
    const monthlyCost = monthly * 12
    const savings = monthlyCost - yearly
    const percentage = Math.round((savings / monthlyCost) * 100)
    return { savings, percentage }
  }

  return (
    <section id="pricing" className="py-24 px-4 bg-gradient-to-br from-white via-sand/30 to-seafoam/10">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-slide-down">
          <h2 className="text-5xl md:text-6xl font-black mb-4 text-ocean-deep">
            Simple, transparent pricing
          </h2>
          <p className="text-xl md:text-2xl text-ocean-blue/80">
            Start with a 7-day free trial. Cancel anytime.
          </p>
        </div>

        {/* Monthly/Yearly Toggle */}
        <div className="flex items-center justify-center gap-4 mb-16 animate-scale-in">
          <span className={`text-lg font-semibold ${!isYearly ? 'text-ocean-deep' : 'text-ocean-blue/60'}`}>
            Monthly
          </span>
          
          <button
            onClick={() => setIsYearly(!isYearly)}
            className="relative w-20 h-10 rounded-full bg-ocean-blue transition-all duration-300 hover:bg-ocean-teal focus:outline-none focus:ring-4 focus:ring-seafoam/50"
          >
            <div
              className={`absolute top-1 left-1 w-8 h-8 bg-white rounded-full shadow-lg transition-transform duration-300 ease-in-out ${
                isYearly ? 'transform translate-x-10' : ''
              }`}
            ></div>
          </button>
          
          <span className={`text-lg font-semibold ${isYearly ? 'text-ocean-deep' : 'text-ocean-blue/60'}`}>
            Yearly
          </span>
          
          {isYearly && (
            <span className="badge badge-lg bg-seafoam text-ocean-deep border-none font-bold animate-bounce">
              Save up to 47%!
            </span>
          )}
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const { savings, percentage } = calculateSavings(plan.monthlyPrice, plan.yearlyPrice)
            
            return (
              <div
                key={index}
                className={`card bg-white shadow-2xl hover:shadow-seafoam/30 transition-all duration-300 hover:scale-105 animate-slide-up ${
                  plan.popular ? 'border-4 border-ocean-teal relative' : 'border border-ocean-blue/20'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="badge badge-lg bg-gradient-to-r from-ocean-teal to-seafoam text-white border-none px-6 py-4 font-bold shadow-lg">
                      🔥 MOST POPULAR
                    </div>
                  </div>
                )}

                <div className="card-body p-8">
                  <h3 className="text-3xl font-black text-ocean-deep mb-2">{plan.name}</h3>
                  <p className="text-ocean-blue/70 mb-6">{plan.description}</p>

                  {/* Price Display */}
                  <div className="py-6 border-b border-ocean-blue/10">
                    <div className="flex items-start justify-center mb-2">
                      <span className="text-3xl font-bold text-ocean-deep mt-2">$</span>
                      <span className="text-6xl font-black text-ocean-deep">
                        {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                      </span>
                    </div>
                    <p className="text-ocean-blue/60 text-center">
                      {isYearly ? 'per year' : 'per month'}
                    </p>
                    {isYearly && (
                      <p className="text-seafoam font-bold text-center mt-2 animate-pulse">
                        Save ${savings.toFixed(0)} ({percentage}% off)
                      </p>
                    )}
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3 my-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-seafoam flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-ocean-deep/80">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Link
                    href="/auth/register"
                    className={`btn btn-lg w-full text-lg font-bold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-ocean-teal to-seafoam text-white border-none hover:shadow-xl hover:scale-105'
                        : 'btn-outline border-2 border-ocean-blue text-ocean-blue hover:bg-ocean-blue hover:text-white'
                    }`}
                  >
                    Start Free Trial
                  </Link>

                  <p className="text-center text-sm text-ocean-blue/60 mt-4">
                    7-day free trial • No credit card required
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Trust Section */}
        <div className="text-center mt-20 animate-fade-in">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="avatar-group -space-x-4">
              <div className="avatar border-2 border-ocean-blue">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-bold">
                  J
                </div>
              </div>
              <div className="avatar border-2 border-ocean-blue">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center text-white font-bold">
                  M
                </div>
              </div>
              <div className="avatar border-2 border-ocean-blue">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-400 flex items-center justify-center text-white font-bold">
                  S
                </div>
              </div>
            </div>
            <p className="text-ocean-deep font-semibold text-lg">
              <span className="font-black text-ocean-teal">500+ founders</span> already shipped with this
            </p>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-ocean-blue/70">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-seafoam" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
              </svg>
              <span>Secure payment</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-seafoam" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
              </svg>
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-seafoam" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
              </svg>
              <span>No setup fees</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
