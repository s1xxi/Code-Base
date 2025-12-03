import { NextResponse } from 'next/server'
import { stripe } from '@/libs/stripe'
import connectMongo from '@/libs/mongoose'
import User from '@/models/User'
import { sendEmail, getEmailTemplate } from '@/libs/email'

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
        const session = event.data.object
        const userId = session.metadata?.userId

        if (!userId) {
          console.error('No userId in session metadata')
          break
        }

        const user = await User.findById(userId)
        if (!user) {
          console.error('User not found:', userId)
          break
        }

        // Update user with customer ID and access
        await User.findByIdAndUpdate(userId, {
          customerId: session.customer,
          hasAccess: true,
          priceId: session.mode === 'subscription' ? session.subscription : null,
        })

        // Send payment receipt email
        const receiptHtml = getEmailTemplate({
          title: 'Payment Successful!',
          content: `
            <p>Thank you for your purchase! Your payment has been processed successfully.</p>
            <p style="margin-top: 20px;"><strong>Order Details:</strong></p>
            <ul style="margin-top: 10px; padding-left: 20px;">
              <li>Amount: $${(session.amount_total / 100).toFixed(2)}</li>
              <li>Status: Paid</li>
            </ul>
            <p style="margin-top: 20px;">You now have full access to all features!</p>
          `,
          buttonText: 'Go to Dashboard',
          buttonUrl: `${process.env.NEXTAUTH_URL}/dashboard`,
          footerText: 'If you have any questions, please contact our support team.'
        })

        await sendEmail({
          to: user.email,
          subject: 'Payment Receipt - codebase',
          html: receiptHtml,
        })

        console.log('✅ Payment successful and email sent for user:', userId)
        break
      }

      case 'customer.subscription.created':
      case 'customer.subscription.updated': {
        const subscription = event.data.object
        const customerId = subscription.customer

        const user = await User.findOne({ customerId })
        if (user) {
          await User.findByIdAndUpdate(user._id, {
            hasAccess: subscription.status === 'active',
            priceId: subscription.items.data[0]?.price.id,
          })

          console.log('✅ Subscription updated for user:', user._id)
        }
        break
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object
        const customerId = subscription.customer

        const user = await User.findOne({ customerId })
        if (user) {
          await User.findByIdAndUpdate(user._id, {
            hasAccess: false,
            priceId: null,
          })

          // Send cancellation email
          const cancelHtml = getEmailTemplate({
            title: 'Subscription Canceled',
            content: `
              <p>Your subscription has been canceled.</p>
              <p style="margin-top: 20px;">You will continue to have access until the end of your current billing period.</p>
              <p style="margin-top: 20px;">We're sorry to see you go! If you change your mind, you can reactivate your subscription anytime.</p>
            `,
            buttonText: 'Reactivate Subscription',
            buttonUrl: `${process.env.NEXTAUTH_URL}/#pricing`,
          })

          await sendEmail({
            to: user.email,
            subject: 'Subscription Canceled - codebase',
            html: cancelHtml,
          })

          console.log('✅ Subscription canceled for user:', user._id)
        }
        break
      }

      case 'invoice.payment_succeeded': {
        const invoice = event.data.object
        const customerId = invoice.customer

        const user = await User.findOne({ customerId })
        if (user && invoice.billing_reason === 'subscription_cycle') {
          // Send invoice email
          const invoiceHtml = getEmailTemplate({
            title: 'Payment Received',
            content: `
              <p>Your subscription payment has been processed successfully.</p>
              <p style="margin-top: 20px;"><strong>Invoice Details:</strong></p>
              <ul style="margin-top: 10px; padding-left: 20px;">
                <li>Amount: $${(invoice.amount_paid / 100).toFixed(2)}</li>
                <li>Invoice #: ${invoice.number || invoice.id}</li>
                <li>Status: Paid</li>
              </ul>
            `,
            buttonText: 'View Invoice',
            buttonUrl: invoice.hosted_invoice_url || `${process.env.NEXTAUTH_URL}/settings`,
          })

          await sendEmail({
            to: user.email,
            subject: `Invoice ${invoice.number || ''} - codebase`,
            html: invoiceHtml,
          })
        }
        break
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object
        const customerId = invoice.customer

        const user = await User.findOne({ customerId })
        if (user) {
          // Send payment failed email
          const failedHtml = getEmailTemplate({
            title: 'Payment Failed',
            content: `
              <p>We were unable to process your payment for your subscription.</p>
              <p style="margin-top: 20px;"><strong>Amount:</strong> $${(invoice.amount_due / 100).toFixed(2)}</p>
              <p style="margin-top: 20px;">Please update your payment method to continue your subscription.</p>
            `,
            buttonText: 'Update Payment Method',
            buttonUrl: `${process.env.NEXTAUTH_URL}/settings`,
          })

          await sendEmail({
            to: user.email,
            subject: 'Payment Failed - Action Required',
            html: failedHtml,
          })
        }
        break
      }

      case 'payment_intent.succeeded': {
        const paymentIntent = event.data.object
        console.log('✅ Payment intent succeeded:', paymentIntent.id)
        break
      }

      case 'payment_intent.payment_failed': {
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
