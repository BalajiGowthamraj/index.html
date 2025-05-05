import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import Header from './components/Header';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<ProductsPage />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
          </main>
          <footer className="bg-white py-6 border-t">
            <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
              <p>&copy; {new Date().getFullYear()} FakeShop. Built with Fake Store API.</p>
              <p className="mt-1">All product information is fictional and for demonstration purposes only.</p>
            </div>
          </footer>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;