/**
 * LOGIN FORM COMPONENT
 * 
 * Purpose: Complete, reusable login form with email/password
 * Usage: Import and use on login pages
 * 
 * Features:
 * - Email/password validation
 * - Error handling
 * - Loading states
 * - Automatic redirect after login
 * 
 * Example:
 * import LoginForm from '@/components/forms/LoginForm'
 * <LoginForm redirectTo="/dashboard" />
 * 
 * Props:
 * - redirectTo: Where to redirect after login (optional, default: '/dashboard')
 * - onSuccess: Callback after successful login (optional)
 * - onError: Callback on error (optional)
 */

'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function LoginForm({ 
  redirectTo = '/dashboard',
  onSuccess,
  onError 
}) {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      })

      if (result?.error) {
        const errorMsg = 'Invalid email or password'
        setError(errorMsg)
        if (onError) onError(errorMsg)
      } else {
        if (onSuccess) onSuccess()
        router.push(redirectTo)
        router.refresh()
      }
    } catch (error) {
      const errorMsg = 'Something went wrong'
      setError(errorMsg)
      if (onError) onError(errorMsg)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Error Alert */}
      {error && (
        <div className="alert alert-error">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{error}</span>
        </div>
      )}

      {/* Email Field */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
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
      </div>

      {/* Password Field */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          type="password"
          placeholder="••••••••"
          className="input input-bordered"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          disabled={isLoading}
        />
      </div>

      {/* Submit Button */}
      <button 
        type="submit" 
        className={`btn btn-primary w-full ${isLoading ? 'loading' : ''}`}
        disabled={isLoading}
      >
        {isLoading ? 'Signing in...' : 'Sign In'}
      </button>
    </form>
  )
}

