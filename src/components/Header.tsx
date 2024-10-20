import React from 'react';
import { ShoppingCart, User } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  setShowLogin: (show: boolean) => void;
  setShowRegister: (show: boolean) => void;
  setShowCart: (show: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ setShowLogin, setShowRegister, setShowCart }) => {
  const { cart } = useCart();

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-500">Epic Games Store</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <button
                onClick={() => setShowLogin(true)}
                className="text-white hover:text-blue-500 transition-colors"
              >
                <User className="inline-block mr-1" size={20} />
                Login
              </button>
            </li>
            <li>
              <button
                onClick={() => setShowRegister(true)}
                className="text-white hover:text-blue-500 transition-colors"
              >
                Register
              </button>
            </li>
            <li>
              <button 
                onClick={() => setShowCart(true)}
                className="text-white hover:text-blue-500 transition-colors relative"
              >
                <ShoppingCart className="inline-block" size={20} />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {cartItemsCount}
                  </span>
                )}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;