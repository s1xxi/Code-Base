'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function PaymentSuccessHandler() {
  const router = useRouter()
  const [checking, setChecking] = useState(true)
  const [attempts, setAttempts] = useState(0)
  const maxAttempts = 10

  useEffect(() => {
    // Poll for access every 2 seconds after payment
    const interval = setInterval(async () => {
      setAttempts(prev => prev + 1)

      try {
        const res = await fetch('/api/user')
        if (res.ok) {
          const data = await res.json()
          if (data.user?.hasAccess) {
            // User now has access! Reload the page
            setChecking(false)
            clearInterval(interval)
            router.refresh()
          }
        }
      } catch (error) {
        console.error('Error checking access:', error)
      }

      // Stop checking after max attempts
      if (attempts >= maxAttempts) {
        setChecking(false)
        clearInterval(interval)
      }
    }, 2000)

    return () => clearInterval(interval)
  }, [router, attempts])

  if (!checking) return null

  return (
    <div className="alert alert-info mb-4 w-full">
      <span className="loading loading-spinner loading-sm"></span>
      <span>Processing your payment... Please wait a moment.</span>
    </div>
  )
}






