/**
 * LOGIN PAGE
 * 
 * Purpose: User login page using modular components
 * Uses: LoginForm, GoogleAuthButton components
 */

'use client'

import Link from 'next/link'
import LoginForm from '@/components/forms/LoginForm'
import GoogleAuthButton from '@/components/buttons/GoogleAuthButton'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10 p-4">
      <div className="card w-full max-w-md shadow-2xl bg-base-100">
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold text-center justify-center mb-6">
            Welcome Back
          </h2>
          
          {/* Modular Login Form Component */}
          <LoginForm redirectTo="/dashboard" />

          <div className="divider">OR</div>

          {/* Modular Google Auth Button Component */}
          <GoogleAuthButton callbackUrl="/dashboard" />

          <p className="text-center mt-4">
            Don't have an account?{' '}
            <Link href="/auth/register" className="link link-primary">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

