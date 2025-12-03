import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/libs/next-auth'
import { stripe } from '@/libs/stripe'
import connectMongo from '@/libs/mongoose'
import User from '@/models/User'

export async function POST(req) {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { priceId, plan, period, price } = await req.json()

    // Map plan names to Stripe Price IDs (server-side)
    // If priceId is provided, use it. Otherwise, map from plan/period
    let finalPriceId = priceId
    
    if (!finalPriceId && plan && period) {
      const priceIdMap = {
        'Starter-monthly': process.env.STRIPE_PRICE_STARTER_MONTHLY,
        'Starter-yearly': process.env.STRIPE_PRICE_STARTER_YEARLY,
        'Pro-monthly': process.env.STRIPE_PRICE_PRO_MONTHLY,
        'Pro-yearly': process.env.STRIPE_PRICE_PRO_YEARLY,
        'Expert-monthly': process.env.STRIPE_PRICE_EXPERT_MONTHLY,
        'Expert-yearly': process.env.STRIPE_PRICE_EXPERT_YEARLY,
      }
      
      const priceKey = `${plan}-${period}`
      finalPriceId = priceIdMap[priceKey] || process.env.STRIPE_PRICE_LIFETIME || process.env.NEXT_PUBLIC_STRIPE_PRICE_LIFETIME
    }

    if (!finalPriceId) {
      return NextResponse.json({ 
        error: 'Price ID not configured. Please set up Stripe Price IDs in environment variables.' 
      }, { status: 400 })
    }

    await connectMongo()

    const user = await User.findOne({ email: session.user.email })

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    let customerId = user.customerId

    // Create Stripe customer if doesn't exist
    if (!customerId) {
      const customer = await stripe.customers.create({
        email: user.email,
        name: user.name,
        metadata: {
          userId: user._id.toString(),
        },
      })
      customerId = customer.id

      // Save customer ID to user
      await User.findByIdAndUpdate(user._id, { customerId })
    }

    // Determine payment mode based on period
    // If yearly/monthly, it's a subscription. Otherwise one-time payment.
    const isSubscription = period === 'monthly' || period === 'yearly'
    const mode = isSubscription ? 'subscription' : 'payment'

    // Create checkout session
    const checkoutSession = await stripe.checkout.sessions.create({
      customer: customerId,
      line_items: [
        {
          price: finalPriceId,
          quantity: 1,
        },
      ],
      mode: mode,
      success_url: `${process.env.NEXTAUTH_URL}/dashboard?success=true`,
      cancel_url: `${process.env.NEXTAUTH_URL}/checkout?canceled=true`,
      metadata: {
        userId: user._id.toString(),
        plan: plan || 'Unknown',
        period: period || 'one-time',
      },
    })

    return NextResponse.json({ url: checkoutSession.url })
  } catch (error) {
    console.error('Stripe checkout error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

