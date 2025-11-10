export default function Features() {
  const features = [
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
        </svg>
      ),
      title: "Authentication Ready",
      description: "Email/password + Google OAuth. Secure sessions, password hashing, protected routes—all configured out of the box."
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
        </svg>
      ),
      title: "Stripe Payments",
      description: "Accept payments instantly. Subscription management, webhooks, and customer portals included."
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"></path>
        </svg>
      ),
      title: "MongoDB Database",
      description: "Mongoose models, MongoDB Atlas ready. Your data is stored securely and scales effortlessly."
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
        </svg>
      ),
      title: "Beautiful UI",
      description: "Tailwind CSS + DaisyUI. Fully responsive, accessible, gorgeous on every device. Dark mode included."
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      ),
      title: "Deploy to Vercel",
      description: "One-click deployment. Auto-scaling, CDN, SSL certificates—everything handled for you."
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
        </svg>
      ),
      title: "Clean Code",
      description: "Modular, documented, production-ready. Each component has a single purpose—easy to customize."
    }
  ]

  return (
    <section id="features" className="py-24 px-4 bg-gradient-to-br from-sand/30 via-white to-seafoam/10">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20 animate-slide-down">
          <h2 className="text-5xl md:text-6xl font-black mb-4 text-ocean-deep">
            Everything you need to ship fast
          </h2>
          <p className="text-xl md:text-2xl text-ocean-blue/70 max-w-3xl mx-auto">
            Stop wasting weeks on boilerplate. Get production-ready code and start building your unique features today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="card bg-white hover:bg-gradient-to-br hover:from-white hover:to-seafoam/5 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group animate-scale-in border border-ocean-blue/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="card-body p-8">
                <div className="text-ocean-teal mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="card-title text-2xl mb-3 text-ocean-deep font-black">{feature.title}</h3>
                <p className="text-ocean-blue/70 text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="mt-24 text-center animate-fade-in">
          <h3 className="text-3xl font-black mb-8 text-ocean-deep">Built with modern tech stack</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Next.js 14', 'React', 'Tailwind CSS', 'MongoDB', 'Stripe', 'NextAuth', 'Vercel'].map((tech, i) => (
              <div 
                key={i} 
                className="badge badge-lg bg-white border-2 border-ocean-teal text-ocean-deep font-bold px-6 py-4 hover:bg-ocean-teal hover:text-white transition-all duration-300 cursor-default text-base"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
