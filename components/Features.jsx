export default function Features() {
  const features = [
    {
      icon: '🚀',
      title: 'Next.js 14 App Router',
      description: 'Built on the latest Next.js with Server Components for optimal performance'
    },
    {
      icon: '🔐',
      title: 'Authentication Ready',
      description: 'NextAuth integration with email/password and OAuth providers'
    },
    {
      icon: '💳',
      title: 'Stripe Payments',
      description: 'Complete payment integration with subscriptions and webhooks'
    },
    {
      icon: '🗄️',
      title: 'MongoDB + Mongoose',
      description: 'Scalable database setup with clean schema models'
    },
    {
      icon: '🎨',
      title: 'Beautiful UI',
      description: 'Tailwind CSS + DaisyUI for stunning, responsive designs'
    },
    {
      icon: '⚡',
      title: 'Production Ready',
      description: 'Optimized, tested, and ready to deploy to Vercel'
    }
  ]

  return (
    <section id="features" className="py-24 bg-base-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need
          </h2>
          <p className="text-xl text-base-content/70">
            All the features to launch your SaaS in record time
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="card-body items-center text-center">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="card-title">{feature.title}</h3>
                <p className="text-base-content/70">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

