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
            {/* Header */}
            <div className="text-center mb-12">
              <span className="text-accent-purple text-sm font-semibold uppercase tracking-wider">Legal</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
                <span className="gradient-text">Privacy Policy</span>
              </h1>
              <p className="text-light-400">Effective Date: January 1, 2025 · Last Updated: February 2025</p>
            </div>

            {/* Intro Box */}
            <div className="glass rounded-2xl p-6 mb-12 border-l-4 border-accent-purple">
              <p className="text-light-300">
                This Privacy Policy applies to all applications developed and published by AppHubUSA (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), including <strong className="text-light-100">QuizliAI</strong> and <strong className="text-light-100">Coupl</strong>. We are committed to protecting your personal information and your right to privacy.
              </p>
            </div>

            {/* Table of Contents */}
            <div className="glass rounded-2xl p-8 mb-12">
              <h3 className="text-xl font-semibold text-light-100 mb-4">Table of Contents</h3>
              <ol className="grid grid-cols-1 md:grid-cols-2 gap-2 list-decimal list-inside">
                <li><a href="#information-we-collect" className="text-accent-purple hover:text-accent-pink transition-colors">Information We Collect</a></li>
                <li><a href="#how-we-use" className="text-accent-purple hover:text-accent-pink transition-colors">How We Use Your Information</a></li>
                <li><a href="#sharing" className="text-accent-purple hover:text-accent-pink transition-colors">Sharing of Information</a></li>
                <li><a href="#data-retention" className="text-accent-purple hover:text-accent-pink transition-colors">Data Retention</a></li>
                <li><a href="#security" className="text-accent-purple hover:text-accent-pink transition-colors">Data Security</a></li>
                <li><a href="#children" className="text-accent-purple hover:text-accent-pink transition-colors">Children&apos;s Privacy</a></li>
                <li><a href="#your-rights" className="text-accent-purple hover:text-accent-pink transition-colors">Your Rights and Choices</a></li>
                <li><a href="#third-party" className="text-accent-purple hover:text-accent-pink transition-colors">Third-Party Services</a></li>
                <li><a href="#changes" className="text-accent-purple hover:text-accent-pink transition-colors">Changes to This Policy</a></li>
                <li><a href="#contact" className="text-accent-purple hover:text-accent-pink transition-colors">Contact Us</a></li>
              </ol>
            </div>

            {/* Sections */}
            <div className="space-y-12">
              {/* Section 1 */}
              <div id="information-we-collect" className="scroll-mt-24">
                <span className="text-xs font-bold uppercase tracking-wider gradient-text">Section 01</span>
                <h2 className="text-2xl font-semibold text-light-100 mt-2 mb-4">Information We Collect</h2>
                <p className="text-light-300 mb-4">We collect information you provide directly to us when you use our applications. The specific information collected depends on the app you use and the features you enable.</p>
                <p className="text-light-300 mb-2"><strong className="text-light-100">Information you provide directly:</strong></p>
                <ul className="list-disc list-inside text-light-300 space-y-2 mb-4">
                  <li>Account information such as name, email address, and password when you create an account</li>
                  <li>Profile information such as a display name or profile photo</li>
                  <li>Content you create within our apps, such as study notes, quiz responses, or relationship prompts and reflections</li>
                  <li>Communications you send to us, such as support requests or feedback</li>
                </ul>
                <p className="text-light-300 mb-2"><strong className="text-light-100">Information collected automatically:</strong></p>
                <ul className="list-disc list-inside text-light-300 space-y-2 mb-4">
                  <li>Device information, including device type, operating system version, and unique device identifiers</li>
                  <li>App usage data, such as features accessed and session duration, to help us improve the app experience</li>
                  <li>Crash reports and diagnostic data to identify and fix technical issues</li>
                </ul>
                <p className="text-light-300">We do <strong className="text-light-100">not</strong> collect sensitive personal data such as financial information, precise geolocation, or biometric identifiers unless explicitly required for a specific feature, in which case we will ask for your consent in advance.</p>
              </div>

              <hr className="border-white/10" />

              {/* Section 2 */}
              <div id="how-we-use" className="scroll-mt-24">
                <span className="text-xs font-bold uppercase tracking-wider gradient-text">Section 02</span>
                <h2 className="text-2xl font-semibold text-light-100 mt-2 mb-4">How We Use Your Information</h2>
                <p className="text-light-300 mb-4">We use the information we collect for the following purposes:</p>
                <ul className="list-disc list-inside text-light-300 space-y-2 mb-4">
                  <li>To provide, maintain, and improve our applications and their features</li>
                  <li>To personalize your in-app experience, such as tailoring study content or relationship prompts</li>
                  <li>To send you important notices, including updates to our terms or policies</li>
                  <li>To respond to your comments, questions, and requests for customer support</li>
                  <li>To analyze usage trends and app performance to improve functionality</li>
                  <li>To detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
                  <li>To comply with applicable laws and regulations</li>
                </ul>
                <div className="glass rounded-xl p-4 border-l-4 border-accent-purple">
                  <p className="text-light-300"><strong className="text-light-100">We do not sell your personal data to third parties.</strong> We will never share your information with advertisers or data brokers.</p>
                </div>
              </div>

              <hr className="border-white/10" />

              {/* Section 3 */}
              <div id="sharing" className="scroll-mt-24">
                <span className="text-xs font-bold uppercase tracking-wider gradient-text">Section 03</span>
                <h2 className="text-2xl font-semibold text-light-100 mt-2 mb-4">Sharing of Information</h2>
                <p className="text-light-300 mb-4">We do not share your personal information with third parties except in the following limited circumstances:</p>
                <ul className="list-disc list-inside text-light-300 space-y-2">
                  <li><strong className="text-light-100">Service providers:</strong> We may share information with trusted vendors who assist us in operating our apps, such as cloud hosting providers, analytics services, and customer support tools. These parties are contractually required to keep your information confidential and may only use it to perform services on our behalf.</li>
                  <li><strong className="text-light-100">Legal compliance:</strong> We may disclose information if required to do so by law or in response to a valid legal request, such as a court order or government inquiry.</li>
                  <li><strong className="text-light-100">Protection of rights:</strong> We may share information when we believe in good faith that disclosure is necessary to protect the rights, property, or safety of AppHubUSA, our users, or the public.</li>
                  <li><strong className="text-light-100">Business transfers:</strong> In the event of a merger, acquisition, or sale of all or part of our assets, your information may be transferred as part of that transaction. We will notify you via email or in-app notice of any such change in ownership.</li>
                </ul>
              </div>

              <hr className="border-white/10" />

              {/* Section 4 */}
              <div id="data-retention" className="scroll-mt-24">
                <span className="text-xs font-bold uppercase tracking-wider gradient-text">Section 04</span>
                <h2 className="text-2xl font-semibold text-light-100 mt-2 mb-4">Data Retention</h2>
                <p className="text-light-300 mb-4">We retain your personal information for as long as your account is active or as needed to provide you services. You may delete your account at any time from within the app settings. Upon deletion, we will remove your personal data from our systems within 30 days, except where we are required to retain it for legal or regulatory purposes.</p>
                <p className="text-light-300">Anonymized and aggregated data that cannot be linked back to you may be retained indefinitely for research, analytics, and product improvement purposes.</p>
              </div>

              <hr className="border-white/10" />

              {/* Section 5 */}
              <div id="security" className="scroll-mt-24">
                <span className="text-xs font-bold uppercase tracking-wider gradient-text">Section 05</span>
                <h2 className="text-2xl font-semibold text-light-100 mt-2 mb-4">Data Security</h2>
                <p className="text-light-300 mb-4">We implement industry-standard technical and organizational measures to protect your personal information against unauthorized access, disclosure, alteration, or destruction. These measures include:</p>
                <ul className="list-disc list-inside text-light-300 space-y-2 mb-4">
                  <li>Encryption of data in transit using TLS (Transport Layer Security)</li>
                  <li>Encrypted storage of sensitive data at rest</li>
                  <li>Access controls limiting who can view personal data within our organization</li>
                  <li>Regular security reviews and monitoring</li>
                </ul>
                <p className="text-light-300">While we take data security seriously, no method of transmission over the internet or method of electronic storage is 100% secure. We encourage you to use a strong, unique password and to keep your login credentials private.</p>
              </div>

              <hr className="border-white/10" />

              {/* Section 6 */}
              <div id="children" className="scroll-mt-24">
                <span className="text-xs font-bold uppercase tracking-wider gradient-text">Section 06</span>
                <h2 className="text-2xl font-semibold text-light-100 mt-2 mb-4">Children&apos;s Privacy</h2>
                <p className="text-light-300 mb-4">Our applications are not directed to children under the age of 13, and we do not knowingly collect personal information from children under 13. If we learn that we have collected personal information from a child under 13 without verifiable parental consent, we will take steps to delete that information promptly.</p>
                <p className="text-light-300">If you are a parent or guardian and believe that your child has provided us with personal information, please contact us at <strong className="text-light-100">info@apphubusa.com</strong> so that we can take appropriate action.</p>
              </div>

              <hr className="border-white/10" />

              {/* Section 7 */}
              <div id="your-rights" className="scroll-mt-24">
                <span className="text-xs font-bold uppercase tracking-wider gradient-text">Section 07</span>
                <h2 className="text-2xl font-semibold text-light-100 mt-2 mb-4">Your Rights and Choices</h2>
                <p className="text-light-300 mb-4">Depending on your location, you may have certain rights regarding your personal information:</p>
                <ul className="list-disc list-inside text-light-300 space-y-2 mb-4">
                  <li><strong className="text-light-100">Access:</strong> You may request a copy of the personal information we hold about you.</li>
                  <li><strong className="text-light-100">Correction:</strong> You may request that we correct inaccurate or incomplete information.</li>
                  <li><strong className="text-light-100">Deletion:</strong> You may request that we delete your personal information. You can also delete your account directly within the app.</li>
                  <li><strong className="text-light-100">Portability:</strong> You may request that we provide your data in a structured, machine-readable format.</li>
                  <li><strong className="text-light-100">Objection:</strong> You may object to the processing of your personal information in certain circumstances.</li>
                </ul>
                <p className="text-light-300">To exercise any of these rights, please contact us at <strong className="text-light-100">info@apphubusa.com</strong>. We will respond to your request within 30 days.</p>
              </div>

              <hr className="border-white/10" />

              {/* Section 8 */}
              <div id="third-party" className="scroll-mt-24">
                <span className="text-xs font-bold uppercase tracking-wider gradient-text">Section 08</span>
                <h2 className="text-2xl font-semibold text-light-100 mt-2 mb-4">Third-Party Services</h2>
                <p className="text-light-300 mb-4">Our apps may use third-party services that have their own privacy policies. These may include:</p>
                <ul className="list-disc list-inside text-light-300 space-y-2 mb-4">
                  <li><strong className="text-light-100">Apple App Store:</strong> App distribution and in-app purchases are governed by Apple&apos;s privacy policy.</li>
                  <li><strong className="text-light-100">Analytics providers:</strong> We may use analytics tools to understand how users interact with our apps. These tools collect anonymized, aggregated usage data.</li>
                  <li><strong className="text-light-100">Cloud infrastructure:</strong> Our app data is stored on secure cloud servers. We select providers who comply with applicable data protection regulations.</li>
                </ul>
                <p className="text-light-300">We are not responsible for the privacy practices of third-party services. We encourage you to read the privacy policies of any third-party services you interact with.</p>
              </div>

              <hr className="border-white/10" />

              {/* Section 9 */}
              <div id="changes" className="scroll-mt-24">
                <span className="text-xs font-bold uppercase tracking-wider gradient-text">Section 09</span>
                <h2 className="text-2xl font-semibold text-light-100 mt-2 mb-4">Changes to This Policy</h2>
                <p className="text-light-300 mb-4">We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make material changes, we will notify you by updating the &quot;Last Updated&quot; date at the top of this page and, where appropriate, sending a notification through our app or via email.</p>
                <p className="text-light-300">We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information. Your continued use of our applications after any changes to this policy constitutes your acceptance of the updated terms.</p>
              </div>
            </div>

            {/* Contact Section */}
            <div id="contact" className="glass rounded-2xl p-8 text-center mt-12 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-light-100 mb-4">Have Questions?</h2>
              <p className="text-light-400 mb-6">If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please reach out to us. We&apos;re happy to help.</p>
              <a href="mailto:info@apphubusa.com" className="inline-flex items-center justify-center rounded-full font-semibold px-8 py-3 bg-gradient-to-r from-accent-purple via-accent-pink to-accent-blue text-white hover:opacity-90 transition-opacity">
                info@apphubusa.com
              </a>
              <p className="text-light-500 text-sm mt-6">
                AppHubUSA<br />
                New York, United States
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
