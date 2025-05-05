import React, { useState } from 'react';
import { ShoppingCart, Check, Star, X } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, removeFromCart, isInCart } = useCart();
  const [showModal, setShowModal] = useState(false);
  
  const inCart = isInCart(product.id);
  
  const handleCartAction = () => {
    if (inCart) {
      removeFromCart(product.id);
    } else {
      addToCart(product);
    }
  };

  const truncateDescription = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
        <div 
          className="h-48 overflow-hidden cursor-pointer"
          onClick={() => setShowModal(true)}
        >
          <img 
            src={product.image} 
            alt={product.title} 
            className="w-full h-full object-contain p-4 transition-transform hover:scale-105"
          />
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <div 
            className="font-semibold text-gray-800 mb-1 cursor-pointer hover:text-blue-600 transition-colors"
            onClick={() => setShowModal(true)}
          >
            {truncateDescription(product.title, 50)}
          </div>
          <div className="flex items-center mb-2">
            <Star className="text-yellow-500 fill-yellow-500 mr-1" size={16} />
            <span className="text-sm text-gray-600">
              {product.rating.rate} ({product.rating.count} reviews)
            </span>
          </div>
          <p className="text-sm text-gray-600 mb-3 flex-grow">
            {truncateDescription(product.description, 100)}
          </p>
          <div className="flex justify-between items-center mt-auto">
            <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
            <button 
              onClick={handleCartAction}
              className={`px-3 py-2 rounded-md flex items-center text-sm ${
                inCart 
                  ? 'bg-red-100 text-red-700 hover:bg-red-200' 
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              } transition-colors`}
            >
              {inCart ? (
                <>
                  <X size={16} className="mr-1" />
                  Remove
                </>
              ) : (
                <>
                  <ShoppingCart size={16} className="mr-1" />
                  Add to Cart
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Product Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-auto">
            <div className="flex justify-end p-2">
              <button 
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center justify-center">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="max-h-[300px] object-contain"
                />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-2">{product.title}</h2>
                <div className="flex items-center mb-3">
                  <Star className="text-yellow-500 fill-yellow-500 mr-1" size={18} />
                  <span className="text-gray-600">
                    {product.rating.rate} ({product.rating.count} reviews)
                  </span>
                </div>
                <p className="text-gray-700 mb-4">{product.description}</p>
                <div className="flex items-center mb-6">
                  <span className="text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
                  <span className="ml-2 text-sm text-gray-500">Category: {product.category}</span>
                </div>
                <button 
                  onClick={handleCartAction}
                  className={`w-full py-3 rounded-md flex items-center justify-center ${
                    inCart 
                      ? 'bg-red-600 hover:bg-red-700' 
                      : 'bg-blue-600 hover:bg-blue-700'
                  } text-white transition-colors`}
                >
                  {inCart ? (
                    <>
                      <Check size={20} className="mr-2" />
                      Remove from Cart
                    </>
                  ) : (
                    <>
                      <ShoppingCart size={20} className="mr-2" />
                      Add to Cart
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;