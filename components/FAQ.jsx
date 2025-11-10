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
    <section id="faq" className="py-20 px-4 bg-[#e0f2fe]">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-14 text-black">
          FAQ
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="collapse collapse-plus bg-white/50 border border-black/5 hover:bg-white/70 transition-colors duration-200"
            >
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title font-semibold text-black">
                {faq.question}
              </div>
              <div className="collapse-content">
                <p className="text-black/60 text-sm">
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
