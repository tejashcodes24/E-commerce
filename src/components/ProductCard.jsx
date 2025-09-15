export default function ProductCard({ product }) {
  return (
    <div className="group w-full max-w-sm bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-amber-100/50 overflow-hidden hover:shadow-xl hover:bg-white/95 transition-all duration-500 hover:-translate-y-2">
      <div className="relative overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4">
          <div className="flex items-center px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-amber-700">
            <span className="text-amber-500 fill-current mr-1">★</span>
            {product.rating}
          </div>
        </div>
        <div className="absolute top-4 right-4">
          <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-amber-100 transition-colors duration-300">
            <Heart className="w-4 h-4 text-amber-600" />
          </button>
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
  );
}
