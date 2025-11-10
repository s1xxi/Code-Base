export default function FAQ() {
  const faqs = [
    {
      question: "What's included?",
      answer: "You get the complete Next.js codebase with authentication (email + Google), Stripe payments, MongoDB database, beautiful UI with Tailwind + DaisyUI, and all the features shown on this page. Plus lifetime updates."
    },
    {
      question: "Is it a one-time payment?",
      answer: "Yes! Pay once, own it forever. No subscriptions, no monthly fees. You get lifetime access to the code and all future updates."
    },
    {
      question: "Can I use this for multiple projects?",
      answer: "Absolutely! Once you purchase, you can use it for unlimited projects. Build as many SaaS products as you want."
    },
    {
      question: "Do I need to know how to code?",
      answer: "Basic knowledge of Next.js and React is helpful, but the code is well-documented and organized. You can customize it even with beginner skills."
    },
    {
      question: "What tech stack does it use?",
      answer: "Next.js 14 (App Router), React, Tailwind CSS, DaisyUI, NextAuth, MongoDB (Mongoose), Stripe, and deployed on Vercel. Modern, fast, and scalable."
    },
    {
      question: "Will it work on Vercel?",
      answer: "Yes! It's optimized for Vercel and deploys in one click. But you can also deploy to any platform that supports Next.js."
    },
    {
      question: "Do you offer support?",
      answer: "Yes! You get email support to help you set up and customize the boilerplate. I'll help you ship your product."
    },
    {
      question: "What if I don't like it?",
      answer: "If you're not satisfied within 7 days, just email me and I'll refund you. No questions asked."
    }
  ]

  return (
    <section className="py-24 px-4 bg-base-100">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          FAQ
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="collapse collapse-plus bg-base-200">
              <input type="radio" name="faq-accordion" defaultChecked={index === 0} />
              <div className="collapse-title text-xl font-bold">
                {faq.question}
              </div>
              <div className="collapse-content">
                <p className="text-base-content/70 text-lg">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

