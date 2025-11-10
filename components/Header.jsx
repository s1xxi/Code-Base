'use client'

import Link from 'next/link'
import ButtonSignin from './ButtonSignin'

export default function Header() {
  return (
    <header className="navbar bg-[#e0f2fe] px-4 py-4 border-b border-black/5 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-lg font-semibold text-black hover:opacity-80 transition-opacity">
          SaaS Starter
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-1">
          <a href="#features" className="btn btn-ghost btn-sm text-black font-normal">
            Features
          </a>
          <a href="#pricing" className="btn btn-ghost btn-sm text-black font-normal">
            Pricing
          </a>
          <a href="#faq" className="btn btn-ghost btn-sm text-black font-normal">
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
