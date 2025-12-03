import { NextResponse } from 'next/server'
import connectMongo from '@/libs/mongoose'
import User from '@/models/User'
import crypto from 'crypto'
import { sendEmail, getEmailTemplate } from '@/libs/email'

export async function POST(req) {
  try {
    const { email } = await req.json()

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    await connectMongo()

    const user = await User.findOne({ email: email.toLowerCase() })

    // Don't reveal if user exists - security best practice
    if (!user) {
      return NextResponse.json({ 
        message: 'If an account exists with that email, you will receive a password reset link shortly.' 
      })
    }

    // Generate reset token
    const resetToken = crypto.randomBytes(32).toString('hex')
    const resetTokenExpiry = Date.now() + 3600000 // 1 hour

    // Save reset token to user
    user.resetPasswordToken = resetToken
    user.resetPasswordExpires = resetTokenExpiry
    await user.save()

    // Send reset email
    const resetUrl = `${process.env.NEXTAUTH_URL}/auth/reset-password?token=${resetToken}`
    
    const emailHtml = getEmailTemplate({
      title: 'Reset Your Password',
      content: `
        <p>You requested to reset your password. Click the button below to create a new password:</p>
        <p style="margin-top: 20px;">This link will expire in 1 hour.</p>
        <p style="margin-top: 10px; color: #6b7280; font-size: 14px;">If you didn't request this, you can safely ignore this email.</p>
      `,
      buttonText: 'Reset Password',
      buttonUrl: resetUrl,
      footerText: 'If the button doesn't work, copy and paste this link into your browser: ' + resetUrl
    })

    const emailResult = await sendEmail({
      to: user.email,
      subject: 'Reset Your Password',
      html: emailHtml,
    })

    if (!emailResult.success) {
      console.error('Failed to send reset email:', emailResult.error)
      // Still return success to user for security
    }

    return NextResponse.json({ 
      message: 'If an account exists with that email, you will receive a password reset link shortly.' 
    })
  } catch (error) {
    console.error('Forgot password error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}






