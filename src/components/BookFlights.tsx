import React, { useState } from 'react';

const BookFlights: React.FC = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [onboardingTime, setOnboardingTime] = useState('');

  const handleBookFlight = () => {
    // Implement flight booking logic here. This will likely involve an API call.
    console.log('Booking flight from', origin, 'to', destination, 'at', onboardingTime);
  };

  return (
    <div className="p-4 bg-gray-100 rounded shadow-md">
      <h1 className="text-2xl font-bold mb-4">Book Flights</h1>
      <div className="mb-4">
        <label htmlFor="origin" className="block text-gray-700 font-medium mb-2">
          Origin:
        </label>
        <input
          type="text"
          id="origin"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="destination" className="block text-gray-700 font-medium mb-2">
          Destination:
        </label>
        <input
          type="text"
          id="destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="onboardingTime" className="block text-gray-700 font-medium mb-2">
          Onboarding Time:
        </label>
        <input
          type="datetime-local"
          id="onboardingTime"
          value={onboardingTime}
          onChange={(e) => setOnboardingTime(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <button
        onClick={handleBookFlight}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Book Flight
      </button>
    </div>
  );
};

export default BookFlights;
