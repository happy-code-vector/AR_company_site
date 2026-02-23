import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions - AppHubUSA',
  description: 'Terms and conditions for AppHubUSA mobile applications.',
}

export default function TermsPage() {
  return (
    <>
      <section className="py-24 relative">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <span className="text-accent-purple text-sm font-semibold uppercase tracking-wider">Legal</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
                <span className="gradient-text">Terms & Conditions</span>
              </h1>
              <p className="text-light-400">Effective Date: January 1, 2025 · Last Updated: February 2025</p>
            </div>

            {/* Intro Box */}
            <div className="glass rounded-2xl p-6 mb-12 border-l-4 border-accent-purple">
              <p className="text-light-300 mb-3">
                These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of the mobile applications and services provided by AppHubUSA (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), including <strong className="text-light-100">QuizliAI</strong> and <strong className="text-light-100">Coupl</strong> (collectively, &quot;the Apps&quot; or &quot;our Services&quot;).
              </p>
              <p className="text-light-300">
                By downloading, installing, or using any of our Apps, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Services. These Terms constitute a legally binding agreement between you and AppHubUSA.
              </p>
            </div>

            {/* Table of Contents */}
            <div className="glass rounded-2xl p-8 mb-12">
              <h3 className="text-xl font-semibold text-light-100 mb-4">Table of Contents</h3>
              <ol className="grid grid-cols-1 md:grid-cols-2 gap-2 list-decimal list-inside">
                <li><a href="#eligibility" className="text-accent-purple hover:text-accent-pink transition-colors">Eligibility</a></li>
                <li><a href="#accounts" className="text-accent-purple hover:text-accent-pink transition-colors">User Accounts</a></li>
                <li><a href="#license" className="text-accent-purple hover:text-accent-pink transition-colors">License to Use</a></li>
                <li><a href="#acceptable-use" className="text-accent-purple hover:text-accent-pink transition-colors">Acceptable Use</a></li>
                <li><a href="#user-content" className="text-accent-purple hover:text-accent-pink transition-colors">User-Generated Content</a></li>
                <li><a href="#purchases" className="text-accent-purple hover:text-accent-pink transition-colors">In-App Purchases & Subscriptions</a></li>
                <li><a href="#intellectual-property" className="text-accent-purple hover:text-accent-pink transition-colors">Intellectual Property</a></li>
                <li><a href="#privacy" className="text-accent-purple hover:text-accent-pink transition-colors">Privacy</a></li>
                <li><a href="#third-party" className="text-accent-purple hover:text-accent-pink transition-colors">Third-Party Services</a></li>
                <li><a href="#disclaimers" className="text-accent-purple hover:text-accent-pink transition-colors">Disclaimers</a></li>
                <li><a href="#limitation" className="text-accent-purple hover:text-accent-pink transition-colors">Limitation of Liability</a></li>
                <li><a href="#indemnification" className="text-accent-purple hover:text-accent-pink transition-colors">Indemnification</a></li>
                <li><a href="#termination" className="text-accent-purple hover:text-accent-pink transition-colors">Termination</a></li>
                <li><a href="#governing-law" className="text-accent-purple hover:text-accent-pink transition-colors">Governing Law</a></li>
                <li><a href="#changes" className="text-accent-purple hover:text-accent-pink transition-colors">Changes to These Terms</a></li>
                <li><a href="#contact" className="text-accent-purple hover:text-accent-pink transition-colors">Contact Us</a></li>
              </ol>
            </div>

            {/* Sections */}
            <div className="space-y-12">
              {/* Section 1 */}
              <div id="eligibility" className="scroll-mt-24">
                <span className="text-xs font-bold uppercase tracking-wider gradient-text">Section 01</span>
                <h2 className="text-2xl font-semibold text-light-100 mt-2 mb-4">Eligibility</h2>
                <p className="text-light-300 mb-4">You must be at least <strong className="text-light-100">13 years of age</strong> to use our Services. By using our Apps, you represent and warrant that you are at least 13 years old. If you are between the ages of 13 and 18, you represent that your parent or legal guardian has reviewed and agreed to these Terms on your behalf.</p>
                <p className="text-light-300 mb-4">Some features of our Apps may require you to be 18 years of age or older. Where age restrictions apply to specific features, we will make this clear within the App.</p>
                <p className="text-light-300">Our Services are intended for users in jurisdictions where their use is permitted by law. By accessing our Services, you represent that your use does not violate any laws or regulations applicable to you.</p>
              </div>

              <hr className="border-white/10" />

              {/* Section 2 */}
              <div id="accounts" className="scroll-mt-24">
                <span className="text-xs font-bold uppercase tracking-wider gradient-text">Section 02</span>
                <h2 className="text-2xl font-semibold text-light-100 mt-2 mb-4">User Accounts</h2>
                <p className="text-light-300 mb-4">Certain features of our Apps require you to create an account. When creating an account, you agree to:</p>
                <ul className="list-disc list-inside text-light-300 space-y-2 mb-4">
                  <li>Provide accurate, current, and complete information during registration</li>
                  <li>Maintain and promptly update your account information to keep it accurate and complete</li>
                  <li>Keep your login credentials confidential and not share them with any third party</li>
                  <li>Notify us immediately at <strong className="text-light-100">info@apphubusa.com</strong> if you suspect any unauthorized use of your account</li>
                  <li>Accept responsibility for all activity that occurs under your account</li>
                </ul>
                <p className="text-light-300 mb-4">We reserve the right to suspend or terminate your account at our discretion if we determine that information you provided is inaccurate, false, or in violation of these Terms.</p>
                <div className="glass rounded-xl p-4 border-l-4 border-accent-purple">
                  <p className="text-light-300">You may not create more than one account per person without our express written permission. Accounts are non-transferable and may not be sold, combined, or otherwise shared with another person.</p>
                </div>
              </div>

              <hr className="border-white/10" />

              {/* Section 3 */}
              <div id="license" className="scroll-mt-24">
                <span className="text-xs font-bold uppercase tracking-wider gradient-text">Section 03</span>
                <h2 className="text-2xl font-semibold text-light-100 mt-2 mb-4">License to Use</h2>
                <p className="text-light-300 mb-4">Subject to your compliance with these Terms, AppHubUSA grants you a <strong className="text-light-100">limited, non-exclusive, non-transferable, revocable license</strong> to download and use our Apps for your personal, non-commercial purposes on devices that you own or control.</p>
                <p className="text-light-300 mb-4">This license does not permit you to:</p>
                <ul className="list-disc list-inside text-light-300 space-y-2">
                  <li>Copy, modify, or create derivative works of the Apps or any portion thereof</li>
                  <li>Distribute, transfer, sublicense, lease, lend, or sell the Apps to any third party</li>
                  <li>Reverse engineer, disassemble, decompile, or otherwise attempt to extract the source code of the Apps</li>
                  <li>Remove, alter, or obscure any proprietary notices, labels, or marks on the Apps</li>
                  <li>Use the Apps for any commercial purpose without our prior written consent</li>
                  <li>Use automated tools, bots, or scrapers to access or interact with the Apps</li>
                </ul>
              </div>

              <hr className="border-white/10" />

              {/* Section 4 */}
              <div id="acceptable-use" className="scroll-mt-24">
                <span className="text-xs font-bold uppercase tracking-wider gradient-text">Section 04</span>
                <h2 className="text-2xl font-semibold text-light-100 mt-2 mb-4">Acceptable Use</h2>
                <p className="text-light-300 mb-4">You agree to use our Services only for lawful purposes and in a manner that does not infringe the rights of others or restrict or inhibit their use and enjoyment of the Services. You must not:</p>
                <ul className="list-disc list-inside text-light-300 space-y-2">
                  <li>Use the Services to transmit or distribute any unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable content</li>
                  <li>Impersonate any person or entity, or falsely state or misrepresent your affiliation with a person or entity</li>
                  <li>Attempt to gain unauthorized access to any portion of the Services, other user accounts, or any systems or networks connected to our Services</li>
                  <li>Upload or transmit any viruses, malware, or other malicious code</li>
                  <li>Use the Services in any manner that could damage, disable, overburden, or impair our servers or networks</li>
                  <li>Harvest, collect, or store personal data about other users without their consent</li>
                  <li>Use the Services to send unsolicited communications (spam)</li>
                  <li>Engage in any conduct that restricts or inhibits anyone&apos;s use or enjoyment of the Services</li>
                </ul>
              </div>

              <hr className="border-white/10" />

              {/* Section 5 */}
              <div id="user-content" className="scroll-mt-24">
                <span className="text-xs font-bold uppercase tracking-wider gradient-text">Section 05</span>
                <h2 className="text-2xl font-semibold text-light-100 mt-2 mb-4">User-Generated Content</h2>
                <p className="text-light-300 mb-4">Our Apps may allow you to create, submit, post, or store content such as study notes, quiz answers, journal entries, or relationship reflections (&quot;User Content&quot;). You retain ownership of any intellectual property rights you hold in your User Content.</p>
                <p className="text-light-300 mb-4">By submitting User Content, you grant AppHubUSA a <strong className="text-light-100">worldwide, royalty-free, non-exclusive license</strong> to use, store, reproduce, and process your User Content solely for the purpose of providing and improving our Services. We do not use your personal User Content for advertising or share it with third parties without your consent.</p>
                <p className="text-light-300 mb-2">You represent and warrant that:</p>
                <ul className="list-disc list-inside text-light-300 space-y-2 mb-4">
                  <li>You own or have the necessary rights to the User Content you submit</li>
                  <li>Your User Content does not infringe the intellectual property rights, privacy rights, or any other rights of any third party</li>
                  <li>Your User Content does not violate any applicable laws or regulations</li>
                </ul>
              </div>

              <hr className="border-white/10" />

              {/* Section 6 */}
              <div id="purchases" className="scroll-mt-24">
                <span className="text-xs font-bold uppercase tracking-wider gradient-text">Section 06</span>
                <h2 className="text-2xl font-semibold text-light-100 mt-2 mb-4">In-App Purchases &amp; Subscriptions</h2>
                <p className="text-light-300 mb-4">Some features of our Apps may be available through paid subscriptions or one-time in-app purchases. All purchases are processed through the <strong className="text-light-100">Apple App Store</strong> and are subject to Apple&apos;s payment terms and policies.</p>
                <p className="text-light-300 mb-2"><strong className="text-light-100">Subscriptions:</strong></p>
                <ul className="list-disc list-inside text-light-300 space-y-2 mb-4">
                  <li>Subscriptions automatically renew at the end of each billing period unless cancelled at least 24 hours before the end of the current period</li>
                  <li>Your Apple ID account will be charged for renewal within 24 hours prior to the end of the current period</li>
                  <li>You can manage or cancel your subscription at any time through your Apple ID account settings</li>
                  <li>No refund will be provided for the unused portion of a subscription period upon cancellation</li>
                </ul>
                <p className="text-light-300 mb-4"><strong className="text-light-100">Free Trials:</strong> Where a free trial is offered, any unused portion of a free trial period will be forfeited upon purchase of a subscription.</p>
                <p className="text-light-300 mb-4"><strong className="text-light-100">Refunds:</strong> All refund requests are handled by Apple in accordance with their refund policy. AppHubUSA does not independently process refunds for purchases made through the App Store. To request a refund, visit <strong className="text-light-100">reportaproblem.apple.com</strong>.</p>
                <div className="glass rounded-xl p-4 border-l-4 border-accent-purple">
                  <p className="text-light-300">Prices are subject to change. We will provide reasonable notice of any pricing changes through in-app notifications or email where required by applicable law.</p>
                </div>
              </div>

              <hr className="border-white/10" />

              {/* Section 7 */}
              <div id="intellectual-property" className="scroll-mt-24">
                <span className="text-xs font-bold uppercase tracking-wider gradient-text">Section 07</span>
                <h2 className="text-2xl font-semibold text-light-100 mt-2 mb-4">Intellectual Property</h2>
                <p className="text-light-300 mb-4">The Apps and all content, features, and functionality — including but not limited to text, graphics, logos, icons, images, audio clips, and software — are the exclusive property of AppHubUSA and are protected by United States and international copyright, trademark, patent, and other intellectual property laws.</p>
                <p className="text-light-300 mb-4">The AppHubUSA name, logo, and all related product names and slogans are trademarks of AppHubUSA. You may not use any of our trademarks without our prior written consent.</p>
                <p className="text-light-300 mb-4">Nothing in these Terms grants you any right, title, or interest in or to our intellectual property except for the limited license expressly set forth in Section 3 of these Terms.</p>
                <p className="text-light-300">If you believe that content available through our Services infringes your copyright, please contact us at <strong className="text-light-100">info@apphubusa.com</strong> with a description of the alleged infringement and your contact information.</p>
              </div>

              <hr className="border-white/10" />

              {/* Section 8 */}
              <div id="privacy" className="scroll-mt-24">
                <span className="text-xs font-bold uppercase tracking-wider gradient-text">Section 08</span>
                <h2 className="text-2xl font-semibold text-light-100 mt-2 mb-4">Privacy</h2>
                <p className="text-light-300 mb-4">Your use of our Services is also governed by our <strong className="text-light-100">Privacy Policy</strong>, which is incorporated into these Terms by reference. Our Privacy Policy describes how we collect, use, and share information about you when you use our Apps.</p>
                <p className="text-light-300 mb-4">By agreeing to these Terms, you also agree to the practices described in our Privacy Policy. We encourage you to read it carefully.</p>
                <p className="text-light-300">You can view our full Privacy Policy at: <a href="/privacy" className="text-accent-purple hover:text-accent-pink transition-colors">apphubusa.com/privacy</a></p>
              </div>

              <hr className="border-white/10" />

              {/* Section 9 */}
              <div id="third-party" className="scroll-mt-24">
                <span className="text-xs font-bold uppercase tracking-wider gradient-text">Section 09</span>
                <h2 className="text-2xl font-semibold text-light-100 mt-2 mb-4">Third-Party Services</h2>
                <p className="text-light-300 mb-4">Our Apps may contain links to, or integrate with, third-party websites, services, or platforms (such as the Apple App Store, analytics tools, or cloud infrastructure providers). These third-party services are governed by their own terms and privacy policies, which we encourage you to review.</p>
                <p className="text-light-300 mb-4">AppHubUSA is not responsible for the content, practices, or policies of any third-party services. A link or integration does not imply our endorsement of that third party.</p>
                <p className="text-light-300">Our Apps are distributed through the <strong className="text-light-100">Apple App Store</strong>. Your use of the App Store is governed by Apple&apos;s Terms of Service. Apple is not a party to these Terms and has no obligation or liability to you with respect to our Apps.</p>
              </div>

              <hr className="border-white/10" />

              {/* Section 10 */}
              <div id="disclaimers" className="scroll-mt-24">
                <span className="text-xs font-bold uppercase tracking-wider gradient-text">Section 10</span>
                <h2 className="text-2xl font-semibold text-light-100 mt-2 mb-4">Disclaimers</h2>
                <div className="glass rounded-xl p-4 mb-4 border border-accent-pink/30">
                  <p className="text-light-300">OUR SERVICES ARE PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.</p>
                </div>
                <p className="text-light-300 mb-4">To the fullest extent permitted by applicable law, AppHubUSA expressly disclaims all warranties, express or implied, including but not limited to:</p>
                <ul className="list-disc list-inside text-light-300 space-y-2 mb-4">
                  <li>Implied warranties of merchantability, fitness for a particular purpose, and non-infringement</li>
                  <li>Warranties that the Services will be uninterrupted, error-free, or free of viruses or other harmful components</li>
                  <li>Warranties regarding the accuracy, reliability, or completeness of any content within the Apps</li>
                </ul>
                <p className="text-light-300 mb-4"><strong className="text-light-100">Educational Content:</strong> QuizliAI uses artificial intelligence to generate study materials, quizzes, and summaries. While we strive for accuracy, AI-generated content may contain errors or omissions. You should not rely solely on content generated by our Apps for academic or professional purposes without independent verification.</p>
                <p className="text-light-300"><strong className="text-light-100">Relationship Content:</strong> Coupl provides prompts and tools designed to support personal relationships. Our App is not a substitute for professional counseling, therapy, or medical advice. If you are experiencing serious relationship difficulties or mental health concerns, we encourage you to seek support from a qualified professional.</p>
              </div>

              <hr className="border-white/10" />

              {/* Section 11 */}
              <div id="limitation" className="scroll-mt-24">
                <span className="text-xs font-bold uppercase tracking-wider gradient-text">Section 11</span>
                <h2 className="text-2xl font-semibold text-light-100 mt-2 mb-4">Limitation of Liability</h2>
                <p className="text-light-300 mb-4">To the fullest extent permitted by applicable law, in no event shall AppHubUSA, its officers, directors, employees, or agents be liable for any:</p>
                <ul className="list-disc list-inside text-light-300 space-y-2 mb-4">
                  <li>Indirect, incidental, special, consequential, or punitive damages</li>
                  <li>Loss of profits, revenue, data, or goodwill</li>
                  <li>Damages resulting from unauthorized access to or use of our servers or any personal information stored therein</li>
                  <li>Damages resulting from interruption or cessation of transmission to or from our Services</li>
                  <li>Damages resulting from bugs, viruses, or other harmful code transmitted through our Services</li>
                </ul>
                <p className="text-light-300 mb-4">These limitations apply regardless of whether the damages were foreseeable and whether AppHubUSA was advised of the possibility of such damages.</p>
                <p className="text-light-300">In jurisdictions that do not allow the exclusion or limitation of certain warranties or damages, our liability will be limited to the maximum extent permitted by applicable law. In all other cases, AppHubUSA&apos;s total liability to you for all claims arising from or related to these Terms or our Services shall not exceed the greater of <strong className="text-light-100">$100 USD</strong> or the amount you paid to AppHubUSA in the twelve months prior to the claim.</p>
              </div>

              <hr className="border-white/10" />

              {/* Section 12 */}
              <div id="indemnification" className="scroll-mt-24">
                <span className="text-xs font-bold uppercase tracking-wider gradient-text">Section 12</span>
                <h2 className="text-2xl font-semibold text-light-100 mt-2 mb-4">Indemnification</h2>
                <p className="text-light-300 mb-4">You agree to defend, indemnify, and hold harmless AppHubUSA and its officers, directors, employees, and agents from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys&apos; fees) arising out of or relating to:</p>
                <ul className="list-disc list-inside text-light-300 space-y-2">
                  <li>Your violation of these Terms</li>
                  <li>Your use of our Services in a manner not expressly authorized by these Terms</li>
                  <li>Your User Content</li>
                  <li>Your violation of any rights of a third party, including intellectual property rights or privacy rights</li>
                  <li>Your violation of any applicable laws or regulations</li>
                </ul>
              </div>

              <hr className="border-white/10" />

              {/* Section 13 */}
              <div id="termination" className="scroll-mt-24">
                <span className="text-xs font-bold uppercase tracking-wider gradient-text">Section 13</span>
                <h2 className="text-2xl font-semibold text-light-100 mt-2 mb-4">Termination</h2>
                <p className="text-light-300 mb-4">You may stop using our Services at any time and delete your account from within the App settings.</p>
                <p className="text-light-300 mb-4">AppHubUSA reserves the right to suspend or terminate your access to all or part of our Services at any time, with or without cause, and with or without notice, including but not limited to cases where:</p>
                <ul className="list-disc list-inside text-light-300 space-y-2">
                  <li>You have violated these Terms or our Privacy Policy</li>
                  <li>We are required to do so by law</li>
                  <li>We discontinue or materially modify our Services</li>
                  <li>Continued access creates legal risk or technical complications for us or other users</li>
                </ul>
              </div>

              <hr className="border-white/10" />

              {/* Section 14 */}
              <div id="governing-law" className="scroll-mt-24">
                <span className="text-xs font-bold uppercase tracking-wider gradient-text">Section 14</span>
                <h2 className="text-2xl font-semibold text-light-100 mt-2 mb-4">Governing Law &amp; Dispute Resolution</h2>
                <p className="text-light-300 mb-4">These Terms shall be governed by and construed in accordance with the laws of the <strong className="text-light-100">State of New York</strong>, without regard to its conflict of law provisions.</p>
                <p className="text-light-300 mb-4"><strong className="text-light-100">Informal Resolution:</strong> Before filing any formal legal claim, you agree to first contact us at <strong className="text-light-100">info@apphubusa.com</strong> and attempt to resolve the dispute informally. We will try to resolve the issue within 30 days of receiving your notice.</p>
                <p className="text-light-300 mb-4"><strong className="text-light-100">Arbitration:</strong> If informal resolution fails, any dispute, claim, or controversy arising out of or relating to these Terms or the Services shall be resolved by binding individual arbitration under the rules of the American Arbitration Association (AAA), rather than in court. You agree that you may only bring claims in your individual capacity, and not as a plaintiff or class member in any purported class or representative action.</p>
                <p className="text-light-300 mb-4"><strong className="text-light-100">Exceptions:</strong> Either party may seek injunctive or other equitable relief in a court of competent jurisdiction to prevent the actual or threatened infringement, misappropriation, or violation of intellectual property rights.</p>
                <div className="glass rounded-xl p-4 border-l-4 border-accent-purple">
                  <p className="text-light-300">By agreeing to these Terms, you waive your right to a jury trial and your right to participate in a class action lawsuit or class-wide arbitration.</p>
                </div>
              </div>

              <hr className="border-white/10" />

              {/* Section 15 */}
              <div id="changes" className="scroll-mt-24">
                <span className="text-xs font-bold uppercase tracking-wider gradient-text">Section 15</span>
                <h2 className="text-2xl font-semibold text-light-100 mt-2 mb-4">Changes to These Terms</h2>
                <p className="text-light-300 mb-4">We reserve the right to modify these Terms at any time. When we make material changes, we will:</p>
                <ul className="list-disc list-inside text-light-300 space-y-2 mb-4">
                  <li>Update the &quot;Last Updated&quot; date at the top of this page</li>
                  <li>Provide notice through the App or via email where appropriate</li>
                </ul>
                <p className="text-light-300 mb-4">Your continued use of the Services after any changes take effect constitutes your acceptance of the revised Terms. If you do not agree to the revised Terms, you must stop using our Services.</p>
                <p className="text-light-300">We encourage you to periodically review these Terms to stay informed of any updates.</p>
              </div>
            </div>

            {/* Contact Section */}
            <div id="contact" className="glass rounded-2xl p-8 text-center mt-12 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-light-100 mb-4">Questions About These Terms?</h2>
              <p className="text-light-400 mb-6">If you have any questions about these Terms and Conditions, please reach out. We&apos;re happy to clarify anything.</p>
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
