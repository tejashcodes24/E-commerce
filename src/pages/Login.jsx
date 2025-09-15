import React, { useState } from "react";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  CheckCircle,
  X,
  AlertCircle,
  ExternalLink,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function LoginComponent() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSuccessNotification, setShowSuccessNotification] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (email && password) {
      setIsLoggedIn(true);
      setShowSuccessNotification(true);

      setTimeout(() => {
        setShowSuccessNotification(false);
        navigate("/"); // Redirect to home page after successful login
      }, 1500);
    }
  };

  // Success Notification Component
  const SuccessNotification = () => (
    <div
      className={`fixed top-6 right-6 z-50 transition-opacity duration-300 ${
        showSuccessNotification
          ? "opacity-100"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white px-6 py-5 rounded-2xl shadow-2xl flex items-start space-x-4 min-w-80 border border-gray-700/50 backdrop-blur-sm">
        <div className="flex-shrink-0">
          <CheckCircle className="w-7 h-7 text-emerald-400" />
        </div>
        <div className="flex-1">
          <p className="font-semibold text-lg text-white mb-1">
            Login Successful!
          </p>
          <p className="text-sm text-gray-300">
            Welcome back to{" "}
            <span className="font-medium text-emerald-400">TechBazaar</span>
          </p>
        </div>
        <div className="absolute top-3 right-3">
          <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
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

          {/* Login Card */}
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl border border-orange-100 overflow-hidden">
            {/* Orange accent bar */}
            <div className="h-2 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600"></div>

            <div className="p-8">
              {/* Title */}
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Welcome Back!
                </h2>
                <p className="text-gray-600">
                  Sign in to continue to TechBazaar
                </p>
              </div>

              <div className="space-y-6">
                {/* Email field */}
                <div className="space-y-2">
                  <label className="text-gray-700 font-medium text-sm">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-400 w-5 h-5" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
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

                {/* Forgot Password */}
                <div className="text-right">
                  <a
                    href="#"
                    className="text-orange-500 hover:text-orange-600 text-sm font-medium transition-colors"
                  >
                    Forgot Password?
                  </a>
                </div>

                {/* Submit Button */}
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-orange-600 hover:to-orange-700"
                >
                  Sign In
                </button>
              </div>

              {/* Footer */}
              <p className="text-center text-gray-600 text-sm mt-8">
                Don't have an account?
                <Link to="/register" className="text-orange-600 hover:text-orange-700 font-semibold transition-colors ml-1">Sign up</Link>
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
    </>
  );
}
