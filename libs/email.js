import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail({ to, subject, html, from = 'Codebase <onboarding@resend.dev>' }) {
  if (!process.env.RESEND_API_KEY) {
    console.warn('RESEND_API_KEY not set, email not sent. Email would be:', { to, subject })
    return { success: false, error: 'Email service not configured' }
  }

  try {
    const data = await resend.emails.send({
      from,
      to,
      subject,
      html,
    })

    return { success: true, data }
  } catch (error) {
    console.error('Email send error:', error)
    return { success: false, error: error.message }
  }
}

export function getEmailTemplate({ title, content, buttonText, buttonUrl, footerText }) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
    <h1 style="color: white; margin: 0; font-size: 28px;">codebase</h1>
  </div>
  
  <div style="background: #ffffff; padding: 40px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 10px 10px;">
    <h2 style="color: #111827; margin-top: 0; font-size: 24px;">${title}</h2>
    
    <div style="color: #4b5563; font-size: 16px; margin: 20px 0;">
      ${content}
    </div>
    
    ${buttonText && buttonUrl ? `
    <div style="margin: 30px 0; text-align: center;">
      <a href="${buttonUrl}" style="display: inline-block; background: #667eea; color: white; text-decoration: none; padding: 14px 28px; border-radius: 6px; font-weight: 600; font-size: 16px;">${buttonText}</a>
    </div>
    ` : ''}
    
    ${footerText ? `
    <p style="color: #6b7280; font-size: 14px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
      ${footerText}
    </p>
    ` : ''}
  </div>
  
  <div style="text-align: center; margin-top: 20px; color: #9ca3af; font-size: 12px;">
    <p>© ${new Date().getFullYear()} codebase. All rights reserved.</p>
  </div>
</body>
</html>
  `
}






