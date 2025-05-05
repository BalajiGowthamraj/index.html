import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '../types';
import { useCart } from '../context/CartContext';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();
  const { product, quantity } = item;
  const totalPrice = product.price * quantity;

  return (
    <div className="flex flex-col sm:flex-row items-center border-b py-4 gap-4 animate-fadeIn">
      <div className="w-24 h-24 flex-shrink-0">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-contain"
        />
      </div>
      
      <div className="flex-grow">
        <h3 className="font-medium text-gray-800">{product.title}</h3>
        <p className="text-sm text-gray-500 mt-1">
          ${product.price.toFixed(2)} per item
        </p>
      </div>
      
      <div className="flex items-center gap-2">
        <button 
          onClick={() => decreaseQuantity(product.id)}
          className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
          disabled={quantity <= 1}
        >
          <Minus size={16} className={quantity <= 1 ? "text-gray-400" : "text-gray-600"} />
        </button>
        
        <span className="w-8 text-center">{quantity}</span>
        
        <button 
          onClick={() => increaseQuantity(product.id)}
          className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
        >
          <Plus size={16} className="text-gray-600" />
        </button>
      </div>
      
      <div className="text-right min-w-[100px]">
        <div className="font-semibold">${totalPrice.toFixed(2)}</div>
        <button 
          onClick={() => removeFromCart(product.id)}
          className="text-red-500 hover:text-red-700 inline-flex items-center mt-1 text-sm"
        >
          <Trash2 size={16} className="mr-1" />
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;