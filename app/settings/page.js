'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import DashboardNav from '@/components/DashboardNav'

export default function SettingsPage() {
  const { data: session, status } = useSession()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })

  useEffect(() => {
    if (session?.user) {
      setFormData({
        name: session.user.name || '',
        email: session.user.email || '',
      })
    }
  }, [session])

  if (status === 'unauthenticated') {
    redirect('/auth/login')
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setIsLoading(true)
    setMessage({ type: '', text: '' })

    try {
      const res = await fetch('/api/user', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) throw new Error('Update failed')

      setMessage({ type: 'success', text: 'Profile updated successfully!' })
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to update profile' })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-base-200">
      <DashboardNav user={session?.user} />
      <main className="container mx-auto p-4 md:p-8 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Settings</h1>

        <div className="space-y-6">
          {/* Profile Settings */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title mb-4">Profile Information</h2>
              
              {message.text && (
                <div className={`alert ${message.type === 'success' ? 'alert-success' : 'alert-error'}`}>
                  <span>{message.text}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="input input-bordered"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="input input-bordered"
                    value={formData.email}
                    onChange={handleChange}
                    disabled
                  />
                  <label className="label">
                    <span className="label-text-alt">Email cannot be changed</span>
                  </label>
                </div>

                <button 
                  type="submit" 
                  className={`btn btn-primary ${isLoading ? 'loading' : ''}`}
                  disabled={isLoading}
                >
                  Save Changes
                </button>
              </form>
            </div>
          </div>

          {/* Subscription */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title mb-4">Subscription</h2>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">Current Plan: Free</p>
                  <p className="text-sm text-base-content/70">Upgrade to unlock more features</p>
                </div>
                <button className="btn btn-primary">Upgrade</button>
              </div>
            </div>
          </div>

          {/* Danger Zone */}
          <div className="card bg-base-100 shadow-xl border-2 border-error">
            <div className="card-body">
              <h2 className="card-title text-error mb-4">Danger Zone</h2>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">Delete Account</p>
                  <p className="text-sm text-base-content/70">Permanently delete your account and all data</p>
                </div>
                <button className="btn btn-error btn-outline">Delete Account</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

