import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import connectMongo from '@/libs/mongoose'
import User from '@/models/User'
import crypto from 'crypto'
import { sendEmail, getEmailTemplate } from '@/libs/email'

export async function POST(req) {
  try {
    const { name, email, password } = await req.json()

    // Validate input
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    if (password.length < 6) {
      return NextResponse.json(
        { error: 'Password must be at least 6 characters' },
        { status: 400 }
      )
    }

    // Connect to database
    await connectMongo()

    // Check if user already exists
    const existingUser = await User.findOne({ email })

    if (existingUser) {
      return NextResponse.json(
        { error: 'Email already registered' },
        { status: 400 }
      )
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Generate email verification token
    const emailVerificationToken = crypto.randomBytes(32).toString('hex')
    const emailVerificationExpires = Date.now() + 86400000 // 24 hours

    // Create user (email not verified yet)
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      emailVerificationToken,
      emailVerificationExpires,
      emailVerified: false,
    })

    // Send verification email
    const verificationUrl = `${process.env.NEXTAUTH_URL}/auth/verify-email?token=${emailVerificationToken}`
    
    const emailHtml = getEmailTemplate({
      title: 'Verify Your Email',
      content: `
        <p>Welcome to codebase! Please verify your email address to complete your registration.</p>
        <p style="margin-top: 20px;">Click the button below to verify your email:</p>
      `,
      buttonText: 'Verify Email',
      buttonUrl: verificationUrl,
      footerText: "This link will expire in 24 hours. If you didn't create an account, you can safely ignore this email."
    })

    const emailResult = await sendEmail({
      to: user.email,
      subject: 'Verify Your Email Address',
      html: emailHtml,
    })

    if (!emailResult.success) {
      console.error('Failed to send verification email:', emailResult.error)
      // Still return success - user is created, they can request resend later
    }

    // Send welcome email
    const welcomeHtml = getEmailTemplate({
      title: 'Welcome to codebase!',
      content: `
        <p>Thank you for signing up! We're excited to have you on board.</p>
        <p style="margin-top: 20px;">To get started, please verify your email address using the link we sent you.</p>
        <p style="margin-top: 20px;">If you have any questions, don't hesitate to reach out to our support team.</p>
      `,
      buttonText: 'Get Started',
      buttonUrl: `${process.env.NEXTAUTH_URL}/dashboard`,
    })

    await sendEmail({
      to: user.email,
      subject: 'Welcome to codebase!',
      html: welcomeHtml,
    })

    return NextResponse.json(
      { 
        message: 'User created successfully. Please check your email to verify your account.',
        userId: user._id,
        emailSent: emailResult.success
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

