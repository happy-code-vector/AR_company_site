import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - AppHubUSA',
  description: 'Terms of service for AppHubUSA mobile applications.',
}

export default function TermsPage() {
  return (
    <>
      <section className="py-24 relative">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="gradient-text">Terms of Service</span>
            </h1>
            <p className="text-light-400 mb-8">Last updated: February 2025</p>

            <div className="prose prose-invert prose-lg max-w-none">
              <div className="space-y-8 text-light-300">

                <div>
                  <h2 className="text-2xl font-semibold text-light-100 mb-4">Agreement to Terms</h2>
                  <p>
                    By downloading, installing, or using any mobile application developed by AppHubUSA
                    (including QuizliAI and Coupl), you agree to be bound by these Terms of Service.
                    If you do not agree to these terms, please do not use our Apps.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-light-100 mb-4">License to Use</h2>
                  <p>
                    AppHubUSA grants you a limited, non-exclusive, non-transferable, revocable license
                    to use our Apps for personal, non-commercial purposes, subject to these Terms.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-light-100 mb-4">User Responsibilities</h2>
                  <p>You agree to:</p>
                  <ul className="list-disc list-inside space-y-2 mt-4">
                    <li>Use our Apps only for lawful purposes</li>
                    <li>Not attempt to reverse engineer, decompile, or disassemble our Apps</li>
                    <li>Not use our Apps to transmit harmful code or malicious content</li>
                    <li>Maintain the confidentiality of your account credentials</li>
                    <li>Not interfere with or disrupt the operation of our Apps</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-light-100 mb-4">User Content</h2>
                  <p>
                    You retain ownership of content you create within our Apps (such as notes,
                    flashcards, or journal entries). You are responsible for the content you create
                    and must ensure it does not violate any laws or third-party rights.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-light-100 mb-4">Subscriptions and Payments</h2>
                  <p>
                    Some features of our Apps may require a subscription. By subscribing, you agree to
                    pay the applicable fees. Subscriptions automatically renew unless cancelled at least
                    24 hours before the end of the current period. You can manage subscriptions through
                    your Apple ID account settings.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-light-100 mb-4">Intellectual Property</h2>
                  <p>
                    Our Apps, including all content, features, and functionality, are owned by AppHubUSA
                    and are protected by intellectual property laws. You may not copy, modify, distribute,
                    sell, or lease any part of our Apps.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-light-100 mb-4">Disclaimer of Warranties</h2>
                  <p>
                    Our Apps are provided &quot;as is&quot; without warranties of any kind, either express or implied.
                    We do not guarantee that our Apps will be uninterrupted, error-free, or free of viruses
                    or other harmful components.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-light-100 mb-4">Limitation of Liability</h2>
                  <p>
                    To the maximum extent permitted by law, AppHubUSA shall not be liable for any indirect,
                    incidental, special, consequential, or punitive damages arising out of or related to
                    your use of our Apps.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-light-100 mb-4">Termination</h2>
                  <p>
                    We may terminate or suspend your access to our Apps at any time, without prior notice,
                    for conduct that we believe violates these Terms or is harmful to other users, us, or
                    third parties, or for any other reason.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-light-100 mb-4">Governing Law</h2>
                  <p>
                    These Terms shall be governed by and construed in accordance with the laws of the
                    State of New York, without regard to its conflict of law provisions.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-light-100 mb-4">Changes to Terms</h2>
                  <p>
                    We reserve the right to modify these Terms at any time. We will notify users of any
                    material changes by posting the updated Terms on this page. Your continued use of
                    our Apps after such modifications constitutes your acceptance of the new Terms.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-light-100 mb-4">Contact Us</h2>
                  <p>
                    If you have any questions about these Terms, please contact us at:
                  </p>
                  <p className="mt-4">
                    <a href="mailto:info@apphubusa.com" className="text-accent-purple hover:text-accent-pink transition-colors">
                      info@apphubusa.com
                    </a>
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
