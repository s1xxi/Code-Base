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
    <section id="features" className="py-24 px-4 bg-[#f0f9ff]">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20 animate-slide-down">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-[#0c4a6e]">
            Everything you need
          </h2>
          <p className="text-xl text-[#0c4a6e]/70 max-w-3xl mx-auto">
            Stop wasting weeks on boilerplate. Start building your product today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="card bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="card-body p-8">
                <h3 className="text-2xl font-bold mb-3 text-[#0c4a6e]">{feature.title}</h3>
                <p className="text-[#0c4a6e]/70 text-lg">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="mt-24 text-center animate-fade-in">
          <h3 className="text-2xl font-bold mb-8 text-[#0c4a6e]">Built with modern tech</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Next.js 14', 'React', 'Tailwind', 'MongoDB', 'Stripe', 'NextAuth', 'Vercel'].map((tech, i) => (
              <div 
                key={i} 
                className="badge badge-lg bg-white border-2 border-[#0ea5e9] text-[#0c4a6e] font-semibold px-6 py-4 text-base"
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
