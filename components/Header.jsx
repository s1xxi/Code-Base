'use client'

import Link from 'next/link'
import ButtonSignin from './ButtonSignin'

export default function Header() {
  return (
    <header className="navbar bg-white/95 px-4 py-4 border-b border-ocean-blue/20 sticky top-0 z-50 backdrop-blur-lg shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-black flex items-center gap-2 hover:opacity-80 transition-opacity text-ocean-deep">
          <div className="text-4xl">🌊</div>
          <span className="bg-gradient-to-r from-ocean-blue to-ocean-teal bg-clip-text text-transparent">
            SaaS Starter
          </span>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-1">
          <a href="#features" className="btn btn-ghost text-ocean-deep font-semibold hover:text-ocean-teal">
            Features
          </a>
          <a href="#pricing" className="btn btn-ghost text-ocean-deep font-semibold hover:text-ocean-teal">
            Pricing
          </a>
          <a href="#faq" className="btn btn-ghost text-ocean-deep font-semibold hover:text-ocean-teal">
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
