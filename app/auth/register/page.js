/**
 * REGISTER PAGE
 * 
 * Purpose: User registration page using modular components
 * Uses: RegisterForm, GoogleAuthButton components
 */

'use client'

import Link from 'next/link'
import RegisterForm from '@/components/forms/RegisterForm'
import GoogleAuthButton from '@/components/buttons/GoogleAuthButton'

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10 p-4">
      <div className="card w-full max-w-md shadow-2xl bg-base-100">
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold text-center justify-center mb-6">
            Create Account
          </h2>
          
          {/* Modular Register Form Component */}
          <RegisterForm redirectTo="/dashboard" />

          <div className="divider">OR</div>

          {/* Modular Google Auth Button Component */}
          <GoogleAuthButton callbackUrl="/dashboard" />

          <p className="text-center mt-4">
            Already have an account?{' '}
            <Link href="/auth/login" className="link link-primary">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

