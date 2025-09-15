import ProductCard from "../components/ProductCard";
import { ArrowRight, Star, Zap, Shield, Truck } from "lucide-react";

export default function Home() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 1999,
      image: "https://via.placeholder.com/300",
      rating: 4.8,
      reviews: 124,
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 3499,
      image: "https://via.placeholder.com/300",
      rating: 4.9,
      reviews: 89,
    },
    {
      id: 3,
      name: "Gaming Mouse",
      price: 1299,
      image: "https://via.placeholder.com/300",
      rating: 4.7,
      reviews: 156,
    },
    {
      id: 4,
      name: "Bluetooth Speaker",
      price: 2499,
      image: "https://via.placeholder.com/300",
      rating: 4.8,
      reviews: 203,
    },
    {
      id: 5,
      name: "Laptop Stand",
      price: 899,
      image: "https://via.placeholder.com/300",
      rating: 4.6,
      reviews: 67,
    },
    {
      id: 6,
      name: "USB-C Hub",
      price: 1599,
      image: "https://via.placeholder.com/300",
      rating: 4.9,
      reviews: 45,
    },
  ];

  const features = [
    { icon: Truck, title: "Free Shipping", desc: "On orders over ₹999" },
    { icon: Shield, title: "Secure Payment", desc: "100% protected checkout" },
    { icon: Zap, title: "Fast Delivery", desc: "Same day delivery available" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-amber-100 via-orange-100 to-yellow-100">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23d4a574%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>

        <div className="relative px-6 py-20 mx-auto max-w-7xl sm:px-8 lg:px-12">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 mb-8 text-sm font-medium text-amber-800 bg-amber-200/50 rounded-full backdrop-blur-sm border border-amber-300/30">
              <Zap className="w-4 h-4 mr-2" />
              New arrivals just dropped
            </div>

            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
              Discover Amazing
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                Tech Products
              </span>
            </h1>

            <p className="max-w-2xl mx-auto mt-6 text-xl text-gray-700 leading-relaxed">
              Explore our curated collection of premium tech gadgets and
              accessories. Quality meets innovation in every product we offer.
            </p>

            <div className="flex flex-col items-center gap-4 mt-10 sm:flex-row sm:justify-center">
              <button className="group inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300">
                Shop Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <button className="inline-flex items-center px-8 py-4 text-lg font-semibold text-amber-700 bg-white/80 backdrop-blur-sm rounded-xl border border-amber-200 hover:bg-white hover:shadow-md transition-all duration-300">
                View Categories
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 px-6 mx-auto max-w-7xl sm:px-8 lg:px-12">
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group flex items-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-amber-100/50 hover:shadow-md hover:bg-white/90 transition-all duration-300"
            >
              <div className="flex-shrink-0 p-3 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="py-16 px-6 mx-auto max-w-7xl sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 mb-4 text-sm font-medium text-amber-800 bg-amber-200/50 rounded-full backdrop-blur-sm border border-amber-300/30">
            <Star className="w-4 h-4 mr-2" />
            Customer Favorites
          </div>

          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Featured Products
          </h2>

          <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-600">
            Handpicked products that our customers love the most
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 place-items-center max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group w-full max-w-sm bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-amber-100/50 overflow-hidden hover:shadow-xl hover:bg-white/95 transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <div className="flex items-center px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-amber-700">
                    <Star className="w-3 h-3 mr-1 fill-current" />
                    {product.rating}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-amber-700 transition-colors duration-300">
                  {product.name}
                </h3>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-gray-900">
                    ₹{product.price.toLocaleString()}
                  </span>
                  <span className="text-sm text-gray-500">
                    ({product.reviews} reviews)
                  </span>
                </div>

                <button className="w-full py-3 px-6 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 group-hover:from-amber-700 group-hover:to-orange-700">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center px-8 py-4 text-lg font-semibold text-amber-700 bg-white/80 backdrop-blur-sm rounded-xl border border-amber-200 hover:bg-white hover:shadow-md transition-all duration-300">
            View All Products
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="py-16 px-6 mx-auto max-w-7xl sm:px-8 lg:px-12">
        <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-3xl shadow-2xl">
          <div className="px-8 py-16 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Stay in the loop
            </h3>
            <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
              Get notified about new products, exclusive deals, and tech tips
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-xl border-0 bg-white/20 backdrop-blur-sm text-white placeholder-amber-200 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="px-8 py-3 bg-white text-amber-600 font-semibold rounded-xl hover:bg-amber-50 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
