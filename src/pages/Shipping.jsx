import {
  Shield,
  AlertTriangle,
  ExternalLink,
  Truck,
  Package,
  MapPin,
  Clock,
  Mail,
  Phone,
  Globe,
  CreditCard,
  RefreshCw,
  Calendar,
  FileText,
  AlertCircle,
  CheckCircle,
  XCircle,
} from "lucide-react";

export default function ShippingPolicy() {
  const lastUpdated = "September 15th, 2025";

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Truck className="w-16 h-16 mx-auto mb-4 text-green-100" />
          <h1 className="text-4xl font-bold mb-4">
            Shipping & Delivery Policy
          </h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Comprehensive shipping information including delivery options,
            timeframes, costs, and international shipping policies in compliance
            with global regulations.
          </p>
          <div className="flex items-center justify-center mt-6 text-green-200">
            <Clock className="w-5 h-5 mr-2" />
            <span>Last updated: {lastUpdated}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Legal Compliance Notice */}
        <div className="bg-emerald-50 border-l-4 border-emerald-400 p-6 rounded-lg mb-8">
          <div className="flex items-start">
            <Shield className="w-6 h-6 text-emerald-600 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-emerald-800 mb-2">
                International Shipping Compliance
              </h3>
              <p className="text-emerald-700 text-sm leading-relaxed">
                Our shipping practices comply with Indian customs regulations,
                EU consumer rights directives, US interstate commerce laws,
                international trade agreements, and consumer protection laws in
                all jurisdictions where we operate.
              </p>
            </div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          {/* Section 1 - Shipping Zones */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Globe className="w-6 h-6 text-green-600 mr-2" />
              1. Shipping Zones and Coverage
            </h2>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2 flex items-center">
                    🇮🇳 Domestic India
                  </h3>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• All 28 states and 8 union territories</li>
                    <li>• 25,000+ PIN codes covered</li>
                    <li>• Metro cities: Next-day delivery</li>
                    <li>• Tier-2/3 cities: 2-4 business days</li>
                    <li>• Rural areas: 4-7 business days</li>
                  </ul>
                  <p className="text-green-800 text-xs mt-2 font-semibold">
                    Free shipping on orders ₹499+
                  </p>
                </div>

                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2 flex items-center">
                    🌍 International
                  </h3>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• 180+ countries worldwide</li>
                    <li>• Express delivery available</li>
                    <li>• Customs clearance assistance</li>
                    <li>• Duty and tax calculation</li>
                    <li>• Restricted items guidelines</li>
                  </ul>
                  <p className="text-blue-800 text-xs mt-2 font-semibold">
                    Delivery: 7-21 business days
                  </p>
                </div>

                <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                  <h3 className="font-semibold text-purple-800 mb-2 flex items-center">
                    🚫 Restricted Areas
                  </h3>
                  <ul className="text-purple-700 text-sm space-y-1">
                    <li>• Military/defense installations</li>
                    <li>• Certain remote locations</li>
                    <li>• Countries under trade sanctions</li>
                    <li>• High-risk security zones</li>
                    <li>• P.O. Box addresses (limited)</li>
                  </ul>
                  <p className="text-purple-800 text-xs mt-2 font-semibold">
                    Check availability at checkout
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="font-semibold text-yellow-800 mb-2">
                  Serviceable Area Check
                </h3>
                <p className="text-yellow-700 text-sm">
                  Enter your PIN code/postal code at checkout to verify delivery
                  availability and get accurate delivery timeframes. Some
                  products may have restricted shipping zones due to size,
                  weight, or regulatory requirements.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 - Delivery Options */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Package className="w-6 h-6 text-green-600 mr-2" />
              2. Delivery Options and Timeframes
            </h2>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="space-y-6">
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-blue-800">
                      Standard Delivery
                    </h3>
                    <span className="text-blue-600 text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-blue-700 text-sm mb-2">
                        <strong>Domestic (India):</strong>
                      </p>
                      <ul className="text-blue-600 text-xs space-y-1 list-disc pl-4">
                        <li>Metro cities: 2-3 business days</li>
                        <li>Other cities: 3-5 business days</li>
                        <li>Rural areas: 5-8 business days</li>
                        <li>Free on orders above ₹499</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-blue-700 text-sm mb-2">
                        <strong>International:</strong>
                      </p>
                      <ul className="text-blue-600 text-xs space-y-1 list-disc pl-4">
                        <li>SAARC countries: 7-12 business days</li>
                        <li>Asia-Pacific: 10-15 business days</li>
                        <li>Europe/Americas: 12-21 business days</li>
                        <li>Tracking included</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-green-800">
                      Express Delivery
                    </h3>
                    <span className="text-green-600 text-sm font-medium">
                      Fastest
                    </span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-green-700 text-sm mb-2">
                        <strong>Domestic Options:</strong>
                      </p>
                      <ul className="text-green-600 text-xs space-y-1 list-disc pl-4">
                        <li>Same-day delivery (select cities)</li>
                        <li>Next-day delivery (major cities)</li>
                        <li>2-day express (nationwide)</li>
                        <li>Real-time tracking</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-green-700 text-sm mb-2">
                        <strong>International Express:</strong>
                      </p>
                      <ul className="text-green-600 text-xs space-y-1 list-disc pl-4">
                        <li>DHL/FedEx partnerships</li>
                        <li>3-7 business days worldwide</li>
                        <li>Priority customs clearance</li>
                        <li>Insurance included</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                  <h3 className="font-semibold text-purple-800 mb-3">
                    Special Delivery Services
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-purple-700 text-sm font-medium mb-1">
                        White Glove Delivery
                      </p>
                      <p className="text-purple-600 text-xs">
                        For large electronics, furniture, and appliances
                      </p>
                    </div>
                    <div>
                      <p className="text-purple-700 text-sm font-medium mb-1">
                        Installation Service
                      </p>
                      <p className="text-purple-600 text-xs">
                        Professional setup and installation included
                      </p>
                    </div>
                    <div>
                      <p className="text-purple-700 text-sm font-medium mb-1">
                        Scheduled Delivery
                      </p>
                      <p className="text-purple-600 text-xs">
                        Choose specific date and time window
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 - Shipping Costs */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <CreditCard className="w-6 h-6 text-green-600 mr-2" />
              3. Shipping Costs and Charges
            </h2>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Domestic Shipping (India)
                  </h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-green-50 border-l-4 border-green-400 rounded">
                      <p className="text-green-800 text-sm font-semibold">
                        Free Shipping Threshold
                      </p>
                      <p className="text-green-700 text-xs">
                        Orders ₹499+ qualify for free standard delivery
                      </p>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-700">
                          Standard delivery (under ₹499):
                        </span>
                        <span className="font-semibold">₹49-99</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Express delivery:</span>
                        <span className="font-semibold">₹149-299</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">
                          Same-day delivery:
                        </span>
                        <span className="font-semibold">₹199-499</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">
                          White glove delivery:
                        </span>
                        <span className="font-semibold">₹999-2,999</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    International Shipping
                  </h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-blue-50 border-l-4 border-blue-400 rounded">
                      <p className="text-blue-800 text-sm font-semibold">
                        Calculated at Checkout
                      </p>
                      <p className="text-blue-700 text-xs">
                        Based on destination, weight, and dimensions
                      </p>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-700">SAARC countries:</span>
                        <span className="font-semibold">₹299-899</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Asia-Pacific:</span>
                        <span className="font-semibold">₹599-1,999</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Europe/Americas:</span>
                        <span className="font-semibold">₹999-3,999</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">
                          Express international:
                        </span>
                        <span className="font-semibold">₹1,999-9,999</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="font-semibold text-yellow-800 mb-2">
                  Additional Charges
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-yellow-700 mb-1">
                      <strong>Domestic:</strong>
                    </p>
                    <ul className="text-yellow-600 text-xs space-y-1">
                      <li>• Fuel surcharge may apply during peak seasons</li>
                      <li>• Remote area delivery: ₹50-150 extra</li>
                      <li>• Cash on delivery: ₹25-49 handling fee</li>
                      <li>• Re-delivery attempts: ₹25 per attempt</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-yellow-700 mb-1">
                      <strong>International:</strong>
                    </p>
                    <ul className="text-yellow-600 text-xs space-y-1">
                      <li>
                        • Customs duties and taxes (buyer's responsibility)
                      </li>
                      <li>• Brokerage fees may apply</li>
                      <li>• Currency conversion charges</li>
                      <li>• Return shipping not included in free returns</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 - Order Processing */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Clock className="w-6 h-6 text-green-600 mr-2" />
              4. Order Processing and Dispatch
            </h2>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <CheckCircle className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-blue-800 mb-1">
                    Order Confirmation
                  </h3>
                  <p className="text-blue-700 text-sm">
                    Within 15 minutes of payment
                  </p>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <Package className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-yellow-800 mb-1">
                    Processing Time
                  </h3>
                  <p className="text-yellow-700 text-sm">
                    1-2 business days (usually same day)
                  </p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Truck className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-green-800 mb-1">
                    Dispatch Notification
                  </h3>
                  <p className="text-green-700 text-sm">
                    Email + SMS with tracking details
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-3">
                    Processing Timeline
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                      <div className="flex-1">
                        <p className="text-gray-700 text-sm font-medium">
                          Payment Verification
                        </p>
                        <p className="text-gray-600 text-xs">
                          Instant for UPI/cards, up to 2 hours for other methods
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                      <div className="flex-1">
                        <p className="text-gray-700 text-sm font-medium">
                          Inventory Check & Allocation
                        </p>
                        <p className="text-gray-600 text-xs">
                          2-6 hours during business days
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                      <div className="flex-1">
                        <p className="text-gray-700 text-sm font-medium">
                          Quality Check & Packaging
                        </p>
                        <p className="text-gray-600 text-xs">
                          4-24 hours depending on product complexity
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                      <div className="flex-1">
                        <p className="text-gray-700 text-sm font-medium">
                          Dispatch to Courier
                        </p>
                        <p className="text-gray-600 text-xs">
                          Same day if processed before 2 PM on business days
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <h3 className="font-semibold text-green-800 mb-2">
                      Business Days
                    </h3>
                    <ul className="text-green-700 text-sm space-y-1">
                      <li>• Monday to Saturday (10 AM - 6 PM IST)</li>
                      <li>• Processing continues on national holidays</li>
                      <li>• No processing on Sundays</li>
                      <li>• Extended hours during sale events</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-2">
                      Special Processing
                    </h3>
                    <ul className="text-blue-700 text-sm space-y-1">
                      <li>• Custom/made-to-order: 7-14 days</li>
                      <li>• Pre-order items: As per product page</li>
                      <li>• Bulk orders (50+ items): 2-5 days</li>
                      <li>• International orders: +1 day for documentation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5 - Tracking and Updates */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <MapPin className="w-6 h-6 text-green-600 mr-2" />
              5. Tracking and Delivery Updates
            </h2>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Real-Time Tracking
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">
                        SMS and email notifications at every milestone
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">
                        Live GPS tracking for express deliveries
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">
                        Delivery partner contact information
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">
                        Estimated delivery window (2-hour slots)
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Delivery Statuses
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center p-2 bg-blue-50 rounded text-sm">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                      <span className="text-blue-800">Order Confirmed</span>
                    </div>
                    <div className="flex items-center p-2 bg-yellow-50 rounded text-sm">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                      <span className="text-yellow-800">Processing</span>
                    </div>
                    <div className="flex items-center p-2 bg-purple-50 rounded text-sm">
                      <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                      <span className="text-purple-800">Shipped</span>
                    </div>
                    <div className="flex items-center p-2 bg-orange-50 rounded text-sm">
                      <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
                      <span className="text-orange-800">Out for Delivery</span>
                    </div>
                    <div className="flex items-center p-2 bg-green-50 rounded text-sm">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-green-800">Delivered</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-blue-800 mb-2">
                  Mobile App Features
                </h3>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-blue-700 font-medium mb-1">
                      Push Notifications
                    </p>
                    <p className="text-blue-600 text-xs">
                      Real-time updates on order status changes
                    </p>
                  </div>
                  <div>
                    <p className="text-blue-700 font-medium mb-1">
                      Live Map Tracking
                    </p>
                    <p className="text-blue-600 text-xs">
                      See your delivery partner's location
                    </p>
                  </div>
                  <div>
                    <p className="text-blue-700 font-medium mb-1">
                      Communication
                    </p>
                    <p className="text-blue-600 text-xs">
                      Chat directly with delivery partner
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6 - Delivery Process */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Package className="w-6 h-6 text-green-600 mr-2" />
              6. Delivery Process and Requirements
            </h2>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="space-y-6">
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-3">
                    Standard Delivery Process
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-green-700 text-sm font-medium mb-2">
                        Delivery Attempts:
                      </p>
                      <ul className="text-green-600 text-xs space-y-1">
                        <li>• 3 delivery attempts included</li>
                        <li>• Phone call before each attempt</li>
                        <li>• SMS notification with delivery window</li>
                        <li>• Option to reschedule online</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-green-700 text-sm font-medium mb-2">
                        Delivery Requirements:
                      </p>
                      <ul className="text-green-600 text-xs space-y-1">
                        <li>• Valid ID proof for verification</li>
                        <li>• Person 18+ must be present to receive</li>
                        <li>• Signature required for completion</li>
                        <li>• Package inspection allowed before acceptance</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-3">
                    High-Value Item Delivery
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-blue-700 text-sm font-medium mb-2">
                        Enhanced Security (Orders ₹25,000+):
                      </p>
                      <ul className="text-blue-600 text-xs space-y-1">
                        <li>• Government-issued photo ID mandatory</li>
                        <li>• OTP verification required</li>
                        <li>• Video recording of handover</li>
                        <li>• Insurance coverage included</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-blue-700 text-sm font-medium mb-2">
                        Special Handling:
                      </p>
                      <ul className="text-blue-600 text-xs space-y-1">
                        <li>• Tamper-evident packaging</li>
                        <li>• Senior delivery executive assigned</li>
                        <li>• Preferred delivery time slots</li>
                        <li>• Installation service available</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                  <h3 className="font-semibold text-purple-800 mb-3">
                    Alternative Delivery Options
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-purple-600 mt-0.5 mr-2 flex-shrink-0" />
                      <div>
                        <p className="text-purple-700 text-sm font-medium">
                          Pickup Points
                        </p>
                        <p className="text-purple-600 text-xs">
                          Collect from 500+ partner locations nationwide
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Package className="w-5 h-5 text-purple-600 mt-0.5 mr-2 flex-shrink-0" />
                      <div>
                        <p className="text-purple-700 text-sm font-medium">
                          Locker Delivery
                        </p>
                        <p className="text-purple-600 text-xs">
                          Secure lockers in apartment complexes and offices
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-purple-600 mt-0.5 mr-2 flex-shrink-0" />
                      <div>
                        <p className="text-purple-700 text-sm font-medium">
                          Scheduled Delivery
                        </p>
                        <p className="text-purple-600 text-xs">
                          Choose specific date and 2-hour time window
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 7 - International Shipping */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Globe className="w-6 h-6 text-green-600 mr-2" />
              7. International Shipping and Customs
            </h2>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Shipping Documentation
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>
                      • Commercial invoice with product details and HS codes
                    </li>
                    <li>• Packing list with weight and dimensions</li>
                    <li>• Customs declaration forms</li>
                    <li>• Certificates of origin (if applicable)</li>
                    <li>• MSDS for restricted/chemical items</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Customs Duties & Taxes
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>
                      • Recipient responsible for duties, VAT/GST, and local
                      taxes
                    </li>
                    <li>
                      • Calculated based on destination country regulations
                    </li>
                    <li>• Pre-paid duties available in select countries</li>
                    <li>• Customs delays may extend delivery timeframe</li>
                  </ul>
                </div>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm text-yellow-800">
                <strong>Note:</strong> International shipping times exclude
                customs clearance duration. Delivery timelines may vary based on
                local import regulations and inspection processes.
              </div>
            </div>
          </section>

          {/* Section 8 - Returns and Failed Deliveries */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <RefreshCw className="w-6 h-6 text-green-600 mr-2" />
              8. Returns, Failed Deliveries & Address Issues
            </h2>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 space-y-6">
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-2">
                  Failed Deliveries
                </h3>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>
                    • 3 unsuccessful delivery attempts → order returned to
                    warehouse
                  </li>
                  <li>
                    • Reshipping requires updated address and payment of
                    re-shipping fee
                  </li>
                  <li>• COD orders cancelled after failed attempts</li>
                </ul>
              </div>
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">Returns</h3>
                <p className="text-sm text-blue-700">
                  Return shipping is free within India for eligible products.
                  International customers must cover return shipping costs
                  unless product is defective or damaged.
                </p>
              </div>
              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <h3 className="font-semibold text-yellow-800 mb-2">
                  Address Issues
                </h3>
                <p className="text-sm text-yellow-700">
                  Ensure correct and complete address at checkout.
                  Incorrect/incomplete addresses may cause delays or failed
                  deliveries.
                </p>
              </div>
            </div>
          </section>

          {/* Section 9 - Contact & Support */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Mail className="w-6 h-6 text-green-600 mr-2" />
              9. Customer Support & Contact Information
            </h2>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Email Support
                  </h3>
                  <p className="flex items-center text-gray-700">
                    <Mail className="w-4 h-4 text-green-600 mr-2" />{" "}
                    support@example.com
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Phone Support
                  </h3>
                  <p className="flex items-center text-gray-700">
                    <Phone className="w-4 h-4 text-green-600 mr-2" /> +91 98765
                    43210
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Working Hours
                  </h3>
                  <p className="flex items-center text-gray-700">
                    <Clock className="w-4 h-4 text-green-600 mr-2" /> Mon-Sat,
                    10 AM - 6 PM IST
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Office Address
                  </h3>
                  <p className="flex items-center text-gray-700">
                    <MapPin className="w-4 h-4 text-green-600 mr-2" />{" "}
                    Bhubaneswar, Odisha, India
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 10 - Policy Updates */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <FileText className="w-6 h-6 text-green-600 mr-2" />
              10. Policy Updates & Revisions
            </h2>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-sm text-gray-700 space-y-3">
              <p>
                This policy may be updated periodically to reflect changes in
                shipping carriers, international trade laws, or company
                practices.
              </p>
              <p>
                Customers will be notified of major updates via email and
                website announcements.
              </p>
              <p className="text-xs text-gray-500">
                Last updated: {lastUpdated}
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
