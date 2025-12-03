import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/libs/next-auth'
import connectMongo from '@/libs/mongoose'
import User from '@/models/User'
import { stripe } from '@/libs/stripe'

export async function DELETE(req) {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await connectMongo()

    const user = await User.findOne({ email: session.user.email })

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    // Cancel Stripe subscription if exists
    if (user.customerId) {
      try {
        const customer = await stripe.customers.retrieve(user.customerId)
        
        if (customer.subscriptions?.data?.length > 0) {
          // Cancel all active subscriptions
          for (const subscription of customer.subscriptions.data) {
            await stripe.subscriptions.cancel(subscription.id)
          }
        }
      } catch (error) {
        console.error('Error canceling Stripe subscription:', error)
        // Continue with deletion even if Stripe cancellation fails
      }
    }

    // Delete user from database
    await User.findByIdAndDelete(user._id)

    return NextResponse.json({ message: 'Account deleted successfully' })
  } catch (error) {
    console.error('Delete account error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}






