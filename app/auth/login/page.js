/**
 * LOGIN PAGE
 * 
 * Purpose: Clean, simple login page matching the reference design
 */

'use client'

import Link from 'next/link'
import LoginForm from '@/components/forms/LoginForm'
import GoogleAuthButton from '@/components/buttons/GoogleAuthButton'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-white">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold text-slate-900 mb-2">Welcome Back</h1>
        </div>

        <div className="space-y-6">
          <LoginForm redirectTo="/dashboard" />
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-slate-500">OR</span>
            </div>
          </div>

          <GoogleAuthButton text="Continue with Google" />
          
          <div className="text-center text-sm text-slate-600">
            Don't have an account?{' '}
            <Link href="/auth/register" className="font-medium text-slate-900 hover:text-slate-700">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

