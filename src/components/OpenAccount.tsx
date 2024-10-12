import React, { useState } from 'react';

const OpenAccount: React.FC = () => {
  const [selectedBank, setSelectedBank] = useState('');
  const banks = ['Bank A', 'Bank B', 'Bank C']; // Replace with actual data

  const handleOpenAccount = () => {
    // Implement account opening logic here. This will likely involve an API call.
    console.log('Opening account at:', selectedBank);
  };

  return (
    <div className="p-4 bg-gray-100 rounded shadow-md">
      <h1 className="text-2xl font-bold mb-4">Open Account</h1>
      <div className="mb-4">
        <label htmlFor="bankSelect" className="block text-gray-700 font-medium mb-2">
          Select Bank:
        </label>
        <select
          id="bankSelect"
          value={selectedBank}
          onChange={(e) => setSelectedBank(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select Bank</option>
          {banks.map((bank) => (
            <option key={bank} value={bank}>
              {bank}
            </option>
          ))}
        </select>
      </div>
      <button
        onClick={handleOpenAccount}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Open Account
      </button>
      {/* Add further account details input fields here */}
    </div>
  );
};

export default OpenAccount;
