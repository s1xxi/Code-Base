/**
 * LOGIN BUTTON COMPONENT
 * 
 * Purpose: Reusable login button that redirects to login page
 * Usage: Import and use anywhere you need a login button
 * 
 * Example:
 * import LoginButton from '@/components/buttons/LoginButton'
 * <LoginButton />
 * 
 * Props:
 * - className: Additional CSS classes (optional)
 * - size: 'sm' | 'md' | 'lg' (optional, default: 'md')
 */

'use client'

import Link from 'next/link'

export default function LoginButton({ className = '', size = 'md' }) {
  const sizeClasses = {
    sm: 'btn-sm',
    md: '',
    lg: 'btn-lg'
  }

  return (
    <Link 
      href="/auth/login" 
      className={`btn btn-primary ${sizeClasses[size]} ${className}`}
    >
      Sign In
    </Link>
  )
}

