'use client'

import { useSession } from 'next-auth/react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function ButtonAccount({ priceId }) {
  const { data: session } = useSession()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  async function handleCheckout() {
    // If not logged in, redirect to register
    if (!session) {
      router.push('/auth/register')
      return
    }

    setIsLoading(true)

    try {
      // Use environment variable for price ID
      const actualPriceId = process.env.NEXT_PUBLIC_STRIPE_PRICE_LIFETIME || priceId
      
      const res = await fetch('/api/stripe/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId: actualPriceId }),
      })

      const { url, error } = await res.json()

      if (error) {
        alert(error)
        setIsLoading(false)
        return
      }

      if (url) {
        window.location.href = url
      }
    } catch (error) {
      console.error('Checkout error:', error)
      alert('Something went wrong. Please try again.')
      setIsLoading(false)
    }
  }

  return (
    <button
      onClick={handleCheckout}
      className={`btn btn-primary btn-lg w-full ${isLoading ? 'loading' : ''}`}
      disabled={isLoading}
    >
      {isLoading ? 'Loading...' : session ? 'Get Lifetime Access - $49' : 'Get Started - $49'}
    </button>
  )
}
