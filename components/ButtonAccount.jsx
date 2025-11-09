'use client'

import { useSession } from 'next-auth/react'
import { useState } from 'react'

export default function ButtonAccount({ priceId }) {
  const { data: session } = useSession()
  const [isLoading, setIsLoading] = useState(false)

  async function handleCheckout() {
    setIsLoading(true)

    try {
      const res = await fetch('/api/stripe/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId }),
      })

      const { url } = await res.json()

      if (url) {
        window.location.href = url
      }
    } catch (error) {
      console.error('Checkout error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  if (!session) {
    return null
  }

  return (
    <button
      onClick={handleCheckout}
      className={`btn btn-primary ${isLoading ? 'loading' : ''}`}
      disabled={isLoading}
    >
      {isLoading ? 'Loading...' : 'Subscribe'}
    </button>
  )
}

