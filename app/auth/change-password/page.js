'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

export default function ChangePasswordPage() {
  const router = useRouter()
  const { data: session, status } = useSession()
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })

  if (status === 'unauthenticated') {
    router.push('/auth/login')
    return null
  }

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="loading loading-spinner loading-lg"></div>
      </div>
    )
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setIsLoading(true)
    setMessage({ type: '', text: '' })

    if (formData.newPassword !== formData.confirmPassword) {
      setMessage({ type: 'error', text: 'New passwords do not match' })
      setIsLoading(false)
      return
    }

    if (formData.newPassword.length < 8) {
      setMessage({ type: 'error', text: 'Password must be at least 8 characters' })
      setIsLoading(false)
      return
    }

    try {
      const res = await fetch('/api/user/change-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          currentPassword: formData.currentPassword,
          newPassword: formData.newPassword,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Failed to change password')
      }

      setMessage({ type: 'success', text: 'Password changed successfully! Redirecting...' })
      
      setTimeout(() => {
        router.push('/settings')
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
            <h1 className="text-4xl font-semibold text-slate-900 mb-2">Change Password</h1>
            <p className="text-slate-600">
              Update your password to keep your account secure.
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
                <span className="label-text text-xl font-semibold">Current Password</span>
              </label>
              <input
                type="password"
                name="currentPassword"
                placeholder="Enter current password"
                className="input input-bordered text-xl px-6 py-6 h-16"
                value={formData.currentPassword}
                onChange={handleChange}
                required
                disabled={isLoading}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-semibold">New Password</span>
              </label>
              <input
                type="password"
                name="newPassword"
                placeholder="Enter new password"
                className="input input-bordered text-xl px-6 py-6 h-16"
                value={formData.newPassword}
                onChange={handleChange}
                required
                disabled={isLoading}
                minLength={8}
              />
              <label className="label">
                <span className="label-text-alt">Minimum 8 characters</span>
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-semibold">Confirm New Password</span>
              </label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm new password"
                className="input input-bordered text-xl px-6 py-6 h-16"
                value={formData.confirmPassword}
                onChange={handleChange}
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
              {isLoading ? 'Changing...' : 'Change Password'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link href="/settings" className="text-slate-600 hover:text-slate-900 font-medium">
              ← Back to Settings
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}






