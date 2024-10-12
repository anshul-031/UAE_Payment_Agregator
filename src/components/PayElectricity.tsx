import React, { useState } from 'react';

const PayElectricity: React.FC = () => {
  const [serviceProvider, setServiceProvider] = useState('');
  const [amount, setAmount] = useState('');
  const serviceProviders = ['Provider A', 'Provider B', 'Provider C']; // Replace with actual data

  const handlePayBill = () => {
    // Implement electricity bill payment logic here. This will likely involve an API call.
    console.log('Paying', amount, 'to', serviceProvider);
  };

  return (
    <div className="p-4 bg-gray-100 rounded shadow-md">
      <h1 className="text-2xl font-bold mb-4">Pay Electricity Bill</h1>
      <div className="mb-4">
        <label htmlFor="serviceProvider" className="block text-gray-700 font-medium mb-2">
          Service Provider:
        </label>
        <select
          id="serviceProvider"
          value={serviceProvider}
          onChange={(e) => setServiceProvider(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select Provider</option>
          {serviceProviders.map((provider) => (
            <option key={provider} value={provider}>
              {provider}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="amount" className="block text-gray-700 font-medium mb-2">
          Amount:
        </label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <button
        onClick={handlePayBill}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Pay Bill
      </button>
    </div>
  );
};

export default PayElectricity;
