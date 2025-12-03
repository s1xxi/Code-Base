'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

export default function VerifyEmailSentPage() {
  const searchParams = useSearchParams()
  const email = searchParams.get('email')

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#eff4ff] via-white to-white px-4 py-20 flex items-center justify-center">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-10 h-[480px] w-[480px] rounded-full bg-blue-200/50 blur-[150px]"></div>
        <div className="absolute top-12 -left-24 h-[360px] w-[360px] rounded-full bg-indigo-200/50 blur-[160px]"></div>
      </div>

      <div className="relative w-full max-w-2xl mx-auto">
        <div className="rounded-[32px] border border-white/70 bg-white/95 p-12 md:p-16 shadow-[0_30px_90px_rgba(15,23,42,0.12)] text-center">
          <div className="text-6xl mb-4">📧</div>
          <h1 className="text-4xl font-semibold text-slate-900 mb-2">Check Your Email</h1>
          <p className="text-slate-600 mb-4">
            We've sent a verification link to <strong>{email || 'your email'}</strong>
          </p>
          <p className="text-slate-500 text-sm mb-6">
            Click the link in the email to verify your account and complete registration.
          </p>
          <div className="alert alert-info mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>Didn't receive the email? Check your spam folder or try signing in again.</span>
          </div>
          <Link href="/auth/login" className="btn btn-primary">
            Go to Sign In
          </Link>
        </div>
      </div>
    </div>
  )
}






