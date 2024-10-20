import React, { useState } from 'react';
import Header from './components/Header';
import GameList from './components/GameList';
import Login from './components/Login';
import Register from './components/Register';
import CartSummary from './components/CartSummary';
import ImageCarousel from './components/ImageCarousel';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showCart, setShowCart] = useState(false);

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-gray-900 text-white">
        <Header 
          setShowLogin={setShowLogin} 
          setShowRegister={setShowRegister}
          setShowCart={setShowCart}
        />
        <main className="flex-grow container mx-auto px-4 py-8">
          <ImageCarousel />
          <GameList />
        </main>
        <Footer />
        {showLogin && <Login onClose={() => setShowLogin(false)} />}
        {showRegister && <Register onClose={() => setShowRegister(false)} />}
        {showCart && <CartSummary onClose={() => setShowCart(false)} />}
      </div>
    </CartProvider>
  );
}

export default App;