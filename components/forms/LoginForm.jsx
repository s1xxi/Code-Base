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
        <div className="rounded-md bg-red-50 border border-red-200 p-3 text-sm text-red-800">
          {error}
        </div>
      )}

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-900"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={isLoading}
        />
      </div>

      {/* Password Field */}
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1">
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-900"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          disabled={isLoading}
        />
      </div>

      {/* Submit Button */}
      <button 
        type="submit" 
        className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 disabled:opacity-50 disabled:cursor-not-allowed ${isLoading ? 'opacity-50' : ''}`}
        disabled={isLoading}
      >
        {isLoading ? 'Signing in...' : 'Sign In'}
      </button>
    </form>
  )
}

