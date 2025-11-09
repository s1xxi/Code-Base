/**
 * EMAIL SENDER COMPONENT
 * 
 * Purpose: Send emails for notifications, welcome messages, password resets
 * Usage: Import and call sendEmail function
 * 
 * Options:
 * - Resend (recommended, free tier)
 * - SendGrid
 * - NodeMailer
 * 
 * Example:
 * import { sendEmail } from './email-send'
 * await sendEmail({
 *   to: 'user@email.com',
 *   subject: 'Welcome!',
 *   html: '<h1>Welcome to our app!</h1>'
 * })
 * 
 * Setup Required:
 * - Resend API key in .env.local: RESEND_API_KEY
 */

// Using Resend (free, easy, 100 emails/day)
export async function sendEmail({ to, subject, html, text }) {
  const RESEND_API_KEY = process.env.RESEND_API_KEY
  
  if (!RESEND_API_KEY) {
    console.error('RESEND_API_KEY not configured')
    return { error: 'Email service not configured' }
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'onboarding@yourdomain.com', // Change to your verified domain
        to,
        subject,
        html: html || text,
      }),
    })

    const data = await response.json()
    
    if (!response.ok) {
      throw new Error(data.message || 'Failed to send email')
    }

    return { success: true, data }
  } catch (error) {
    console.error('Email send error:', error)
    return { error: error.message }
  }
}

// Email Templates
export const emailTemplates = {
  welcome: (name) => ({
    subject: 'Welcome to Our Platform!',
    html: `
      <h1>Welcome, ${name}!</h1>
      <p>Thanks for signing up. We're excited to have you on board.</p>
      <p>Get started by exploring your dashboard.</p>
    `
  }),
  
  passwordReset: (resetLink) => ({
    subject: 'Reset Your Password',
    html: `
      <h1>Reset Your Password</h1>
      <p>Click the link below to reset your password:</p>
      <a href="${resetLink}">Reset Password</a>
      <p>This link expires in 1 hour.</p>
    `
  }),
  
  subscriptionSuccess: (planName) => ({
    subject: 'Subscription Confirmed!',
    html: `
      <h1>Welcome to ${planName}!</h1>
      <p>Your subscription has been confirmed.</p>
      <p>You now have access to all premium features.</p>
    `
  })
}

