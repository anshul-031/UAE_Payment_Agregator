import React, { useState } from 'react';

const RechargeMobile: React.FC = () => {
  const [operator, setOperator] = useState('');
  const [amount, setAmount] = useState('');
  const operators = ['Operator A', 'Operator B', 'Operator C']; // Replace with actual data

  const handleRecharge = () => {
    // Implement mobile recharge logic here. This will likely involve an API call.
    console.log('Recharging', amount, 'for', operator);
  };

  return (
    <div className="p-4 bg-gray-100 rounded shadow-md">
      <h1 className="text-2xl font-bold mb-4">Recharge Mobile</h1>
      <div className="mb-4">
        <label htmlFor="operator" className="block text-gray-700 font-medium mb-2">
          Mobile Operator:
        </label>
        <select
          id="operator"
          value={operator}
          onChange={(e) => setOperator(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select Operator</option>
          {operators.map((operator) => (
            <option key={operator} value={operator}>
              {operator}
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
        onClick={handleRecharge}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Recharge
      </button>
    </div>
  );
};

export default RechargeMobile;
