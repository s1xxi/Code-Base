export default function FAQ() {
  const faqs = [
    {
      question: "What's included?",
      answer: "Complete Next.js codebase with auth (email + Google), Stripe payments, MongoDB database, Tailwind UI, and lifetime updates."
    },
    {
      question: "Is there a free trial?",
      answer: "Yes! All plans include a 7-day free trial. No credit card required. Try everything risk-free."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Absolutely. Cancel anytime with one click. No questions asked, no hidden fees."
    },
    {
      question: "What happens after the trial?",
      answer: "After 7 days, you'll be charged based on your plan. You'll get an email reminder before."
    },
    {
      question: "Can I switch plans?",
      answer: "Yes! Upgrade or downgrade between Starter, Pro, and Expert at any time."
    },
    {
      question: "Do you offer support?",
      answer: "Yes! Email support included. Pro and Expert get priority support."
    },
  ]

  return (
    <section id="faq" className="py-24 px-4 bg-[#f0f9ff]">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-[#0c4a6e] animate-slide-down">
          FAQ
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="collapse collapse-plus bg-white border border-[#0c4a6e]/20 animate-slide-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-xl font-bold text-[#0c4a6e]">
                {faq.question}
              </div>
              <div className="collapse-content">
                <p className="text-[#0c4a6e]/70 text-lg">
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
