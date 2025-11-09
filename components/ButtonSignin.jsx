'use client'

import { useSession, signIn, signOut } from 'next-auth/react'
import Link from 'next/link'

export default function ButtonSignin() {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return <button className="btn btn-ghost loading"></button>
  }

  if (session) {
    return (
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full bg-primary text-primary-content flex items-center justify-center">
            {session.user?.email?.[0]?.toUpperCase() || 'U'}
          </div>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li><Link href="/dashboard">Dashboard</Link></li>
          <li><Link href="/settings">Settings</Link></li>
          <li><button onClick={() => signOut({ callbackUrl: '/' })}>Logout</button></li>
        </ul>
      </div>
    )
  }

  return (
    <Link href="/auth/login" className="btn btn-primary">
      Sign In
    </Link>
  )
}

