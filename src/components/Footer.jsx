import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-amber-900 to-orange-900 text-white mt-16">
      <div className="px-6 py-16 mx-auto max-w-7xl sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">TechBazaar</h3>
            <p className="text-amber-100 mb-6 leading-relaxed">
              Your one-stop destination for premium tech gadgets and
              accessories. Quality meets innovation in every product we offer.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-amber-800 rounded-lg hover:bg-amber-700 transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-amber-800 rounded-lg hover:bg-amber-700 transition-colors duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-amber-800 rounded-lg hover:bg-amber-700 transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-amber-800 rounded-lg hover:bg-amber-700 transition-colors duration-300"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-amber-100 hover:text-white transition-colors duration-300">
                Home
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-amber-100 hover:text-white transition-colors duration-300"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-amber-100 hover:text-white transition-colors duration-300"
                >
                  Categories
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-amber-100 hover:text-white transition-colors duration-300"
                >
                  Deals & Offers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-amber-100 hover:text-white transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Customer Service</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-amber-100 hover:text-white transition-colors duration-300"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-amber-100 hover:text-white transition-colors duration-300"
                >
                  FAQs
                </a>
              </li>
              <li>
                <Link to="/return" className="text-amber-100 hover:text-white transition-colors duration-300">
                  Return & Refund
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-amber-100 hover:text-white transition-colors duration-300">
                  Shipping
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-amber-100 hover:text-white transition-colors duration-300">
                  Privacy & Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-amber-100 hover:text-white transition-colors duration-300">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="mt-1 mr-3 p-1 bg-amber-700 rounded-lg">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-amber-100">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mt-1 mr-3 p-1 bg-amber-700 rounded-lg">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-amber-100">support@techbazaar.in</p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-amber-800/50 rounded-xl">
                <h5 className="font-semibold mb-2">Newsletter</h5>
                <p className="text-sm text-amber-100 mb-3">
                  Subscribe for updates and offers
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 text-sm bg-white/10 rounded-l-lg border border-amber-700 focus:outline-none focus:ring-1 focus:ring-amber-500 placeholder-amber-300"
                  />
                  <button className="px-3 py-2 bg-gradient-to-r from-amber-600 to-orange-600 text-sm font-medium rounded-r-lg hover:from-amber-700 hover:to-orange-700 transition-all duration-300">
                    Join
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-amber-800 mt-12 pt-8 text-center text-amber-200 text-sm">
          <p>© {new Date().getFullYear()} TechBazaar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
