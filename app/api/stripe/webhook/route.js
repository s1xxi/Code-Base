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
        // ONE-TIME Payment successful - grant LIFETIME access
        const session = event.data.object
        const userId = session.metadata.userId

        console.log('✅ Payment successful for user:', userId)

        await User.findByIdAndUpdate(userId, {
          customerId: session.customer,
          hasAccess: true, // Lifetime access - never expires!
        })
        
        console.log('✅ User access granted!')
        break
      }

      case 'payment_intent.succeeded': {
        // Alternative payment success event
        const paymentIntent = event.data.object
        console.log('✅ Payment intent succeeded:', paymentIntent.id)
        break
      }

      case 'payment_intent.payment_failed': {
        // Payment failed
        const paymentIntent = event.data.object
        console.error('❌ Payment failed:', paymentIntent.id)
        break
      }

      default:
        console.log(`Unhandled event type: ${event.type}`)
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
