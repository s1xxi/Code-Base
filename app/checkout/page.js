'use client'

import Link from 'next/link'
import { useSearchParams, useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { useState, useEffect } from 'react'

export default function CheckoutPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const { data: session, status } = useSession()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const plan = searchParams.get('plan') || 'Starter'
  const period = searchParams.get('period') || 'monthly'
  const priceParam = searchParams.get('price')
  const numericPrice = priceParam ? Number(priceParam) : plan === 'Expert' ? 29.99 : plan === 'Pro' ? 19.99 : 9.99
  const displayPrice = `$${numericPrice.toFixed(2)}${period === 'yearly' ? '' : ''}`

  // Redirect to login if not authenticated
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push(`/auth/login?callbackUrl=${encodeURIComponent(window.location.href)}`)
    }
  }, [status, router])

  async function handleCheckout() {
    if (!session) {
      router.push(`/auth/login?callbackUrl=${encodeURIComponent(window.location.href)}`)
      return
    }

    setIsLoading(true)
    setError('')

    try {
      // Send plan info to API, let server handle price ID mapping
      const res = await fetch('/api/stripe/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          plan,
          period,
          price: numericPrice
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Failed to create checkout session')
      }

      if (data.url) {
        window.location.href = data.url
      } else {
        throw new Error('No checkout URL received')
      }
    } catch (error) {
      console.error('Checkout error:', error)
      setError(error.message || 'Something went wrong. Please try again.')
      setIsLoading(false)
    }
  }

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="loading loading-spinner loading-lg"></div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="grid w-full grid-cols-1 lg:grid-cols-2">
        {/* Left: Order summary - dark blue theme */}
        <aside className="relative flex min-h-screen flex-col gap-8 bg-[#010615] px-8 py-10 text-white lg:px-12 lg:py-16">
          <div className="ml-2 flex items-center gap-3 text-white/90 md:ml-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
              {/* Laurel wreath icon */}
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20c-3.5 0-6.5-3.2-7.8-6.8 2.2-.2 4.1-1.4 5.2-3.2-2.1.7-4 .4-5.6-.7 1.1-2.3 3.3-4.1 6-4.8" />
                <path d="M12 20c3.5 0 6.5-3.2 7.8-6.8-2.2-.2-4.1-1.4-5.2-3.2 2.1.7 4 .4 5.6-.7-1.1-2.3-3.3-4.1-6-4.8" />
              </svg>
            </div>
            <span className="text-lg font-semibold uppercase tracking-[0.35em] md:text-xl">codebase</span>
          </div>

          <div>
            <p className="text-base text-white/70">Pay codebase</p>
            <h1 className="mt-1 text-5xl font-semibold tracking-tight lg:text-6xl">{displayPrice}</h1>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-slate-900">
                {/* Laurel wreath icon */}
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20c-3.5 0-6.5-3.2-7.8-6.8 2.2-.2 4.1-1.4 5.2-3.2-2.1.7-4 .4-5.6-.7 1.1-2.3 3.3-4.1 6-4.8" />
                  <path d="M12 20c3.5 0 6.5-3.2 7.8-6.8-2.2-.2-4.1-1.4-5.2-3.2 2.1.7 4 .4 5.6-.7-1.1-2.3-3.3-4.1-6-4.8" />
                </svg>
              </div>
              <div>
                <p className="text-lg font-semibold md:text-xl">Codebase Boilerplate</p>
                <p className="text-sm text-white/60">Next.js codebase to launch your startup fast.</p>
              </div>
            </div>

            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-center justify-between text-white/80">
                <span>Plan</span>
                <span className="font-medium">{plan} ({period})</span>
              </div>
              <div className="mt-3 h-px bg-white/10" />
              <div className="flex items-center justify-between text-white">
                <span className="font-semibold">Total due</span>
                <span className="text-lg font-semibold">{displayPrice}</span>
              </div>
            </div>
          </div>

          <p className="mt-auto text-xs text-white/50">
            By proceeding, you agree to our{' '}
            <Link href="/terms" className="underline underline-offset-2 hover:text-white">
              Terms
            </Link>{' '}
            and{' '}
            <Link href="/privacy" className="underline underline-offset-2 hover:text-white">
              Privacy
            </Link>
            .
          </p>
        </aside>

        {/* Right: Payment button */}
        <section className="px-8 py-12 lg:px-16 lg:py-20 flex items-center justify-center">
          <div className="mx-auto w-full max-w-2xl">
            <h2 className="text-2xl font-semibold text-center lg:text-3xl mb-2">Ready to get started?</h2>
            <p className="text-center text-slate-600 mb-8">
              You'll be redirected to Stripe's secure checkout to complete your payment.
            </p>

            {error && (
              <div className="alert alert-error mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{error}</span>
              </div>
            )}

            <div className="rounded-2xl border border-slate-200 bg-white p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-slate-600">Plan</span>
                <span className="font-semibold text-lg">{plan} ({period})</span>
              </div>
              <div className="h-px bg-slate-200 mb-4"></div>
              <div className="flex items-center justify-between">
                <span className="text-slate-600">Total</span>
                <span className="text-2xl font-bold">{displayPrice}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleCheckout}
              disabled={isLoading || !session}
              className="btn w-full rounded-full border-0 bg-blue-600 text-lg font-semibold text-white hover:bg-blue-700 disabled:bg-slate-300 disabled:text-slate-500"
            >
              {isLoading ? (
                <>
                  <span className="loading loading-spinner loading-sm"></span>
                  Processing...
                </>
              ) : (
                `Pay ${displayPrice}`
              )}
            </button>

            <p className="mt-5 text-center text-xs text-slate-500">
              By paying, you agree to Link&apos;s{' '}
              <Link href="/terms" className="underline">
                Terms
              </Link>{' '}
              and{' '}
              <Link href="/privacy" className="underline">
                Privacy
              </Link>
              .
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}


