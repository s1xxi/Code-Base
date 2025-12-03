/**
 * REGISTER FORM COMPONENT
 * 
 * Purpose: Complete, reusable registration form
 * Usage: Import and use on registration pages
 * 
 * Features:
 * - Name, email, password fields
 * - Validation (min 6 chars password)
 * - Error handling
 * - Loading states
 * - Auto-login after registration
 * 
 * Example:
 * import RegisterForm from '@/components/forms/RegisterForm'
 * <RegisterForm redirectTo="/dashboard" />
 * 
 * Props:
 * - redirectTo: Where to redirect after registration (optional, default: '/dashboard')
 * - onSuccess: Callback after successful registration (optional)
 * - onError: Callback on error (optional)
 */

'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function RegisterForm({ 
  redirectTo = '/dashboard',
  onSuccess,
  onError 
}) {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      // Register user
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Registration failed')
      }

      // Show success message about email verification
      if (onSuccess) onSuccess()
      
      // Redirect to a page that tells them to check their email
      router.push('/auth/verify-email-sent?email=' + encodeURIComponent(formData.email))
    } catch (error) {
      setError(error.message)
      if (onError) onError(error.message)
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

      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Enter your name"
          className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-900"
          value={formData.name}
          onChange={handleChange}
          required
          disabled={isLoading}
        />
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Enter your email"
          className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-900"
          value={formData.email}
          onChange={handleChange}
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
          name="password"
          placeholder="Enter your password"
          className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-900"
          value={formData.password}
          onChange={handleChange}
          required
          minLength={6}
          disabled={isLoading}
        />
        <p className="mt-1 text-xs text-slate-500">Minimum 6 characters</p>
      </div>

      {/* Submit Button */}
      <button 
        type="submit" 
        className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 disabled:opacity-50 disabled:cursor-not-allowed ${isLoading ? 'opacity-50' : ''}`}
        disabled={isLoading}
      >
        {isLoading ? 'Creating account...' : 'Sign Up'}
      </button>
    </form>
  )
}

