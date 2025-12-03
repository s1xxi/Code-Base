import './globals.css'
import { Inter, Space_Grotesk, Plus_Jakarta_Sans } from 'next/font/google'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/libs/next-auth'
import SessionProvider from '@/components/SessionProvider'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter'
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-plus-jakarta'
})

export const metadata = {
  title: 'codebase - Build Your Business Faster',
  description: 'A complete SaaS boilerplate template. Perfect for any business idea - from coffee shops to tech startups.',
}

export default async function RootLayout({ children }) {
  // Non-blocking session check with timeout
  let session = null
  try {
    const sessionPromise = getServerSession(authOptions)
    const timeoutPromise = new Promise((resolve) => setTimeout(() => resolve(null), 1000))
    session = await Promise.race([sessionPromise, timeoutPromise])
  } catch (error) {
    console.error('Session error:', error)
    // Continue without session if there's an error
  }

  return (
    <html lang="en" data-theme="light">
      <body className={`${plusJakartaSans.className} antialiased`}>
        <SessionProvider session={session}>
          {children}
        </SessionProvider>
      </body>
    </html>
  )
}

