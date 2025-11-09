/**
 * CHECKOUT BUTTON COMPONENT (STRIPE)
 * 
 * Purpose: Reusable Stripe checkout button
 * Usage: Import and use on pricing pages or upgrade prompts
 * 
 * Features:
 * - Creates Stripe checkout session
 * - Handles loading state
 * - Redirects to Stripe checkout
 * - Error handling
 * 
 * Example:
 * import CheckoutButton from '@/components/payment/CheckoutButton'
 * <CheckoutButton priceId="price_123abc" planName="Pro" />
 * 
 * Props:
 * - priceId: Stripe price ID (required)
 * - planName: Display name of plan (optional)
 * - className: Additional CSS classes (optional)
 * - onSuccess: Callback when checkout starts (optional)
 * - onError: Callback on error (optional)
 */

'use client'

import { useSession } from 'next-auth/react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function CheckoutButton({ 
  priceId,
  planName = 'Premium',
  className = '',
  onSuccess,
  onError
}) {
  const { data: session } = useSession()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  async function handleCheckout() {
    // Require login
    if (!session) {
      router.push('/auth/login')
      return
    }

    setIsLoading(true)

    try {
      const res = await fetch('/api/stripe/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Failed to create checkout')
      }

      if (data.url) {
        if (onSuccess) onSuccess()
        window.location.href = data.url // Redirect to Stripe
      }
    } catch (error) {
      console.error('Checkout error:', error)
      if (onError) onError(error.message)
      alert('Failed to start checkout. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <button
      onClick={handleCheckout}
      className={`btn btn-primary ${isLoading ? 'loading' : ''} ${className}`}
      disabled={isLoading}
    >
      {isLoading ? 'Loading...' : `Subscribe to ${planName}`}
    </button>
  )
}

