'use client'

import Link from 'next/link'
import ButtonSignin from './ButtonSignin'

export default function Header() {
  return (
    <header className="navbar bg-white px-4 py-4 border-b border-[#0c4a6e]/10 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-[#0c4a6e] hover:opacity-80 transition-opacity">
          SaaS Starter
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-1">
          <a href="#features" className="btn btn-ghost text-[#0c4a6e] font-semibold">
            Features
          </a>
          <a href="#pricing" className="btn btn-ghost text-[#0c4a6e] font-semibold">
            Pricing
          </a>
          <a href="#faq" className="btn btn-ghost text-[#0c4a6e] font-semibold">
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
