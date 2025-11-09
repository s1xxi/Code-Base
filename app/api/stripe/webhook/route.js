import { NextResponse } from 'next/server'
import { stripe } from '@/libs/stripe'
import connectMongo from '@/libs/mongoose'
import User from '@/models/User'

export async function POST(req) {
  const body = await req.text()
  const signature = req.headers.get('stripe-signature')

  let event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    )
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  await connectMongo()

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        // Payment successful - grant access
        const session = event.data.object
        const userId = session.metadata.userId

        await User.findByIdAndUpdate(userId, {
          customerId: session.customer,
          priceId: session.line_items?.data[0]?.price?.id,
          hasAccess: true,
        })
        break
      }

      case 'customer.subscription.deleted': {
        // Subscription cancelled - revoke access
        const subscription = event.data.object

        await User.findOneAndUpdate(
          { customerId: subscription.customer },
          { hasAccess: false }
        )
        break
      }

      case 'customer.subscription.updated': {
        // Subscription updated
        const subscription = event.data.object

        await User.findOneAndUpdate(
          { customerId: subscription.customer },
          {
            priceId: subscription.items.data[0].price.id,
            hasAccess: subscription.status === 'active',
          }
        )
        break
      }

      case 'invoice.payment_failed': {
        // Payment failed
        const invoice = event.data.object

        await User.findOneAndUpdate(
          { customerId: invoice.customer },
          { hasAccess: false }
        )
        break
      }
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Webhook handler error:', error)
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 500 }
    )
  }
}

