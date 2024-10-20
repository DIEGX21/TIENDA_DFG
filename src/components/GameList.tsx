import React from 'react';
import { useCart } from '../context/CartContext';

const games = [
  { id: 1, title: 'Fortnite', image: 'https://images.unsplash.com/photo-1589241062272-c0a000072dfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80', price: 'Free' },
  { id: 2, title: 'Rocket League', image: 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80', price: '$19.99' },
  { id: 3, title: 'Assassin\'s Creed Valhalla', image: 'https://images.unsplash.com/photo-1616565441778-e8f8d8e7c1a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80', price: '$59.99' },
];

const GameList: React.FC = () => {
  const { addToCart } = useCart();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {games.map((game) => (
        <div key={game.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
          <img src={game.image} alt={game.title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{game.title}</h2>
            <p className="text-blue-500 font-bold">{game.price}</p>
            <button 
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors"
              onClick={() => addToCart({ id: game.id, title: game.title, price: game.price, quantity: 1, image: game.image })}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GameList;