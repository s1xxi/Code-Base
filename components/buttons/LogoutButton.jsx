/**
 * LOGOUT BUTTON COMPONENT
 * 
 * Purpose: Reusable logout button that signs user out
 * Usage: Import and use anywhere you need a logout button
 * 
 * Example:
 * import LogoutButton from '@/components/buttons/LogoutButton'
 * <LogoutButton />
 * 
 * Props:
 * - className: Additional CSS classes (optional)
 * - onLogout: Callback function after logout (optional)
 */

'use client'

import { signOut } from 'next-auth/react'

export default function LogoutButton({ className = '', onLogout }) {
  async function handleLogout() {
    await signOut({ callbackUrl: '/' })
    if (onLogout) onLogout()
  }

  return (
    <button 
      onClick={handleLogout}
      className={`btn btn-ghost ${className}`}
    >
      Logout
    </button>
  )
}

