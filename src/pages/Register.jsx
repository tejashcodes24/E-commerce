import React, { useState } from "react";
import { Eye, EyeOff, Mail, Lock, User, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function RegisterComponent() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showSuccessNotification, setShowSuccessNotification] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    if (!termsAccepted) {
      setShowTermsModal(true);
      return;
    }

    console.log("Register", formData);
    setShowSuccessNotification(true);

    setTimeout(() => {
      setShowSuccessNotification(false);
      navigate("/login"); // Redirect to login page after successful registration
    }, 1500);
  };

  const handleAcceptTerms = () => {
    setTermsAccepted(true);
    setShowTermsModal(false);

    // After accepting terms, submit the form
    if (formData.password === formData.confirmPassword) {
      console.log("Register", formData);
      setShowSuccessNotification(true);

      setTimeout(() => {
        setShowSuccessNotification(false);
        navigate("/login"); // Redirect to login page after successful registration
      }, 1500);
    }
  };

  // Success Notification Component
  const SuccessNotification = () => (
    <div
      className={`fixed top-4 right-4 z-50 transform transition-all duration-500 ease-in-out ${
        showSuccessNotification
          ? "translate-x-0 opacity-100"
          : "translate-x-full opacity-0"
      }`}
    >
      <div className="bg-green-500 text-white px-6 py-4 rounded-xl shadow-lg flex items-center space-x-3 min-w-80">
        <CheckCircle className="w-6 h-6 flex-shrink-0" />
        <div>
          <p className="font-semibold">Registration Successful!</p>
          <p className="text-sm text-green-100">Please login to continue</p>
        </div>
      </div>
    </div>
  );

  // Terms and Conditions Modal Component
  const TermsModal = () => (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-4 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">
              Terms & Conditions
            </h2>
            <p className="text-orange-100 text-sm">
              Please review and accept our terms to continue
            </p>
          </div>
          <CheckCircle className="w-8 h-8 text-orange-100" />
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-96">
          <div className="space-y-6 text-gray-700">
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h3 className="font-semibold text-orange-800 mb-2 flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                Important Notice
              </h3>
              <p className="text-sm text-orange-700">
                By using TechBazaar, you agree to comply with and be bound by
                the following terms and conditions, which incorporate laws from
                India (Digital Personal Data Protection Act 2023, IT Act 2000),
                EU (GDPR), and USA data protection regulations.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                1. Acceptance of Terms
              </h4>
              <p className="text-sm mb-3">
                By accessing and using TechBazaar, you accept and agree to be
                bound by the terms and provision of this agreement. These terms
                comply with the Digital Personal Data Protection Act, 2023
                (India), IT Act 2000, GDPR (EU), and applicable US federal laws.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                2. Data Protection & Privacy
              </h4>
              <p className="text-sm mb-3">
                We process your personal data in accordance with:
              </p>
              <ul className="text-sm space-y-1 ml-4 list-disc text-gray-600">
                <li>Digital Personal Data Protection Act, 2023 (India)</li>
                <li>General Data Protection Regulation (GDPR) for EU users</li>
                <li>California Consumer Privacy Act (CCPA) for US users</li>
                <li>IT Act 2000 and Information Technology Rules</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                3. User Rights
              </h4>
              <p className="text-sm mb-2">You have the right to:</p>
              <ul className="text-sm space-y-1 ml-4 list-disc text-gray-600">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Data portability (where applicable)</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                4. Prohibited Activities
              </h4>
              <p className="text-sm mb-2">You agree not to:</p>
              <ul className="text-sm space-y-1 ml-4 list-disc text-gray-600">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Engage in fraudulent activities</li>
                <li>Distribute harmful or malicious content</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                5. Governing Law
              </h4>
              <p className="text-sm">
                These terms are governed by the laws of India, with additional
                protections under GDPR for EU users and applicable US state and
                federal laws for US users.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-600">
                <strong>Contact Information:</strong> For any questions
                regarding these terms or your data rights, contact us at
                legal@techbazaar.com or through our Data Protection Officer.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex items-center space-x-4 text-sm">
              <a
                href="#"
                className="text-orange-600 hover:text-orange-700 flex items-center"
              >
                View Full Terms & Conditions
              </a>
              <a
                href="#"
                className="text-orange-600 hover:text-orange-700 flex items-center"
              >
                Privacy Policy
              </a>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={() => setShowTermsModal(false)}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleAcceptTerms}
                className="px-6 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all shadow-md"
              >
                Accept & Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-orange-600 mb-2">
              TechBazaar
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full"></div>
          </div>

          {/* Register Card */}
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl border border-orange-100 overflow-hidden">
            {/* Orange accent bar */}
            <div className="h-2 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600"></div>

            <div className="p-8">
              {/* Title */}
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Create Account
                </h2>
                <p className="text-gray-600">
                  Join TechBazaar and start shopping
                </p>
              </div>

              <div className="space-y-6">
                {/* Full Name field */}
                <div className="space-y-2">
                  <label className="text-gray-700 font-medium text-sm">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-400 w-5 h-5" />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-orange-400 focus:ring-4 focus:ring-orange-100 transition-all duration-300 outline-none bg-white/50"
                      required
                    />
                  </div>
                </div>

                {/* Email field */}
                <div className="space-y-2">
                  <label className="text-gray-700 font-medium text-sm">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-400 w-5 h-5" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-orange-400 focus:ring-4 focus:ring-orange-100 transition-all duration-300 outline-none bg-white/50"
                      required
                    />
                  </div>
                </div>

                {/* Password field */}
                <div className="space-y-2">
                  <label className="text-gray-700 font-medium text-sm">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-400 w-5 h-5" />
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Create a password"
                      className="w-full pl-12 pr-12 py-4 border-2 border-gray-200 rounded-xl focus:border-orange-400 focus:ring-4 focus:ring-orange-100 transition-all duration-300 outline-none bg-white/50"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-orange-400 hover:text-orange-600 transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Confirm Password field */}
                <div className="space-y-2">
                  <label className="text-gray-700 font-medium text-sm">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-400 w-5 h-5" />
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      placeholder="Confirm your password"
                      className="w-full pl-12 pr-12 py-4 border-2 border-gray-200 rounded-xl focus:border-orange-400 focus:ring-4 focus:ring-orange-100 transition-all duration-300 outline-none bg-white/50"
                      required
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-orange-400 hover:text-orange-600 transition-colors"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={termsAccepted}
                    onChange={() => setTermsAccepted(!termsAccepted)}
                    className="mt-1 w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 focus:ring-2"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    I agree to the{" "}
                    <button
                      type="button"
                      onClick={() => setShowTermsModal(true)}
                      className="text-orange-600 hover:text-orange-700 font-medium transition-colors underline"
                    >
                      Terms & Conditions
                    </button>{" "}
                    and{" "}
                    <button
                      type="button"
                      onClick={() => setShowTermsModal(true)}
                      className="text-orange-600 hover:text-orange-700 font-medium transition-colors underline"
                    >
                      Privacy Policy
                    </button>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-orange-600 hover:to-orange-700"
                >
                  Create Account
                </button>
              </div>

              {/* Divider */}
              <div className="flex items-center my-8">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                <span className="px-4 text-gray-500 text-sm">
                  or sign up with
                </span>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
              </div>

              {/* Social Registration */}
              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center py-3 px-4 border-2 border-gray-200 rounded-xl hover:border-orange-200 hover:bg-orange-50 transition-all duration-300 group">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path
                      fill="#EA4335"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v极2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 极12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  <span className="text-gray-700 font-medium">Google</span>
                </button>

                <button className="flex items-center justify-center py极3 px-4 border-2 border-gray-200 rounded-xl hover:border-orange-200 hover:bg-orange-50 transition-all duration-300 group">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="#1877F2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c极0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span className="text-gray-700 font-medium">Facebook</span>
                </button>
              </div>

              {/* Footer */}
              <p className="text-center text-gray-600 text-sm mt-8">
                Already have an account?
                <a
                  href="/login"
                  className="text-orange-600 hover:text-orange-700 font-semibold transition-colors ml-1"
                >
                  Sign in
                </a>
              </p>
            </div>
          </div>

          {/* Bottom decoration */}
          <div className="text-center mt-8">
            <div className="flex justify-center space-x-2">
              <div className="w-2 h-2 bg-orange-300 rounded-full animate-pulse"></div>
              <div
                className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"
                style={{ animationDelay: "0.4s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Notification */}
      <SuccessNotification />

      {/* Terms Modal */}
      {showTermsModal && <TermsModal />}
    </>
  );
}
