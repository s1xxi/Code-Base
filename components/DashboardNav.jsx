'use client'

import Link from 'next/link'
import { signOut } from 'next-auth/react'

export default function DashboardNav({ user }) {
  return (
    <div className="navbar bg-base-100 shadow-lg">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl font-bold">
          SaaSify
        </Link>
        <div className="hidden md:flex ml-8">
          <Link href="/dashboard" className="btn btn-ghost">
            Dashboard
          </Link>
          <Link href="/settings" className="btn btn-ghost">
            Settings
          </Link>
        </div>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full bg-primary text-primary-content flex items-center justify-center">
              {user?.email?.[0]?.toUpperCase() || 'U'}
            </div>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li className="menu-title">
              <span>{user?.email}</span>
            </li>
            <li><Link href="/dashboard">Dashboard</Link></li>
            <li><Link href="/settings">Settings</Link></li>
            <li><button onClick={() => signOut()}>Logout</button></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

