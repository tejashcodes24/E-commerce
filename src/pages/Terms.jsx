import React from "react";
import {
  Shield,
  AlertTriangle,
  ExternalLink,
  FileText,
  Globe,
  Scale,
  Clock,
  Mail,
  Phone,
} from "lucide-react";

export default function Terms() {
  const lastUpdated = "September 15th, 2025";

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FileText className="w-16 h-16 mx-auto mb-4 text-orange-100" />
          <h1 className="text-4xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-xl text-orange-100 max-w-2xl mx-auto">
            Please read these terms carefully before using TechBazaar. By using
            our services, you agree to be bound by these terms.
          </p>
          <div className="flex items-center justify-center mt-6 text-orange-200">
            <Clock className="w-5 h-5 mr-2" />
            <span>Last updated: {lastUpdated}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Legal Compliance Notice */}
        <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-lg mb-8">
          <div className="flex items-start">
            <Scale className="w-6 h-6 text-amber-600 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-amber-800 mb-2">
                Multi-Jurisdictional Compliance
              </h3>
              <p className="text-amber-700 text-sm leading-relaxed">
                These Terms & Conditions have been drafted to comply with the
                laws of India (Digital Personal Data Protection Act 2023,
                Information Technology Act 2000, Bharatiya Nyaya Sanhita), the
                European Union (GDPR), and the United States (including
                state-specific regulations like CCPA, COPPA, and federal
                regulations).
              </p>
            </div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Shield className="w-6 h-6 text-orange-600 mr-2" />
              1. Acceptance of Terms
            </h2>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <p className="text-gray-700 mb-4">
                By accessing, browsing, or using the TechBazaar website and
                mobile application ("Platform"), you acknowledge that you have
                read, understood, and agree to be bound by these Terms and
                Conditions ("Terms") and our Privacy Policy.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Legal Capacity:</strong> By using our services, you
                represent that:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  You are at least 18 years old or have reached the age of
                  majority in your jurisdiction
                </li>
                <li>
                  You have the legal capacity to enter into binding agreements
                </li>
                <li>
                  Your use of the platform complies with all applicable laws and
                  regulations
                </li>
                <li>All information provided is accurate and truthful</li>
              </ul>
              <p className="text-gray-700 mt-4">
                <strong>Minors:</strong> Users under 18 must have parental
                consent and supervision, in compliance with COPPA (US) and
                similar child protection laws in other jurisdictions.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Globe className="w-6 h-6 text-orange-600 mr-2" />
              2. Data Protection & Privacy Rights
            </h2>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Indian Law Compliance
              </h3>
              <div className="mb-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-blue-800 text-sm mb-2">
                  <strong>Digital Personal Data Protection Act, 2023:</strong>
                </p>
                <ul className="text-blue-700 text-sm space-y-1 list-disc pl-4">
                  <li>
                    Data processing is based on valid consent or legitimate
                    grounds
                  </li>
                  <li>
                    Purpose limitation: data used only for specified, lawful
                    purposes
                  </li>
                  <li>Data minimization: only necessary data is collected</li>
                  <li>Right to access, correct, erase, and port your data</li>
                  <li>
                    Right to grievance redressal through our Data Protection
                    Officer
                  </li>
                </ul>
              </div>

              <div className="mb-4 p-4 bg-green-50 rounded-lg border border-green-200">
                <p className="text-green-800 text-sm mb-2">
                  <strong>Information Technology Act, 2000:</strong>
                </p>
                <ul className="text-green-700 text-sm space-y-1 list-disc pl-4">
                  <li>
                    Compliance with IT Rules 2021 for intermediary guidelines
                  </li>
                  <li>Due diligence in handling sensitive personal data</li>
                  <li>Secure data transfer and storage practices</li>
                  <li>Incident reporting and user notification procedures</li>
                </ul>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                GDPR Rights (EU Users)
              </h3>
              <div className="mb-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
                <ul className="text-purple-700 text-sm space-y-1 list-disc pl-4">
                  <li>
                    <strong>Right to Information:</strong> Transparency about
                    data processing
                  </li>
                  <li>
                    <strong>Right of Access:</strong> Obtain copies of your
                    personal data
                  </li>
                  <li>
                    <strong>Right to Rectification:</strong> Correct inaccurate
                    data
                  </li>
                  <li>
                    <strong>Right to Erasure:</strong> "Right to be forgotten"
                    under specific conditions
                  </li>
                  <li>
                    <strong>Right to Restrict Processing:</strong> Limit how we
                    use your data
                  </li>
                  <li>
                    <strong>Right to Data Portability:</strong> Transfer data to
                    another service
                  </li>
                  <li>
                    <strong>Right to Object:</strong> Opt-out of certain data
                    processing activities
                  </li>
                </ul>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                US Consumer Rights
              </h3>
              <div className="mb-4 p-4 bg-red-50 rounded-lg border border-red-200">
                <p className="text-red-800 text-sm mb-2">
                  <strong>CCPA (California) and Similar State Laws:</strong>
                </p>
                <ul className="text-red-700 text-sm space-y-1 list-disc pl-4">
                  <li>Right to know what personal information is collected</li>
                  <li>Right to delete personal information</li>
                  <li>Right to opt-out of the sale of personal information</li>
                  <li>
                    Right to non-discrimination for exercising privacy rights
                  </li>
                  <li>Right to correct inaccurate personal information</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. Platform Usage and Conduct
            </h2>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Permitted Use
              </h3>
              <p className="text-gray-700 mb-4">
                You may use our platform for lawful purposes only. You agree to
                use the platform in compliance with:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-6">
                <li>
                  All applicable local, state, national, and international laws
                </li>
                <li>
                  Indian laws including the Bharatiya Nyaya Sanhita (BNS) 2023
                </li>
                <li>Consumer protection laws in your jurisdiction</li>
                <li>Intellectual property rights and trademark laws</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Prohibited Activities
              </h3>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-800 mb-2">
                  <strong>You agree NOT to:</strong>
                </p>
                <ul className="list-disc pl-6 text-red-700 space-y-1 text-sm">
                  <li>
                    Engage in fraudulent activities, money laundering, or
                    financial crimes
                  </li>
                  <li>Upload malicious software, viruses, or harmful code</li>
                  <li>Violate intellectual property rights or trademarks</li>
                  <li>Harass, threaten, or abuse other users or our staff</li>
                  <li>Create fake accounts or impersonate others</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>
                    Engage in price manipulation or anti-competitive practices
                  </li>
                  <li>Violate export controls or trade sanctions</li>
                  <li>Post defamatory, obscene, or offensive content</li>
                  <li>Scrape or harvest data without authorization</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Product Information and Pricing
            </h2>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <p className="text-gray-700 mb-4">
                We strive to provide accurate product descriptions,
                specifications, and pricing. However:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Product colors may vary due to display settings</li>
                <li>Specifications are subject to manufacturer changes</li>
                <li>Prices are subject to change without notice</li>
                <li>
                  All prices are in Indian Rupees (INR) unless otherwise
                  specified
                </li>
                <li>
                  Additional taxes, duties, or fees may apply based on your
                  location
                </li>
              </ul>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-yellow-800 text-sm">
                  <strong>Pricing Errors:</strong> In case of obvious pricing
                  errors, we reserve the right to cancel orders and provide full
                  refunds, in compliance with consumer protection laws.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Orders, Payments, and Cancellations
            </h2>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Order Processing
              </h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>
                  Orders are subject to acceptance and product availability
                </li>
                <li>
                  We reserve the right to refuse or cancel orders at our
                  discretion
                </li>
                <li>
                  Order confirmation does not guarantee product availability
                </li>
                <li>Processing times may vary based on product and location</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Payment Terms
              </h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Payment must be received before order processing</li>
                <li>
                  We accept major credit cards, debit cards, and digital wallets
                </li>
                <li>
                  All transactions are processed securely using
                  industry-standard encryption
                </li>
                <li>Payment processing complies with PCI DSS standards</li>
                <li>International transactions may incur additional fees</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Consumer Rights (India)
              </h3>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-blue-800 text-sm mb-2">
                  <strong>Consumer Protection Act, 2019:</strong>
                </p>
                <ul className="list-disc pl-6 text-blue-700 space-y-1 text-sm">
                  <li>
                    Right to be informed about product quality, quantity, and
                    standards
                  </li>
                  <li>
                    Right to seek redressal for defective goods or deficient
                    services
                  </li>
                  <li>Right to consumer education and awareness</li>
                  <li>Protection against unfair trade practices</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Shipping, Delivery, and Returns
            </h2>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Delivery Terms
              </h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Delivery timeframes are estimates and not guarantees</li>
                <li>
                  Risk of loss transfers upon delivery to the shipping carrier
                </li>
                <li>
                  International shipping may be subject to customs delays and
                  duties
                </li>
                <li>
                  Delivery address accuracy is the customer's responsibility
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Return Policy
              </h3>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                <p className="text-green-800 text-sm mb-2">
                  <strong>30-Day Return Window:</strong>
                </p>
                <ul className="list-disc pl-6 text-green-700 space-y-1 text-sm">
                  <li>
                    Items must be in original condition with all accessories
                  </li>
                  <li>
                    Return shipping may be at customer's expense unless item is
                    defective
                  </li>
                  <li>
                    Refunds processed within 7-10 business days after return
                    receipt
                  </li>
                  <li>
                    Certain items (software, consumables) may not be returnable
                  </li>
                </ul>
              </div>

              <p className="text-gray-700 text-sm">
                Return policies comply with consumer protection laws in India,
                EU consumer rights directive, and applicable US state return
                protection laws.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Intellectual Property Rights
            </h2>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <p className="text-gray-700 mb-4">
                All content on our platform, including but not limited to text,
                graphics, logos, images, audio clips, digital downloads, and
                software, is our property or licensed to us and is protected by
                copyright, trademark, and other intellectual property laws.
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                User-Generated Content
              </h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>
                  You retain ownership of content you submit (reviews, comments,
                  etc.)
                </li>
                <li>
                  You grant us a non-exclusive license to use, display, and
                  distribute your content
                </li>
                <li>
                  You warrant that your content does not infringe third-party
                  rights
                </li>
                <li>
                  We may remove content that violates these terms or applicable
                  laws
                </li>
              </ul>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <p className="text-purple-800 text-sm">
                  <strong>DMCA Compliance:</strong> We respond to valid DMCA
                  takedown notices. Copyright owners may report infringement to
                  our designated agent.
                </p>
              </div>
            </div>
          </section>

          {/* Section 8 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. Limitation of Liability and Disclaimers
            </h2>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                <p className="text-red-800 text-sm font-semibold mb-2">
                  IMPORTANT LEGAL NOTICE:
                </p>
                <p className="text-red-700 text-sm">
                  The limitations below apply to the maximum extent permitted by
                  law. Some jurisdictions do not allow certain limitations, so
                  these may not apply to you.
                </p>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Service Disclaimer
              </h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>
                  Services are provided "as is" without warranties of any kind
                </li>
                <li>We do not guarantee uninterrupted or error-free service</li>
                <li>
                  Product availability and specifications may change without
                  notice
                </li>
                <li>Third-party content and links are not endorsed by us</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Liability Limitations
              </h3>
              <p className="text-gray-700 mb-2">
                Subject to applicable consumer protection laws, our liability is
                limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1 text-sm mb-4">
                <li>
                  The amount paid for the specific product or service in
                  question
                </li>
                <li>
                  Direct damages only (no indirect, consequential, or punitive
                  damages)
                </li>
                <li>Claims must be brought within one year of the incident</li>
              </ul>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-blue-800 text-sm">
                  <strong>Consumer Protection:</strong> These limitations do not
                  affect your statutory rights under consumer protection laws in
                  your jurisdiction, including rights under Indian Consumer
                  Protection Act, EU consumer directives, or US state consumer
                  protection laws.
                </p>
              </div>
            </div>
          </section>

          {/* Section 9 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              9. Dispute Resolution and Governing Law
            </h2>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Governing Law by Jurisdiction
              </h3>

              <div className="space-y-4">
                <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                  <p className="text-orange-800 font-semibold text-sm mb-1">
                    Indian Users:
                  </p>
                  <p className="text-orange-700 text-sm">
                    Governed by Indian laws. Disputes subject to jurisdiction of
                    Delhi courts. Consumer disputes may be resolved through
                    Consumer Forums under Consumer Protection Act, 2019.
                  </p>
                </div>

                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-blue-800 font-semibold text-sm mb-1">
                    EU Users:
                  </p>
                  <p className="text-blue-700 text-sm">
                    Governed by applicable EU member state laws. EU consumers
                    may use Online Dispute Resolution (ODR) platform or local
                    consumer protection agencies.
                  </p>
                </div>

                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 font-semibold text-sm mb-1">
                    US Users:
                  </p>
                  <p className="text-green-700 text-sm">
                    Governed by applicable state and federal laws. Certain
                    disputes may be subject to binding arbitration, except where
                    prohibited by law.
                  </p>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                Dispute Resolution Process
              </h3>
              <ol className="list-decimal pl-6 text-gray-700 space-y-2">
                <li>
                  <strong>Direct Resolution:</strong> Contact customer service
                  first
                </li>
                <li>
                  <strong>Mediation:</strong> Good faith attempt at mediated
                  resolution
                </li>
                <li>
                  <strong>Legal Proceedings:</strong> Court jurisdiction as
                  specified above
                </li>
                <li>
                  <strong>Consumer Forums:</strong> Available for qualifying
                  consumer disputes
                </li>
              </ol>
            </div>
          </section>

          {/* Section 10 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              10. Modifications and Updates
            </h2>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <p className="text-gray-700 mb-4">
                We reserve the right to modify these terms at any time. Changes
                will be effective immediately upon posting on our website.
                Material changes will be communicated through:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Email notification to registered users</li>
                <li>Prominent notice on our website</li>
                <li>In-app notifications where applicable</li>
                <li>
                  30-day advance notice for material changes affecting user
                  rights
                </li>
              </ul>
              <p className="text-gray-700">
                Continued use of our services after changes constitutes
                acceptance of the new terms.
              </p>
            </div>
          </section>

          {/* Contact Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              11. Contact Information
            </h2>
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg border border-orange-200 p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    General Inquiries
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-gray-700">
                      <Mail className="w-4 h-4 mr-2 text-orange-600" />
                      <span>support@techbazaar.com</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Phone className="w-4 h-4 mr-2 text-orange-600" />
                      <span>+91-11-4567-8900</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Data Protection & Legal
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-gray-700">
                      <Mail className="w-4 h-4 mr-2 text-orange-600" />
                      <span>dpo@techbazaar.com</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Mail className="w-4 h-4 mr-2 text-orange-600" />
                      <span>legal@techbazaar.com</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-orange-200">
                <p className="text-gray-700 text-sm">
                  <strong>Business Address:</strong> TechBazaar Private Limited,
                  123 Tech Park, Sector 5, Gurugram, Haryana 122001, India
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Footer Notice */}
        <div className="bg-gray-800 text-white rounded-lg p-6 mt-12">
          <div className="flex items-center justify-center mb-4">
            <AlertTriangle className="w-6 h-6 text-yellow-400 mr-2" />
            <span className="font-semibold">Legal Compliance Statement</span>
          </div>
          <p className="text-gray-300 text-sm text-center leading-relaxed">
            These Terms & Conditions comply with the Digital Personal Data
            Protection Act 2023 (India), Information Technology Act 2000,
            Consumer Protection Act 2019, Bharatiya Nyaya Sanhita 2023, General
            Data Protection Regulation (EU), California Consumer Privacy Act,
            and other applicable international regulations.
          </p>
          <div className="flex justify-center mt-4">
            <a
              href="#"
              className="text-orange-400 hover:text-orange-300 text-sm flex items-center transition-colors"
            >
              <ExternalLink className="w-4 h-4 mr-1" />
              Download PDF Version
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
