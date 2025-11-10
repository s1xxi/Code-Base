import './globals.css'
import { Inter } from 'next/font/google'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/libs/next-auth'
import SessionProvider from '@/components/SessionProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SaaS Boilerplate - Ship Your Product Faster',
  description: 'Modern SaaS boilerplate with Next.js, authentication, payments, and more',
}

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions)

  return (
    <html lang="en" data-theme="ocean">
      <body className={inter.className}>
        <SessionProvider session={session}>
          {children}
        </SessionProvider>
      </body>
    </html>
  )
}

