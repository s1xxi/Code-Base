import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '@/libs/next-auth'
import DashboardNav from '@/components/DashboardNav'

export default async function DashboardLayout({ children }) {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/auth/login')
  }

  return (
    <div className="min-h-screen bg-base-200">
      <DashboardNav user={session.user} />
      <main className="container mx-auto p-4 md:p-8">
        {children}
      </main>
    </div>
  )
}

