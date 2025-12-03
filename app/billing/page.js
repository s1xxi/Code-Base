'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import DashboardNav from '@/components/DashboardNav'
import Link from 'next/link'

export default function BillingPage() {
  const { data: session, status } = useSession()
  const [invoices, setInvoices] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [subscription, setSubscription] = useState(null)

  useEffect(() => {
    if (status === 'unauthenticated') {
      redirect('/auth/login')
    }
    if (session) {
      fetchBillingData()
    }
  }, [session, status])

  async function fetchBillingData() {
    setIsLoading(true)
    try {
      const res = await fetch('/api/billing')
      if (res.ok) {
        const data = await res.json()
        setInvoices(data.invoices || [])
        setSubscription(data.subscription || null)
      }
    } catch (error) {
      console.error('Failed to fetch billing data:', error)
    } finally {
      setIsLoading(false)
    }
  }

  if (status === 'loading' || isLoading) {
    return (
      <div className="min-h-screen bg-base-200">
        <DashboardNav user={session?.user} />
        <div className="container mx-auto p-8 flex items-center justify-center">
          <div className="loading loading-spinner loading-lg"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-base-200">
      <DashboardNav user={session?.user} />
      <main className="container mx-auto p-4 md:p-8 max-w-6xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Billing History</h1>
          <Link href="/settings" className="btn btn-outline">
            ← Back to Settings
          </Link>
        </div>

        {/* Subscription Status */}
        {subscription && (
          <div className="card bg-base-100 shadow-xl mb-6">
            <div className="card-body">
              <h2 className="card-title mb-4">Current Subscription</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-base-content/70">Status</p>
                  <p className="font-semibold text-lg">
                    <span className={`badge ${subscription.status === 'active' ? 'badge-success' : 'badge-warning'}`}>
                      {subscription.status}
                    </span>
                  </p>
                </div>
                <div>
                  <p className="text-sm text-base-content/70">Current Period</p>
                  <p className="font-semibold">
                    {subscription.currentPeriodStart && new Date(subscription.currentPeriodStart * 1000).toLocaleDateString()} - {subscription.currentPeriodEnd && new Date(subscription.currentPeriodEnd * 1000).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-base-content/70">Amount</p>
                  <p className="font-semibold text-lg">
                    ${(subscription.amount / 100).toFixed(2)} / {subscription.interval}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Invoices */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title mb-4">Invoice History</h2>
            
            {invoices.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-base-content/70 mb-4">No invoices found</p>
                <Link href="/#pricing" className="btn btn-primary">
                  View Plans
                </Link>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="table w-full">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Amount</th>
                      <th>Status</th>
                      <th>Invoice</th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoices.map((invoice) => (
                      <tr key={invoice.id}>
                        <td>
                          {new Date(invoice.created * 1000).toLocaleDateString()}
                        </td>
                        <td className="font-semibold">
                          ${(invoice.amount_paid / 100).toFixed(2)}
                        </td>
                        <td>
                          <span className={`badge ${
                            invoice.status === 'paid' ? 'badge-success' : 
                            invoice.status === 'open' ? 'badge-warning' : 
                            'badge-error'
                          }`}>
                            {invoice.status}
                          </span>
                        </td>
                        <td>
                          {invoice.hosted_invoice_url ? (
                            <a 
                              href={invoice.hosted_invoice_url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="link link-primary"
                            >
                              View Invoice
                            </a>
                          ) : (
                            <span className="text-base-content/50">N/A</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}






