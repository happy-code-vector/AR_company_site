import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - AppHubUSA',
  description: 'Privacy policy for AppHubUSA mobile applications.',
}

export default function PrivacyPage() {
  return (
    <>
      <section className="py-24 relative">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="gradient-text">Privacy Policy</span>
            </h1>
            <p className="text-light-400 mb-8">Last updated: February 2025</p>

            <div className="prose prose-invert prose-lg max-w-none">
              <div className="space-y-8 text-light-300">

                <div>
                  <h2 className="text-2xl font-semibold text-light-100 mb-4">Introduction</h2>
                  <p>
                    AppHubUSA (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
                    This Privacy Policy explains how we collect, use, and safeguard your information
                    when you use our mobile applications, including QuizliAI and Coupl (collectively, our &quot;Apps&quot;).
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-light-100 mb-4">Information We Collect</h2>
                  <p>We may collect the following types of information:</p>
                  <ul className="list-disc list-inside space-y-2 mt-4">
                    <li><strong>Account Information:</strong> Email address, name (if provided)</li>
                    <li><strong>Usage Data:</strong> How you interact with our Apps</li>
                    <li><strong>Content You Create:</strong> Notes, flashcards, journal entries, and other content you generate within our Apps</li>
                    <li><strong>Device Information:</strong> Device type, operating system version</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-light-100 mb-4">How We Use Your Information</h2>
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc list-inside space-y-2 mt-4">
                    <li>Provide and improve our Apps&apos; functionality</li>
                    <li>Personalize your experience</li>
                    <li>Communicate with you about updates and support</li>
                    <li>Analyze usage patterns to improve our products</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-light-100 mb-4">Data Storage and Security</h2>
                  <p>
                    Your data is stored securely using industry-standard encryption. We implement
                    appropriate technical and organizational measures to protect your personal
                    information against unauthorized access, alteration, disclosure, or destruction.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-light-100 mb-4">Third-Party Services</h2>
                  <p>
                    Our Apps may use third-party services that have their own privacy policies.
                    We encourage you to review the privacy policies of these services. We do not
                    sell your personal information to third parties.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-light-100 mb-4">Your Rights</h2>
                  <p>You have the right to:</p>
                  <ul className="list-disc list-inside space-y-2 mt-4">
                    <li>Access your personal data</li>
                    <li>Correct inaccurate data</li>
                    <li>Request deletion of your data</li>
                    <li>Export your data</li>
                    <li>Delete your account at any time</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-light-100 mb-4">Children&apos;s Privacy</h2>
                  <p>
                    Our Apps are not intended for children under 13. We do not knowingly collect
                    personal information from children under 13. If you believe we have collected
                    information from a child under 13, please contact us immediately.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-light-100 mb-4">Changes to This Policy</h2>
                  <p>
                    We may update this Privacy Policy from time to time. We will notify you of
                    any changes by posting the new Privacy Policy on this page and updating the
                    &quot;Last updated&quot; date.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-light-100 mb-4">Contact Us</h2>
                  <p>
                    If you have any questions about this Privacy Policy, please contact us at:
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
