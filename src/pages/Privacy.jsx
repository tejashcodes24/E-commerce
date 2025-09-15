import React from "react";
import {
  Shield,
  AlertTriangle,
  ExternalLink,
  Lock,
  Eye,
  UserCheck,
  Clock,
  Mail,
  Phone,
  Database,
  Settings,
  Globe,
  FileText,
  Bell,
} from "lucide-react";

export default function PrivacyPolicy() {
  const lastUpdated = "September 15th, 2025";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Shield className="w-16 h-16 mx-auto mb-4 text-blue-100" />
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we
            collect, use, and protect your personal information in compliance
            with global privacy laws.
          </p>
          <div className="flex items-center justify-center mt-6 text-blue-200">
            <Clock className="w-5 h-5 mr-2" />
            <span>Last updated: {lastUpdated}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Legal Compliance Notice */}
        <div className="bg-indigo-50 border-l-4 border-indigo-400 p-6 rounded-lg mb-8">
          <div className="flex items-start">
            <Lock className="w-6 h-6 text-indigo-600 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-indigo-800 mb-2">
                Multi-Jurisdictional Privacy Compliance
              </h3>
              <p className="text-indigo-700 text-sm leading-relaxed">
                This Privacy Policy complies with India's Digital Personal Data
                Protection Act 2023, EU's General Data Protection Regulation
                (GDPR), US federal privacy laws including COPPA, and
                state-specific regulations like CCPA, VCDPA, and CPA.
              </p>
            </div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Eye className="w-6 h-6 text-blue-600 mr-2" />
              1. Information We Collect
            </h2>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Personal Information You Provide
              </h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li>
                  <strong>Account Information:</strong> Name, email address,
                  phone number, date of birth
                </li>
                <li>
                  <strong>Profile Data:</strong> Profile photo, preferences,
                  communication settings
                </li>
                <li>
                  <strong>Payment Information:</strong> Credit/debit card
                  details, billing address, payment history
                </li>
                <li>
                  <strong>Shipping Information:</strong> Delivery addresses,
                  recipient details
                </li>
                <li>
                  <strong>Communication Data:</strong> Customer service
                  inquiries, reviews, feedback
                </li>
                <li>
                  <strong>Identity Verification:</strong> Government-issued ID
                  (when required by law)
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Information Automatically Collected
              </h3>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                <ul className="list-disc pl-6 text-blue-700 space-y-1 text-sm">
                  <li>
                    <strong>Device Information:</strong> IP address, device ID,
                    browser type, operating system
                  </li>
                  <li>
                    <strong>Usage Data:</strong> Pages visited, time spent,
                    search queries, click patterns
                  </li>
                  <li>
                    <strong>Location Data:</strong> Approximate location based
                    on IP address
                  </li>
                  <li>
                    <strong>Cookies & Tracking:</strong> Session cookies,
                    preference cookies, analytics cookies
                  </li>
                  <li>
                    <strong>Technical Data:</strong> Error logs, performance
                    metrics, security events
                  </li>
                </ul>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Information from Third Parties
              </h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-1 text-sm">
                <li>Social media login information (with your consent)</li>
                <li>Payment processor transaction data</li>
                <li>Shipping partner delivery updates</li>
                <li>Marketing partner insights (anonymized)</li>
                <li>Fraud prevention service alerts</li>
              </ul>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Settings className="w-6 h-6 text-blue-600 mr-2" />
              2. How We Use Your Information
            </h2>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Primary Business Purposes
              </h3>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">
                    Service Delivery
                  </h4>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• Process and fulfill orders</li>
                    <li>• Manage user accounts</li>
                    <li>• Provide customer support</li>
                    <li>• Send service notifications</li>
                  </ul>
                </div>
                <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">
                    Platform Operations
                  </h4>
                  <ul className="text-purple-700 text-sm space-y-1">
                    <li>• Maintain platform security</li>
                    <li>• Prevent fraud and abuse</li>
                    <li>• Improve user experience</li>
                    <li>• Analyze platform performance</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Legal Basis for Processing (GDPR Compliance)
              </h3>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 border-l-4 border-blue-400 rounded">
                  <p className="text-blue-800 text-sm">
                    <strong>Contractual Necessity:</strong> Processing required
                    to fulfill our contract with you (order processing,
                    delivery)
                  </p>
                </div>
                <div className="p-3 bg-green-50 border-l-4 border-green-400 rounded">
                  <p className="text-green-800 text-sm">
                    <strong>Legitimate Interest:</strong> Platform security,
                    fraud prevention, service improvement
                  </p>
                </div>
                <div className="p-3 bg-purple-50 border-l-4 border-purple-400 rounded">
                  <p className="text-purple-800 text-sm">
                    <strong>Consent:</strong> Marketing communications, optional
                    features, cookies
                  </p>
                </div>
                <div className="p-3 bg-orange-50 border-l-4 border-orange-400 rounded">
                  <p className="text-orange-800 text-sm">
                    <strong>Legal Obligation:</strong> Tax compliance,
                    regulatory reporting, law enforcement requests
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Database className="w-6 h-6 text-blue-600 mr-2" />
              3. Information Sharing and Disclosure
            </h2>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Authorized Third Parties
              </h3>
              <div className="space-y-4 mb-6">
                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">
                    Service Providers
                  </h4>
                  <ul className="text-yellow-700 text-sm space-y-1">
                    <li>
                      • Payment processors (encrypted financial data only)
                    </li>
                    <li>• Shipping and logistics partners</li>
                    <li>• Cloud storage and computing services</li>
                    <li>• Customer support platform providers</li>
                    <li>• Analytics and performance monitoring</li>
                  </ul>
                </div>
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">
                    Legal Requirements
                  </h4>
                  <ul className="text-red-700 text-sm space-y-1">
                    <li>
                      • Law enforcement agencies (with valid legal process)
                    </li>
                    <li>• Regulatory authorities (tax, consumer protection)</li>
                    <li>• Court orders and legal proceedings</li>
                    <li>• Protection of rights, property, and safety</li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-100 border border-red-300 rounded-lg p-4">
                <p className="text-red-800 text-sm font-semibold mb-2">
                  We DO NOT:
                </p>
                <ul className="text-red-700 text-sm space-y-1">
                  <li>• Sell your personal information to third parties</li>
                  <li>• Share data with advertisers for profiling</li>
                  <li>• Use your information for unauthorized purposes</li>
                  <li>• Transfer data without appropriate safeguards</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4 - Data Rights */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <UserCheck className="w-6 h-6 text-blue-600 mr-2" />
              4. Your Privacy Rights
            </h2>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">
                    🇮🇳 Indian Users (DPDP Act 2023)
                  </h3>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• Right to access your data</li>
                    <li>• Right to correct inaccuracies</li>
                    <li>• Right to erase personal data</li>
                    <li>• Right to data portability</li>
                    <li>• Right to grievance redressal</li>
                    <li>• Right to nominate (for deceased users)</li>
                  </ul>
                </div>

                <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                  <h3 className="font-semibold text-purple-800 mb-2">
                    🇪🇺 EU Users (GDPR)
                  </h3>
                  <ul className="text-purple-700 text-sm space-y-1">
                    <li>• Right to information transparency</li>
                    <li>• Right of access to data</li>
                    <li>• Right to rectification</li>
                    <li>• Right to erasure ("right to be forgotten")</li>
                    <li>• Right to restrict processing</li>
                    <li>• Right to data portability</li>
                    <li>• Right to object to processing</li>
                  </ul>
                </div>

                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">
                    🇺🇸 US Users (CCPA/State Laws)
                  </h3>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• Right to know data collection</li>
                    <li>• Right to delete personal info</li>
                    <li>• Right to opt-out of sale</li>
                    <li>• Right to correct inaccurate data</li>
                    <li>• Right to non-discrimination</li>
                    <li>• Right to limit sensitive data use</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-3">
                  How to Exercise Your Rights
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-700 text-sm mb-2">
                      <strong>Online Portal:</strong>
                    </p>
                    <p className="text-gray-600 text-sm">
                      Access your account settings to manage most privacy
                      preferences
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700 text-sm mb-2">
                      <strong>Email Request:</strong>
                    </p>
                    <p className="text-gray-600 text-sm">
                      Contact privacy@techbazaar.com with verification
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mt-3">
                  <strong>Response Time:</strong> We respond within 30 days
                  (EU), 45 days (US), or as required by local law.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 - Data Security */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Lock className="w-6 h-6 text-blue-600 mr-2" />
              5. Data Security and Protection
            </h2>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Technical Safeguards
                  </h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1 text-sm">
                    <li>End-to-end encryption for sensitive data</li>
                    <li>Secure Socket Layer (SSL) certificates</li>
                    <li>Multi-factor authentication options</li>
                    <li>Regular security audits and penetration testing</li>
                    <li>Automated threat detection systems</li>
                    <li>Secure data centers with physical access controls</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Organizational Measures
                  </h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1 text-sm">
                    <li>Data access on a need-to-know basis</li>
                    <li>Regular employee security training</li>
                    <li>Background checks for data handlers</li>
                    <li>
                      Incident response and breach notification procedures
                    </li>
                    <li>Regular privacy impact assessments</li>
                    <li>Third-party vendor security requirements</li>
                  </ul>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h3 className="font-semibold text-orange-800 mb-2">
                  Data Breach Notification
                </h3>
                <p className="text-orange-700 text-sm">
                  In the unlikely event of a data breach affecting your personal
                  information, we will notify:
                </p>
                <ul className="list-disc pl-6 text-orange-700 text-sm mt-2 space-y-1">
                  <li>Affected users within 72 hours (where feasible)</li>
                  <li>Relevant supervisory authorities as required by law</li>
                  <li>Law enforcement if criminal activity is suspected</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 6 - International Transfers */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Globe className="w-6 h-6 text-blue-600 mr-2" />
              6. International Data Transfers
            </h2>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <p className="text-gray-700 mb-4">
                Your data may be transferred to and processed in countries other
                than your residence. We ensure adequate protection through:
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">
                    EU Data Transfers
                  </h3>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>
                      • Standard Contractual Clauses (SCCs) approved by EU
                      Commission
                    </li>
                    <li>
                      • Adequacy decisions for transfers to approved countries
                    </li>
                    <li>
                      • Binding Corporate Rules (BCRs) within our corporate
                      group
                    </li>
                    <li>
                      • Additional safeguards for transfers to non-adequate
                      countries
                    </li>
                  </ul>
                </div>

                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">
                    Cross-Border Data Protection Act (India)
                  </h3>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>
                      • Government approval for sensitive personal data
                      transfers
                    </li>
                    <li>
                      • Contractual obligations ensuring equivalent protection
                    </li>
                    <li>
                      • Regular compliance audits of international partners
                    </li>
                  </ul>
                </div>

                <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                  <h3 className="font-semibold text-purple-800 mb-2">
                    US Privacy Framework Compliance
                  </h3>
                  <ul className="text-purple-700 text-sm space-y-1">
                    <li>• Privacy Shield successor framework compliance</li>
                    <li>
                      • State-specific transfer restrictions (where applicable)
                    </li>
                    <li>
                      • COPPA compliance for transfers involving children's data
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 7 - Cookies and Tracking */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Cookies and Tracking Technologies
            </h2>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">
                    Essential Cookies
                  </h3>
                  <p className="text-green-700 text-sm mb-2">
                    Required for platform functionality
                  </p>
                  <ul className="text-green-600 text-xs space-y-1">
                    <li>• Session management</li>
                    <li>• Authentication</li>
                    <li>• Security features</li>
                    <li>• Shopping cart</li>
                  </ul>
                  <p className="text-green-800 text-xs mt-2 font-semibold">
                    Cannot be disabled
                  </p>
                </div>

                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">
                    Functional Cookies
                  </h3>
                  <p className="text-blue-700 text-sm mb-2">
                    Enhance user experience
                  </p>
                  <ul className="text-blue-600 text-xs space-y-1">
                    <li>• Language preferences</li>
                    <li>• Region settings</li>
                    <li>• Accessibility features</li>
                    <li>• User preferences</li>
                  </ul>
                  <p className="text-blue-800 text-xs mt-2 font-semibold">
                    Can be controlled
                  </p>
                </div>

                <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                  <h3 className="font-semibold text-purple-800 mb-2">
                    Analytics Cookies
                  </h3>
                  <p className="text-purple-700 text-sm mb-2">
                    Help us improve our services
                  </p>
                  <ul className="text-purple-600 text-xs space-y-1">
                    <li>• Usage statistics</li>
                    <li>• Performance metrics</li>
                    <li>• Error reporting</li>
                    <li>• A/B testing</li>
                  </ul>
                  <p className="text-purple-800 text-xs mt-2 font-semibold">
                    Requires consent
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">
                  Cookie Management
                </h3>
                <p className="text-gray-700 text-sm mb-2">
                  You can control cookies through your browser settings or our
                  cookie preferences center.
                </p>
                <ul className="list-disc pl-6 text-gray-600 text-sm space-y-1">
                  <li>Manage preferences in your account settings</li>
                  <li>Use browser controls to block or delete cookies</li>
                  <li>Opt-out of analytics tracking</li>
                  <li>Configure cookie consent preferences</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 8 - Data Retention */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. Data Retention and Deletion
            </h2>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="space-y-4">
                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <h3 className="font-semibold text-yellow-800 mb-2">
                    Account Data
                  </h3>
                  <ul className="text-yellow-700 text-sm space-y-1">
                    <li>
                      • <strong>Active accounts:</strong> Retained while account
                      is active
                    </li>
                    <li>
                      • <strong>Inactive accounts:</strong> Deleted after 3
                      years of inactivity
                    </li>
                    <li>
                      • <strong>Account closure:</strong> Most data deleted
                      within 30 days
                    </li>
                    <li>
                      • <strong>Legal holds:</strong> Extended retention for
                      legal compliance
                    </li>
                  </ul>
                </div>

                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">
                    Transaction Records
                  </h3>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>
                      • <strong>Order history:</strong> 7 years (tax and
                      accounting requirements)
                    </li>
                    <li>
                      • <strong>Payment data:</strong> As required by financial
                      regulations
                    </li>
                    <li>
                      • <strong>Shipping records:</strong> 3 years for warranty
                      and returns
                    </li>
                    <li>
                      • <strong>Support tickets:</strong> 2 years for service
                      improvement
                    </li>
                  </ul>
                </div>

                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">
                    Marketing & Communications
                  </h3>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>
                      • <strong>Email preferences:</strong> Until you
                      unsubscribe
                    </li>
                    <li>
                      • <strong>Marketing analytics:</strong> Anonymized after 2
                      years
                    </li>
                    <li>
                      • <strong>Consent records:</strong> Maintained for
                      compliance purposes
                    </li>
                    <li>
                      • <strong>Unsubscribe lists:</strong> Maintained to honor
                      your choices
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-4">
                <h3 className="font-semibold text-red-800 mb-2">
                  Automated Deletion
                </h3>
                <p className="text-red-700 text-sm">
                  We have automated systems that regularly review and delete
                  data according to our retention schedules. You can request
                  immediate deletion of your account data at any time, subject
                  to legal retention requirements.
                </p>
              </div>
            </div>
          </section>

          {/* Section 9 - Children's Privacy */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              9. Children's Privacy Protection
            </h2>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                <h3 className="font-semibold text-red-800 mb-2">
                  Age Restrictions
                </h3>
                <ul className="text-red-700 text-sm space-y-1">
                  <li>
                    • <strong>Minimum age:</strong> 18 years (or age of majority
                    in your jurisdiction)
                  </li>
                  <li>
                    • <strong>Parental consent:</strong> Required for users
                    under 18
                  </li>
                  <li>
                    • <strong>COPPA compliance:</strong> Enhanced protections
                    for users under 13 (US)
                  </li>
                  <li>
                    • <strong>GDPR compliance:</strong> Parental consent
                    required for users under 16 (EU)
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">
                    Parental Controls
                  </h3>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>
                      • Account creation requires verifiable parental consent
                    </li>
                    <li>• Parents can review and delete their child's data</li>
                    <li>• Limited data collection for child users</li>
                    <li>• No behavioral advertising to children</li>
                  </ul>
                </div>

                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">
                    Data Protection for Minors
                  </h3>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• Enhanced security measures for child accounts</li>
                    <li>• Restricted data sharing with third parties</li>
                    <li>• Priority deletion rights for child data</li>
                    <li>• Regular compliance audits and training</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              10. Contact Information & Data Protection Officer
            </h2>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200 p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Mail className="w-5 h-5 mr-2 text-blue-600" />
                    Data Protection Officer (DPO)
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-gray-700">
                      <Mail className="w-4 h-4 mr-2 text-blue-600" />
                      <span>dpo@techbazaar.com</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Phone className="w-4 h-4 mr-2 text-blue-600" />
                      <span>+91-11-4567-8901 (Privacy Inquiries)</span>
                    </div>
                    <p className="text-gray-600 text-xs mt-2">
                      Dedicated privacy specialist available Monday-Friday, 9 AM
                      - 6 PM IST
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Globe className="w-5 h-5 mr-2 text-blue-600" />
                    Regional Privacy Contacts
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="text-gray-700">
                      <strong>🇪🇺 EU Representative:</strong>
                      <br />
                      eu-privacy@techbazaar.com
                    </div>
                    <div className="text-gray-700">
                      <strong>🇺🇸 US Privacy Officer:</strong>
                      <br />
                      us-privacy@techbazaar.com
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-blue-200">
                <p className="text-gray-700 text-sm">
                  <strong>Registered Office:</strong> TechBazaar Private
                  Limited, 123 Tech Park, Sector 5, Gurugram, Haryana 122001,
                  India
                </p>
                <p className="text-gray-600 text-xs mt-2">
                  For urgent privacy matters outside business hours, use our
                  24/7 online privacy portal
                </p>
              </div>
            </div>
          </section>

          {/* Section 11 - Updates */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Bell className="w-6 h-6 text-blue-600 mr-2" />
              11. Policy Updates and Notifications
            </h2>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <p className="text-gray-700 mb-4">
                We may update this Privacy Policy to reflect changes in our
                practices, legal requirements, or service features. We will
                notify you of material changes through:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="p-3 bg-blue-50 border-l-4 border-blue-400 rounded">
                    <p className="text-blue-800 text-sm font-semibold">
                      Email Notification
                    </p>
                    <p className="text-blue-700 text-xs">
                      30 days advance notice for material changes
                    </p>
                  </div>
                  <div className="p-3 bg-green-50 border-l-4 border-green-400 rounded">
                    <p className="text-green-800 text-sm font-semibold">
                      Platform Notice
                    </p>
                    <p className="text-green-700 text-xs">
                      Prominent banner on website and app
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-purple-50 border-l-4 border-purple-400 rounded">
                    <p className="text-purple-800 text-sm font-semibold">
                      In-App Notification
                    </p>
                    <p className="text-purple-700 text-xs">
                      Push notifications for significant updates
                    </p>
                  </div>
                  <div className="p-3 bg-orange-50 border-l-4 border-orange-400 rounded">
                    <p className="text-orange-800 text-sm font-semibold">
                      Version History
                    </p>
                    <p className="text-orange-700 text-xs">
                      Previous versions archived and accessible
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer Notice */}
        <div className="bg-gray-800 text-white rounded-lg p-6 mt-12">
          <div className="flex items-center justify-center mb-4">
            <Shield className="w-6 h-6 text-blue-400 mr-2" />
            <span className="font-semibold">Global Privacy Compliance</span>
          </div>
          <p className="text-gray-300 text-sm text-center leading-relaxed mb-4">
            This Privacy Policy complies with the Digital Personal Data
            Protection Act 2023 (India), Information Technology Act 2000,
            General Data Protection Regulation (GDPR), California Consumer
            Privacy Act (CCPA), Children's Online Privacy Protection Act
            (COPPA), and other applicable international privacy regulations.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#"
              className="text-blue-400 hover:text-blue-300 text-sm flex items-center transition-colors"
            >
              <FileText className="w-4 h-4 mr-1" />
              Download Privacy Summary
            </a>
            <a
              href="#"
              className="text-blue-400 hover:text-blue-300 text-sm flex items-center transition-colors"
            >
              <ExternalLink className="w-4 h-4 mr-1" />
              Privacy Portal
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
