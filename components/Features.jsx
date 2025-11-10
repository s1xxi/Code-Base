export default function Features() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
        </svg>
      ),
      title: "Authentication Ready",
      description: "Email/password + Google OAuth built-in. Secure sessions, password hashing, and protected routes out of the box."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
        </svg>
      ),
      title: "Stripe Payments",
      description: "One-time payment integration with webhooks. Customers pay once, get lifetime access. No subscription headaches."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"></path>
        </svg>
      ),
      title: "MongoDB Database",
      description: "Mongoose models, MongoDB Atlas connection, and user management. Your data is stored securely and scales easily."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
        </svg>
      ),
      title: "Beautiful UI",
      description: "Tailwind CSS + DaisyUI components. Responsive, accessible, and looks great on every device. Dark mode included."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      ),
      title: "Deploy to Vercel",
      description: "One-click deployment. Optimized for Vercel with automatic builds, previews, and production deploys."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
        </svg>
      ),
      title: "Clean Code",
      description: "Modular, documented, and organized. Each component has a single purpose. Easy to understand and customize."
    }
  ]

  return (
    <section id="features" className="py-24 px-4 bg-base-100">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything you need to ship fast
          </h2>
          <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
            Stop wasting weeks on boilerplate. Get a production-ready codebase and start building your unique features today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card bg-base-200 hover:shadow-xl transition-shadow">
              <div className="card-body">
                <div className="text-primary mb-4">
                  {feature.icon}
                </div>
                <h3 className="card-title text-xl mb-2">{feature.title}</h3>
                <p className="text-base-content/70">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-8">Built with modern tech stack</h3>
          <div className="flex flex-wrap justify-center gap-6 text-base-content/60">
            <div className="badge badge-lg badge-outline">Next.js 14</div>
            <div className="badge badge-lg badge-outline">React</div>
            <div className="badge badge-lg badge-outline">Tailwind CSS</div>
            <div className="badge badge-lg badge-outline">MongoDB</div>
            <div className="badge badge-lg badge-outline">Stripe</div>
            <div className="badge badge-lg badge-outline">NextAuth</div>
            <div className="badge badge-lg badge-outline">Vercel</div>
          </div>
        </div>
      </div>
    </section>
  )
}
