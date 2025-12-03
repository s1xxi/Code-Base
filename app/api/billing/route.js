import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/libs/next-auth'
import { stripe } from '@/libs/stripe'
import connectMongo from '@/libs/mongoose'
import User from '@/models/User'

export async function GET(req) {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await connectMongo()

    const user = await User.findOne({ email: session.user.email })

    if (!user || !user.customerId) {
      return NextResponse.json({ invoices: [], subscription: null })
    }

    // Fetch invoices from Stripe
    const invoices = await stripe.invoices.list({
      customer: user.customerId,
      limit: 100,
    })

    // Fetch subscription if exists
    let subscription = null
    if (user.priceId) {
      const subscriptions = await stripe.subscriptions.list({
        customer: user.customerId,
        status: 'all',
        limit: 1,
      })

      if (subscriptions.data.length > 0) {
        const sub = subscriptions.data[0]
        const price = sub.items.data[0]?.price
        
        subscription = {
          id: sub.id,
          status: sub.status,
          currentPeriodStart: sub.current_period_start,
          currentPeriodEnd: sub.current_period_end,
          amount: price?.unit_amount || 0,
          interval: price?.recurring?.interval || 'month',
        }
      }
    }

    return NextResponse.json({
      invoices: invoices.data,
      subscription,
    })
  } catch (error) {
    console.error('Billing data error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}






