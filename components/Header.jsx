'use client'

import Link from 'next/link'
import ButtonSignin from './ButtonSignin'

export default function Header() {
  return (
    <header className="navbar bg-base-100 px-4 py-4 border-b border-base-300 sticky top-0 z-50 backdrop-blur-lg bg-base-100/80">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="text-3xl">⚡</div>
          <span>SaaS Starter</span>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-1">
          <a href="#features" className="btn btn-ghost">
            Features
          </a>
          <a href="#pricing" className="btn btn-ghost">
            Pricing
          </a>
          <a href="#faq" className="btn btn-ghost">
            FAQ
          </a>
        </nav>

        {/* Auth Button */}
        <div className="flex items-center gap-2">
          <ButtonSignin />
        </div>
      </div>
    </header>
  )
}
