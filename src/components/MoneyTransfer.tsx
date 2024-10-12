import React, { useState } from 'react';

const MoneyTransfer: React.FC = () => {
  const [accountNumber, setAccountNumber] = useState('');
  const [amount, setAmount] = useState('');

  const handleTransfer = () => {
    // Implement money transfer logic here. This will likely involve an API call.
    console.log('Transferring', amount, 'to account', accountNumber);
  };

  return (
    <div className="p-4 bg-gray-100 rounded shadow-md">
      <h1 className="text-2xl font-bold mb-4">Money Transfer</h1>
      <div className="mb-4">
        <label htmlFor="accountNumber" className="block text-gray-700 font-medium mb-2">
          Account Number:
        </label>
        <input
          type="text"
          id="accountNumber"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
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
        onClick={handleTransfer}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Transfer Money
      </button>
    </div>
  );
};

export default MoneyTransfer;
