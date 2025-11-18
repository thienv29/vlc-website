import { useState } from 'react';
import { ArrowRight, ShoppingCart, Eye, Star, DollarSign } from 'lucide-react';

interface ProductCardProps {
  product: {
    id: number;
    title: string;
    description: string;
    price: string;
    category: string;
    image: string;
    tags: string[];
    specifications?: string[];
    features?: string[];
    status?: string;
  };
  onViewDetails: (id: number) => void;
  onAddToCart: (id: number) => void;
}

export default function ProductCard({ product, onViewDetails, onAddToCart }: ProductCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 h-full flex flex-col">
      {/* Product Image */}
      <div className="relative h-40 overflow-hidden bg-gray-100 flex-shrink-0">
        <img
          src={product.image}
          alt={product.title}
          className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
          onError={(e) => {
            e.currentTarget.src = `https://via.placeholder.com/400x200/3B82F6/FFFFFF?text=${encodeURIComponent(product.title)}`;
          }}
        />
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="w-6 h-6 border-3 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        
        {/* Status Badge */}
        {product.status && (
          <div className="absolute top-3 left-3">
            <span className={`px-2 py-1 rounded-lg text-xs font-semibold ${
              product.status === 'Mới' 
                ? 'bg-green-500 text-white'
                : product.status === 'Bán chạy'
                ? 'bg-red-500 text-white'
                : 'bg-blue-500 text-white'
            }`}>
              {product.status}
            </span>
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-3 right-3">
          <span className="px-2 py-1 bg-white/90 backdrop-blur-sm text-gray-700 rounded-lg text-xs font-medium">
            {product.category}
          </span>
        </div>
      </div>

      {/* Product Content */}
      <div className="p-4 flex flex-col flex-1">
        {/* Product Title - Flexible height */}
        <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary-700 transition-colors leading-tight">
          {product.title}
        </h3>

        {/* Product Description (2-3 lines flexible) */}
        <p className="text-sm text-gray-600 mb-3 line-clamp-3 leading-relaxed">
          {product.description}
        </p>

        {/* Product Features - 2-3 lines flexible */}
        <div className="mb-4">
          {product.features && product.features.length > 0 ? (
            <div className="space-y-1">
              {product.features.slice(0, 3).map((feature, index) => (
                <div key={index} className="flex items-start gap-2 text-xs text-gray-700">
                  <div className="w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0 mt-1.5" />
                  <span className="leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-1">
              <div className="flex items-start gap-2 text-xs text-gray-700">
                <div className="w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0 mt-1.5" />
                <span className="leading-relaxed">Chất lượng cao, độ bền tối ưu</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-gray-700">
                <div className="w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0 mt-1.5" />
                <span className="leading-relaxed">Công nghệ tiên tiến</span>
              </div>
            </div>
          )}
        </div>

        {/* Price */}
        <div className="mb-3 pt-2 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-primary-600" />
            <span className="text-lg font-bold text-primary-600">
              {product.price}
            </span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="space-y-2 mt-auto">
          {/* CTA 1: Xem chi tiết */}
          <button
            onClick={() => onViewDetails(product.id)}
            className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
          >
            <Eye className="w-4 h-4" />
            Xem chi tiết
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* CTA 2: Thêm giỏ hàng */}
          <button
            onClick={() => onAddToCart(product.id)}
            className="w-full bg-white border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2"
          >
            <ShoppingCart className="w-4 h-4" />
            Thêm giỏ hàng
          </button>
        </div>
      </div>

      {/* Hover Border Effect */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary-300 transition-all duration-300 pointer-events-none" />
    </div>
  );
}