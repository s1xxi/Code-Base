'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function ForgotPasswordPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })

  async function handleSubmit(e) {
    e.preventDefault()
    setIsLoading(true)
    setMessage({ type: '', text: '' })

    try {
      const res = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Failed to send reset email')
      }

      setMessage({ 
        type: 'success', 
        text: 'If an account exists with that email, you will receive a password reset link shortly.' 
      })
      setEmail('')
    } catch (error) {
      setMessage({ type: 'error', text: error.message })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#eff4ff] via-white to-white px-4 py-20 flex items-center justify-center">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-10 h-[480px] w-[480px] rounded-full bg-blue-200/50 blur-[150px]"></div>
        <div className="absolute top-12 -left-24 h-[360px] w-[360px] rounded-full bg-indigo-200/50 blur-[160px]"></div>
      </div>

      <div className="relative w-full max-w-2xl mx-auto">
        <div className="rounded-[32px] border border-white/70 bg-white/95 p-12 md:p-16 shadow-[0_30px_90px_rgba(15,23,42,0.12)]">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-semibold text-slate-900 mb-2">Forgot Password?</h1>
            <p className="text-slate-600">
              Enter your email address and we'll send you a link to reset your password.
            </p>
          </div>

          {message.text && (
            <div className={`alert ${message.type === 'success' ? 'alert-success' : 'alert-error'} mb-6`}>
              <span>{message.text}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-semibold">Email</span>
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="input input-bordered text-xl px-6 py-6 h-16"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>

            <button 
              type="submit" 
              className={`btn btn-primary w-full text-xl font-semibold py-4 ${isLoading ? 'loading' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? 'Sending...' : 'Send Reset Link'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link href="/auth/login" className="text-slate-600 hover:text-slate-900 font-medium">
              ← Back to Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}






