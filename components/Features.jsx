export default function Features() {
  const benefits = [
    {
      title: "Complete Authentication",
      description: "Email/password and Google OAuth. Secure sessions, password hashing, protected routes - all built in.",
      iconDefault: (
        <svg className="w-16 h-16 transition-all duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      ),
      iconHover: (
        <svg className="w-16 h-16 transition-alevl duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
      ),
    },
    {
      title: "Payment Processing",
      description: "Stripe integration with subscription management, webhooks, and customer portals. Ready to accept payments.",
      iconDefault: (
        <svg className="w-16 h-16 transition-all duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2" stroke="currentColor" strokeWidth="2" fill="none"/>
          <line x1="1" y1="10" x2="23" y2="10" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      iconHover: (
        <svg className="w-16 h-16 transition-all duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" strokeWidth="2" fill="none"/>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" stroke="currentColor" strokeWidth="2" fill="none"/>
          <line x1="12" y1="22.08" x2="12" y2="12" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
    },
    {
      title: "Scalable Database",
      description: "MongoDB with Mongoose. Your data is stored securely and scales easily as your business grows.",
      iconDefault: (
        <svg className="w-16 h-16 transition-all duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="12" cy="5" rx="9" ry="3" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M21 5v14c0 1.66-4 3-9 3s-9-1.34-9-3V5" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      ),
      iconHover: (
        <svg className="w-16 h-16 transition-all duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M7.5 4.21l4.5 2.6 4.5-2.6" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M7.5 19.79V14.6L3 12" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M21 12l-4.5 2.6v5.19" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M3.27 6.96l8.73 5.05 8.73-5.05" stroke="currentColor" strokeWidth="2" fill="none"/>
          <line x1="12" y1="22.08" x2="12" y2="12.01" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
    }
  ]

  return (
    <section id="benefits" className="relative overflow-hidden bg-[#fdfefe] px-4 py-24 text-slate-900">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute top-0 right-16 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(191,219,254,0.5),transparent_70%)] blur-3xl"></div>
        <div className="absolute bottom-[-60px] left-1/3 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(191,219,254,0.3),transparent_70%)] blur-3xl"></div>
      </div>
      
      <div className="container relative z-10 mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">
            Benefits
          </h2>
          <p className="mx-auto max-w-2xl font-normal text-slate-600">
            Everything you need to launch your business quickly and efficiently.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="group rounded-2xl border border-blue-100 bg-white shadow-[0_15px_55px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-200"
            >
              <div className="p-10">
                <div className="relative mb-6 flex justify-center">
                  <div className="absolute inset-0 flex items-center justify-center text-slate-900 transition-opacity duration-300 group-hover:opacity-0">
                    {benefit.iconDefault}
                  </div>
                  <div
                    className="flex items-center justify-center text-slate-900 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ filter: 'drop-shadow(0 0 12px rgba(59,130,246,0.6)) drop-shadow(0 0 20px rgba(147,197,253,0.7))' }}
                  >
                    {benefit.iconHover}
                  </div>
                </div>
                <h3 className="mb-4 text-center text-2xl font-bold">
                  {benefit.title}
                </h3>
                <p className="text-center text-base leading-relaxed text-slate-600">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
