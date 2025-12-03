export const metadata = {
  title: 'Terms of Service - codebase',
  description: 'Terms of Service for codebase',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto max-w-4xl px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none space-y-6 text-slate-700">
          <p className="text-sm text-slate-500">Last updated: {new Date().toLocaleDateString()}</p>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using codebase, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Use License</h2>
            <p>
              Permission is granted to temporarily use codebase for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>modify or copy the materials</li>
              <li>use the materials for any commercial purpose</li>
              <li>attempt to decompile or reverse engineer any software</li>
              <li>remove any copyright or other proprietary notations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Payment Terms</h2>
            <p>
              All payments are processed securely through Stripe. By making a purchase, you agree to our payment terms:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Payments are processed immediately</li>
              <li>All sales are final unless otherwise stated</li>
              <li>Refunds are handled on a case-by-case basis</li>
              <li>Subscription renewals are automatic unless canceled</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. User Accounts</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Limitation of Liability</h2>
            <p>
              In no event shall codebase or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on codebase.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Revisions</h2>
            <p>
              codebase may revise these terms of service at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}






