import { Link } from "react-router-dom";
import { ShoppingCart, Search, User, Menu, X, Heart } from "lucide-react";
import { useState } from "react";

// Navbar Component
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-amber-100 shadow-sm">
      <div className="px-6 py-4 mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600"
          >
            TechBazaar
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-gray-700">
            <Link
              to="/"
              className="font-medium hover:text-amber-600 transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="font-medium hover:text-amber-600 transition-colors duration-300"
            >
              Products
            </Link>
            <Link
              to="/categories"
              className="font-medium hover:text-amber-600 transition-colors duration-300"
            >
              Categories
            </Link>
            <Link
              to="/deals"
              className="font-medium hover:text-amber-600 transition-colors duration-300"
            >
              Deals
            </Link>
            <Link
              to="/about"
              className="font-medium hover:text-amber-600 transition-colors duration-300"
            >
              About
            </Link>
          </div>

          {/* Right side icons */}
          <div className="flex items-center gap-6">
            {/* Search */}
            <div className="hidden md:flex items-center bg-amber-50 rounded-xl px-3 py-2">
              <Search className="w-4 h-4 text-amber-500 mr-2" />
              <input
                type="text"
                placeholder="Search products..."
                className="bg-transparent text-sm outline-none w-32 placeholder-amber-400"
              />
            </div>

            {/* User Account */}
            <div className="hidden md:block p-2 bg-amber-100 rounded-xl hover:bg-amber-200 transition-colors duration-300 cursor-pointer">
              <User className="w-5 h-5 text-amber-700" />
            </div>

            {/* Wishlist */}
            <div className="hidden md:block p-2 bg-amber-100 rounded-xl hover:bg-amber-200 transition-colors duration-300 cursor-pointer">
              <Heart className="w-5 h-5 text-amber-700" />
            </div>

            {/* Shopping Cart */}
            <div className="relative p-2 bg-amber-100 rounded-xl hover:bg-amber-200 transition-colors duration-300 cursor-pointer">
              <ShoppingCart className="w-5 h-5 text-amber-700" />
              <span className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center bg-gradient-to-r from-amber-600 to-orange-600 text-white text-xs font-bold rounded-full">
                3
              </span>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 bg-amber-100 rounded-xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-amber-700" />
              ) : (
                <Menu className="w-5 h-5 text-amber-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-amber-100">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                className="font-medium text-gray-700 hover:text-amber-600 transition-colors duration-300 py-2"
              >
                Home
              </Link>
              <Link
                to="/products"
                className="font-medium text-gray-700 hover:text-amber-600 transition-colors duration-300 py-2"
              >
                Products
              </Link>
              <Link
                to="/categories"
                className="font-medium text-gray-700 hover:text-amber-600 transition-colors duration-300 py-2"
              >
                Categories
              </Link>
              <Link
                to="/deals"
                className="font-medium text-gray-700 hover:text-amber-600 transition-colors duration-300 py-2"
              >
                Deals
              </Link>
              <Link
                to="/about"
                className="font-medium text-gray-700 hover:text-amber-600 transition-colors duration-300 py-2"
              >
                About
              </Link>

              <div className="flex items-center gap-4 pt-4 border-t border-amber-100">
                <Link
                  to="/login"
                  className="flex-1 text-center py-2 text-sm font-medium text-amber-700 bg-amber-100 rounded-xl"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="flex-1 text-center py-2 text-sm font-medium text-white bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
