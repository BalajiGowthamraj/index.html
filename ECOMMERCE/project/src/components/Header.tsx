import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Home } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header: React.FC = () => {
  const { cartItems } = useCart();
  
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link 
          to="/" 
          className="text-xl font-bold text-blue-600 flex items-center hover:text-blue-800 transition-colors"
        >
          <Home className="mr-2" size={24} />
          FakeShop
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link 
                to="/" 
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Products
              </Link>
            </li>
            <li>
              <Link 
                to="/cart" 
                className="text-gray-700 hover:text-blue-600 transition-colors relative"
              >
                <ShoppingCart className="inline-block" size={20} />
                <span className="ml-1">Cart</span>
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {totalItems}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;