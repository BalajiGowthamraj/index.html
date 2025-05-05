import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowLeft, CreditCard } from 'lucide-react';
import CartItem from '../components/CartItem';
import { useCart } from '../context/CartContext';

const CartPage: React.FC = () => {
  const { cartItems, getCartTotal, getDiscountedTotal } = useCart();
  
  const subtotal = getCartTotal();
  const discount = subtotal * 0.1; // 10% discount
  const total = getDiscountedTotal();
  
  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Your Cart</h1>
        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <div className="flex justify-center mb-4">
            <ShoppingBag size={64} className="text-gray-300" />
          </div>
          <h2 className="text-xl font-medium text-gray-700 mb-2">Your cart is empty</h2>
          <p className="text-gray-500 mb-6">Looks like you haven't added any products to your cart yet.</p>
          <Link 
            to="/" 
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Your Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-4 border-b">
              <h2 className="font-medium text-gray-700">
                Cart Items ({cartItems.reduce((total, item) => total + item.quantity, 0)})
              </h2>
            </div>
            
            <div className="divide-y">
              {cartItems.map((item) => (
                <div key={item.product.id} className="p-4">
                  <CartItem item={item} />
                </div>
              ))}
            </div>
            
            <div className="p-4 bg-gray-50 border-t">
              <Link 
                to="/" 
                className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
              >
                <ArrowLeft size={16} className="mr-1" />
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
            <h2 className="font-medium text-gray-700 mb-4">Order Summary</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between text-green-600">
                <span>Discount (10%)</span>
                <span>-${discount.toFixed(2)}</span>
              </div>
              
              <div className="border-t pt-3 mt-3">
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Including taxes & fees
                </p>
              </div>
            </div>
            
            <button 
              className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center"
              onClick={() => alert('Checkout functionality would go here!')}
            >
              <CreditCard size={18} className="mr-2" />
              Proceed to Checkout
            </button>
            
            <div className="mt-4 text-xs text-gray-500 text-center">
              <p>Secure checkout powered by Stripe</p>
              <p className="mt-1">Free shipping on all orders</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;