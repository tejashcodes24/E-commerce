import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-white">
      <Link to="/" className="text-2xl font-bold text-blue-600">
        ShopEase
      </Link>
      <div className="flex gap-6 text-gray-700">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/privacy">Privacy</Link>
        <Link to="/terms">Terms</Link>
      </div>
      <ShoppingCart className="w-6 h-6 text-blue-600 cursor-pointer" />
    </nav>
  );
}
