/**
 * PASSWORD RESET FORM COMPONENT
 * 
 * Purpose: Allow users to reset forgotten password
 * Usage: Import on password reset page
 * 
 * Features:
 * - Email validation
 * - Send reset link
 * - Loading states
 * - Success/error messages
 * 
 * Example:
 * import PasswordResetForm from './auth-password-reset'
 * <PasswordResetForm />
 * 
 * Requires:
 * - Email service configured
 * - API route: /api/auth/reset-password
 */

'use client'

import { useState } from 'react'

export default function PasswordResetForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus({ type: '', message: '' })
    setIsLoading(true)

    try {
      const res = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Failed to send reset email')
      }

      setStatus({
        type: 'success',
        message: 'Password reset link sent! Check your email.'
      })
      setEmail('')
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {status.message && (
        <div className={`alert ${status.type === 'success' ? 'alert-success' : 'alert-error'}`}>
          <span>{status.message}</span>
        </div>
      )}

      <div className="form-control">
        <label className="label">
          <span className="label-text">Email Address</span>
        </label>
        <input
          type="email"
          placeholder="your@email.com"
          className="input input-bordered"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={isLoading}
        />
        <label className="label">
          <span className="label-text-alt">We'll send you a reset link</span>
        </label>
      </div>

      <button 
        type="submit" 
        className={`btn btn-primary w-full ${isLoading ? 'loading' : ''}`}
        disabled={isLoading}
      >
        {isLoading ? 'Sending...' : 'Send Reset Link'}
      </button>
    </form>
  )
}

