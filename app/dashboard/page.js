import { getServerSession } from 'next-auth'
import { authOptions } from '@/libs/next-auth'
import connectMongo from '@/libs/mongoose'
import User from '@/models/User'
import ButtonAccount from '@/components/ButtonAccount'
import Link from 'next/link'

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)

  // Fetch user from database to check access
  await connectMongo()
  const user = await User.findOne({ email: session?.user?.email }).lean()

  // If user hasn't paid, show paywall
  if (!user?.hasAccess) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="card bg-base-100 shadow-2xl max-w-lg">
          <div className="card-body items-center text-center">
            <div className="text-6xl mb-4">🔒</div>
            <h2 className="card-title text-3xl mb-4">Get Lifetime Access</h2>
            <p className="text-base-content/70 mb-6">
              You need to purchase access to use the dashboard. 
              One payment gets you lifetime access to all features.
            </p>
            
            <div className="bg-primary/10 rounded-lg p-6 mb-6 w-full">
              <div className="flex items-start justify-center mb-2">
                <span className="text-2xl font-bold mt-1">$</span>
                <span className="text-5xl font-bold">49</span>
              </div>
              <p className="text-sm text-base-content/60">one-time payment</p>
            </div>

            <ButtonAccount priceId="one_time" />
            
            <p className="text-sm text-base-content/60 mt-4">
              ✨ Pay once, access forever. No subscriptions.
            </p>
          </div>
        </div>
      </div>
    )
  }

  // User has access - show full dashboard
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold">
            Welcome back, {session?.user?.name || session?.user?.email || 'there'}!
          </h1>
          <p className="text-base-content/70 mt-2">
            You have lifetime access to all features 🎉
          </p>
        </div>
      </div>

      {/* Success Alert if just purchased */}
      {typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('success') && (
        <div className="alert alert-success">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Payment successful! Welcome aboard 🎉</span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-figure text-success">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div className="stat-title">Access Status</div>
            <div className="stat-value text-success">Active</div>
            <div className="stat-desc">Lifetime access</div>
          </div>
        </div>

        <div className="stats shadow">
          <div className="stat">
            <div className="stat-figure text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
              </svg>
            </div>
            <div className="stat-title">Projects</div>
            <div className="stat-value text-primary">0</div>
            <div className="stat-desc">Create your first one</div>
          </div>
        </div>

        <div className="stats shadow">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <div className="stat-title">API Calls</div>
            <div className="stat-value text-secondary">0</div>
            <div className="stat-desc">This month</div>
          </div>
        </div>
      </div>

      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">🚀 Quick Start</h2>
          <p className="text-base-content/70 mb-4">
            Welcome to your dashboard! Here's what you can do:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-base-300 rounded-lg p-4">
              <h3 className="font-bold mb-2">✅ Authentication</h3>
              <p className="text-sm text-base-content/70">
                Login, register, and session management all working!
              </p>
            </div>
            <div className="border border-base-300 rounded-lg p-4">
              <h3 className="font-bold mb-2">💳 Payments</h3>
              <p className="text-sm text-base-content/70">
                Stripe one-time payments with webhook integration.
              </p>
            </div>
            <div className="border border-base-300 rounded-lg p-4">
              <h3 className="font-bold mb-2">🗄️ Database</h3>
              <p className="text-sm text-base-content/70">
                MongoDB connected and storing your user data.
              </p>
            </div>
            <div className="border border-base-300 rounded-lg p-4">
              <h3 className="font-bold mb-2">🎨 UI Components</h3>
              <p className="text-sm text-base-content/70">
                Tailwind + DaisyUI for beautiful, responsive design.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">📖 Next Steps</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-2xl">1️⃣</span>
              <div>
                <p className="font-bold">Customize Your Product</p>
                <p className="text-sm text-base-content/70">Replace this content with your actual product features</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">2️⃣</span>
              <div>
                <p className="font-bold">Build Your Features</p>
                <p className="text-sm text-base-content/70">Use this boilerplate as a foundation and add your unique value</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">3️⃣</span>
              <div>
                <p className="font-bold">Launch & Market</p>
                <p className="text-sm text-base-content/70">Ship fast and start getting users!</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
