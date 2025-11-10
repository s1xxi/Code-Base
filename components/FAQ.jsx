export default function FAQ() {
  const faqs = [
    {
      question: "What's included?",
      answer: "Complete Next.js codebase with authentication (email + Google), Stripe payments, MongoDB database, beautiful UI (Tailwind + DaisyUI), and all features shown. Plus lifetime updates and support."
    },
    {
      question: "Is there a free trial?",
      answer: "Yes! All plans include a 7-day free trial. No credit card required to start. Try everything risk-free before you commit."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Absolutely. Cancel anytime with one click. No questions asked, no hidden fees. If you cancel during the trial, you won't be charged."
    },
    {
      question: "What happens after the trial?",
      answer: "After 7 days, you'll be automatically charged based on your selected plan (monthly or yearly). You'll receive an email reminder before the trial ends."
    },
    {
      question: "Can I switch plans later?",
      answer: "Yes! Upgrade or downgrade between Starter, Pro, and Expert at any time. Changes take effect immediately, and billing adjusts automatically."
    },
    {
      question: "Do I need to know how to code?",
      answer: "Basic knowledge of Next.js and React is helpful. The code is well-documented and modular, so even beginners can customize it with some learning."
    },
    {
      question: "Do you offer support?",
      answer: "Yes! Email support is included with all plans. Pro and Expert tiers get priority support with faster response times."
    },
    {
      question: "What if I don't like it?",
      answer: "If you're not satisfied, cancel within the 7-day trial period for a full refund. Even after, email us and we'll work it out."
    }
  ]

  return (
    <section id="faq" className="py-24 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-5xl md:text-6xl font-black text-center mb-16 text-ocean-deep animate-slide-down">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="collapse collapse-plus bg-gradient-to-r from-sand/20 to-seafoam/10 border border-ocean-blue/20 hover:border-ocean-teal transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-xl font-black text-ocean-deep">
                {faq.question}
              </div>
              <div className="collapse-content">
                <p className="text-ocean-blue/80 text-lg leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="text-center mt-12 animate-fade-in">
          <p className="text-ocean-blue/70 text-lg mb-4">
            Still have questions?
          </p>
          <a 
            href="mailto:support@example.com" 
            className="btn btn-outline border-2 border-ocean-teal text-ocean-teal hover:bg-ocean-teal hover:text-white font-bold"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  )
}
