'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import DashboardNav from '@/components/DashboardNav'

export default function SettingsPage() {
  const { data: session, status } = useSession()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [isLoadingBilling, setIsLoadingBilling] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })
  const [user, setUser] = useState(null)

  useEffect(() => {
    if (session?.user) {
      setFormData({
        name: session.user.name || '',
        email: session.user.email || '',
      })
      fetchUser()
    }
  }, [session])

  async function fetchUser() {
    try {
      const res = await fetch('/api/user')
      if (res.ok) {
        const data = await res.json()
        setUser(data.user)
      }
    } catch (error) {
      console.error('Failed to fetch user:', error)
    }
  }

  async function handleManageBilling() {
    setIsLoadingBilling(true)
    try {
      const res = await fetch('/api/stripe/create-portal', {
        method: 'POST',
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Failed to create portal session')
      }

      if (data.url) {
        window.location.href = data.url
      }
    } catch (error) {
      setMessage({ type: 'error', text: error.message })
      setIsLoadingBilling(false)
    }
  }

  async function handleDeleteAccount() {
    if (!confirm('Are you sure you want to delete your account? This action cannot be undone and all your data will be permanently deleted.')) {
      return
    }

    if (!confirm('This is your last chance. Are you absolutely sure?')) {
      return
    }

    setIsDeleting(true)
    setMessage({ type: '', text: '' })

    try {
      const res = await fetch('/api/user/delete', {
        method: 'DELETE',
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Failed to delete account')
      }

      // Redirect to home page after deletion
      window.location.href = '/?accountDeleted=true'
    } catch (error) {
      setMessage({ type: 'error', text: error.message })
      setIsDeleting(false)
    }
  }

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
              <h2 className="card-title mb-4">Billing & Subscription</h2>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">
                    {user?.hasAccess ? 'Active' : 'No Active Subscription'}
                  </p>
                  <p className="text-sm text-base-content/70">
                    {user?.hasAccess 
                      ? 'Manage your billing, payment methods, and invoices' 
                      : 'Upgrade to unlock more features'}
                  </p>
                </div>
                <div className="flex gap-3">
                  {user?.hasAccess && (
                    <Link href="/billing" className="btn btn-outline">
                      View Billing History
                    </Link>
                  )}
                  {user?.hasAccess ? (
                    <button 
                      onClick={handleManageBilling}
                      className="btn btn-primary"
                      disabled={isLoadingBilling}
                    >
                      {isLoadingBilling ? 'Loading...' : 'Manage Billing'}
                    </button>
                  ) : (
                    <Link href="/#pricing" className="btn btn-primary">
                      Upgrade
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Password Change */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title mb-4">Change Password</h2>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">Update your password</p>
                  <p className="text-sm text-base-content/70">Keep your account secure with a strong password</p>
                </div>
                <Link href="/auth/change-password" className="btn btn-primary btn-outline">
                  Change Password
                </Link>
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
                  <p className="text-sm text-base-content/70">Permanently delete your account and all data. This action cannot be undone.</p>
                </div>
                <button 
                  onClick={handleDeleteAccount}
                  className="btn btn-error btn-outline"
                  disabled={isDeleting}
                >
                  {isDeleting ? 'Deleting...' : 'Delete Account'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

