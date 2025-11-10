export default function Features() {
  const features = [
    {
      title: "Authentication",
      description: "Email/password + Google OAuth. Secure sessions, password hashing, protected routes."
    },
    {
      title: "Payments",
      description: "Stripe integration with subscription management, webhooks, and customer portals."
    },
    {
      title: "Database",
      description: "MongoDB with Mongoose. Your data is stored securely and scales easily."
    },
    {
      title: "Beautiful UI",
      description: "Tailwind CSS + DaisyUI. Responsive, accessible, looks great on every device."
    },
    {
      title: "One-Click Deploy",
      description: "Deploy to Vercel instantly. Auto-scaling, CDN, SSL—all handled for you."
    },
    {
      title: "Clean Code",
      description: "Modular and documented. Each component has a single purpose—easy to customize."
    }
  ]

  return (
    <section id="features" className="py-20 px-4 bg-[#e0f2fe]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-3 text-black">
            Everything you need
          </h2>
          <p className="text-black/60 max-w-2xl mx-auto">
            Stop wasting weeks on boilerplate. Start building your product today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="card bg-white/50 border border-black/5 hover:bg-white/70 transition-colors duration-200"
            >
              <div className="card-body p-6">
                <h3 className="text-lg font-semibold mb-2 text-black">{feature.title}</h3>
                <p className="text-black/60 text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="mt-16 text-center">
          <h3 className="text-lg font-semibold mb-6 text-black">Built with modern tech</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Next.js 14', 'React', 'Tailwind', 'MongoDB', 'Stripe', 'NextAuth', 'Vercel'].map((tech, i) => (
              <div 
                key={i} 
                className="badge badge-lg bg-white/50 border border-black/10 text-black font-normal px-4 py-3"
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
