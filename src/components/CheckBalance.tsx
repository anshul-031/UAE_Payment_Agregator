import React, { useState } from 'react';

const CheckBalance: React.FC = () => {
  const [selectedAccount, setSelectedAccount] = useState('');
  const bankAccounts = ['Account 1', 'Account 2', 'Account 3']; // Replace with actual data

  const handleBalanceRequest = () => {
    // Implement balance request logic here.  This will likely involve an API call.
    console.log('Requesting balance for account:', selectedAccount);
  };

  return (
    <div className="p-4 bg-gray-100 rounded shadow-md">
      <h1 className="text-2xl font-bold mb-4">Check Balance</h1>
      <div className="mb-4">
        <label htmlFor="accountSelect" className="block text-gray-700 font-medium mb-2">
          Select Account:
        </label>
        <select
          id="accountSelect"
          value={selectedAccount}
          onChange={(e) => setSelectedAccount(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select Account</option>
          {bankAccounts.map((account) => (
            <option key={account} value={account}>
              {account}
            </option>
          ))}
        </select>
      </div>
      <button
        onClick={handleBalanceRequest}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Request Balance
      </button>
      {/* Display balance here after request */}
    </div>
  );
};

export default CheckBalance;
