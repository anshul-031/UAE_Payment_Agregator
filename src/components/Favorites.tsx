import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState<string[]>(JSON.parse(localStorage.getItem('favorites') || '[]'));

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const addFavorite = (service: string) => {
    if (!favorites.includes(service)) {
      setFavorites([...favorites, service]);
    }
  };

  const removeFavorite = (service: string) => {
    setFavorites(favorites.filter((item) => item !== service));
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4 text-gray-800">Your Favorites</h3>
      {favorites.length === 0 ? (
        <p className="text-gray-600">No favorites yet.</p>
      ) : (
        <ul>
          {favorites.map((service) => (
            <li key={service} className="flex items-center justify-between mb-2">
              <Link to={`/${service}`} className="text-blue-500 hover:underline">{service}</Link>
              <button onClick={() => removeFavorite(service)} className="text-red-500 hover:underline">Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorites;
