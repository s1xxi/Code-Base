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
    <section id="faq" className="relative overflow-hidden bg-[#fdfefe] px-4 py-24 text-slate-900">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute top-10 right-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(191,219,254,0.45),transparent_70%)] blur-3xl"></div>
        <div className="absolute bottom-[-50px] left-16 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(191,219,254,0.35),transparent_70%)] blur-3xl"></div>
      </div>
      
      <div className="container relative z-10 mx-auto max-w-3xl">
        <h2 className="mb-14 text-center text-3xl font-semibold leading-tight md:text-4xl">
          FAQ
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="collapse collapse-plus border border-blue-100 bg-white shadow-[0_12px_40px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-[2px] hover:border-blue-200"
            >
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-xl font-semibold text-slate-900 md:text-2xl">
                {faq.question}
              </div>
              <div className="collapse-content">
                <p className="text-lg font-medium text-slate-600 md:text-xl">
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
