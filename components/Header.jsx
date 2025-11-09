import Link from 'next/link'
import ButtonSignin from './ButtonSignin'

export default function Header() {
  return (
    <header className="navbar bg-base-100 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost text-xl font-bold">
            SaaSify
          </Link>
        </div>
        <nav className="flex-none">
          <ul className="menu menu-horizontal px-1 hidden md:flex">
            <li><Link href="#features">Features</Link></li>
            <li><Link href="#pricing">Pricing</Link></li>
            <li><Link href="/dashboard">Dashboard</Link></li>
          </ul>
          <ButtonSignin />
        </nav>
      </div>
    </header>
  )
}

