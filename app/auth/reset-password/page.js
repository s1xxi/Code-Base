'use client'

import Link from 'next/link'
import { useSearchParams, useRouter } from 'next/navigation'
import { useState } from 'react'

export default function ResetPasswordPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const token = searchParams.get('token')
  
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })

  if (!token) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Invalid Reset Link</h1>
          <p className="text-slate-600 mb-6">This password reset link is invalid or has expired.</p>
          <Link href="/auth/forgot-password" className="btn btn-primary">
            Request New Reset Link
          </Link>
        </div>
      </div>
    )
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setIsLoading(true)
    setMessage({ type: '', text: '' })

    if (password !== confirmPassword) {
      setMessage({ type: 'error', text: 'Passwords do not match' })
      setIsLoading(false)
      return
    }

    if (password.length < 8) {
      setMessage({ type: 'error', text: 'Password must be at least 8 characters' })
      setIsLoading(false)
      return
    }

    try {
      const res = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, password }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Failed to reset password')
      }

      setMessage({ 
        type: 'success', 
        text: 'Password reset successful! Redirecting to login...' 
      })
      
      setTimeout(() => {
        router.push('/auth/login?passwordReset=true')
      }, 2000)
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
            <h1 className="text-4xl font-semibold text-slate-900 mb-2">Reset Password</h1>
            <p className="text-slate-600">
              Enter your new password below.
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
                <span className="label-text text-xl font-semibold">New Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter new password"
                className="input input-bordered text-xl px-6 py-6 h-16"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={isLoading}
                minLength={8}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-semibold">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="Confirm new password"
                className="input input-bordered text-xl px-6 py-6 h-16"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                disabled={isLoading}
                minLength={8}
              />
            </div>

            <button 
              type="submit" 
              className={`btn btn-primary w-full text-xl font-semibold py-4 ${isLoading ? 'loading' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? 'Resetting...' : 'Reset Password'}
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






