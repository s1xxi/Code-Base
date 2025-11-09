/**
 * PRICING CARD COMPONENT
 * 
 * Purpose: Reusable pricing plan card
 * Usage: Import and use on pricing pages
 * 
 * Features:
 * - Displays plan details
 * - Feature list with checkmarks
 * - Popular badge option
 * - Customizable CTA button
 * 
 * Example:
 * import PricingCard from '@/components/payment/PricingCard'
 * <PricingCard
 *   name="Pro"
 *   price="$99"
 *   features={['Feature 1', 'Feature 2']}
 *   popular={true}
 *   ctaText="Get Started"
 *   ctaLink="/auth/register"
 * />
 * 
 * Props:
 * - name: Plan name (required)
 * - price: Price with currency symbol (required)
 * - features: Array of feature strings (required)
 * - popular: Show popular badge (optional, default: false)
 * - ctaText: Button text (optional, default: 'Get Started')
 * - ctaLink: Button link (optional)
 * - onCtaClick: Button click handler (optional, use instead of ctaLink)
 */

import Link from 'next/link'

export default function PricingCard({
  name,
  price,
  features,
  popular = false,
  ctaText = 'Get Started',
  ctaLink,
  onCtaClick
}) {
  const ButtonOrLink = onCtaClick ? 'button' : Link

  return (
    <div className={`card bg-base-100 shadow-xl ${popular ? 'ring-4 ring-primary' : ''}`}>
      {popular && (
        <div className="badge badge-primary absolute top-4 right-4">Popular</div>
      )}
      
      <div className="card-body">
        {/* Plan Name */}
        <h3 className="card-title text-2xl">{name}</h3>
        
        {/* Price */}
        <div className="my-4">
          <span className="text-5xl font-bold">{price}</span>
          <span className="text-base-content/60">/month</span>
        </div>
        
        {/* Features List */}
        <ul className="space-y-3 mb-6">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2">
              <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              {feature}
            </li>
          ))}
        </ul>
        
        {/* CTA Button */}
        <ButtonOrLink
          href={ctaLink || '#'}
          onClick={onCtaClick}
          className={`btn ${popular ? 'btn-primary' : 'btn-outline'} w-full`}
        >
          {ctaText}
        </ButtonOrLink>
      </div>
    </div>
  )
}

