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

      // Auto sign in after registration
      const result = await signIn('credentials', {
        email: formData.email,
        password: formData.password,
        redirect: false,
      })

      if (result?.error) {
        const errorMsg = 'Registration successful but login failed'
        setError(errorMsg)
        if (onError) onError(errorMsg)
      } else {
        if (onSuccess) onSuccess()
        router.push(redirectTo)
        router.refresh()
      }
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
        <div className="alert alert-error">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{error}</span>
        </div>
      )}

      {/* Name Field */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input
          type="text"
          name="name"
          placeholder="John Doe"
          className="input input-bordered"
          value={formData.name}
          onChange={handleChange}
          required
          disabled={isLoading}
        />
      </div>

      {/* Email Field */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          name="email"
          placeholder="your@email.com"
          className="input input-bordered"
          value={formData.email}
          onChange={handleChange}
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
          name="password"
          placeholder="••••••••"
          className="input input-bordered"
          value={formData.password}
          onChange={handleChange}
          required
          minLength={6}
          disabled={isLoading}
        />
        <label className="label">
          <span className="label-text-alt">Minimum 6 characters</span>
        </label>
      </div>

      {/* Submit Button */}
      <button 
        type="submit" 
        className={`btn btn-primary w-full ${isLoading ? 'loading' : ''}`}
        disabled={isLoading}
      >
        {isLoading ? 'Creating account...' : 'Create Account'}
      </button>
    </form>
  )
}

