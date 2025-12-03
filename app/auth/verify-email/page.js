'use client'

import { useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'

export default function VerifyEmailPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const token = searchParams.get('token')
  const [status, setStatus] = useState('verifying')
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (!token) {
      setStatus('error')
      setMessage('No verification token provided')
      return
    }

    async function verifyEmail() {
      try {
        const res = await fetch(`/api/auth/verify-email?token=${token}`)
        
        if (res.ok) {
          setStatus('success')
          setMessage('Email verified successfully! Redirecting to login...')
          setTimeout(() => {
            router.push('/auth/login?verified=true')
          }, 2000)
        } else {
          const data = await res.json()
          setStatus('error')
          setMessage(data.error || 'Verification failed')
        }
      } catch (error) {
        setStatus('error')
        setMessage('An error occurred during verification')
      }
    }

    verifyEmail()
  }, [token, router])

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#eff4ff] via-white to-white px-4 py-20 flex items-center justify-center">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-10 h-[480px] w-[480px] rounded-full bg-blue-200/50 blur-[150px]"></div>
        <div className="absolute top-12 -left-24 h-[360px] w-[360px] rounded-full bg-indigo-200/50 blur-[160px]"></div>
      </div>

      <div className="relative w-full max-w-2xl mx-auto">
        <div className="rounded-[32px] border border-white/70 bg-white/95 p-12 md:p-16 shadow-[0_30px_90px_rgba(15,23,42,0.12)] text-center">
          {status === 'verifying' && (
            <>
              <div className="loading loading-spinner loading-lg mb-4"></div>
              <h1 className="text-4xl font-semibold text-slate-900 mb-2">Verifying Email...</h1>
              <p className="text-slate-600">Please wait while we verify your email address.</p>
            </>
          )}

          {status === 'success' && (
            <>
              <div className="text-6xl mb-4">✅</div>
              <h1 className="text-4xl font-semibold text-slate-900 mb-2">Email Verified!</h1>
              <p className="text-slate-600 mb-6">{message}</p>
              <Link href="/auth/login" className="btn btn-primary">
                Go to Sign In
              </Link>
            </>
          )}

          {status === 'error' && (
            <>
              <div className="text-6xl mb-4">❌</div>
              <h1 className="text-4xl font-semibold text-slate-900 mb-2">Verification Failed</h1>
              <p className="text-slate-600 mb-6">{message}</p>
              <div className="space-y-3">
                <Link href="/auth/login" className="btn btn-primary w-full">
                  Go to Sign In
                </Link>
                <Link href="/auth/register" className="btn btn-outline w-full">
                  Create New Account
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}






