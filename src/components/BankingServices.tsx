import React from 'react';
import { Link } from 'react-router-dom';
import CheckBalanceIcon from './images/CheckBalance.svg';
import OpenAccountIcon from './images/OpenAccount.svg';
import MoneyTransferIcon from './images/MoneyTransfer.svg';

const BankingServices: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Link to="/banking/check-balance" className="flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <img src={CheckBalanceIcon} alt="Check Balance" className="h-6 w-6 mr-2" />
        Check Balance
      </Link>
      <Link to="/banking/open-account" className="flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <img src={OpenAccountIcon} alt="Open Account" className="h-6 w-6 mr-2" />
        Open Account
      </Link>
      <Link to="/banking/money-transfer" className="flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <img src={MoneyTransferIcon} alt="Money Transfer" className="h-6 w-6 mr-2" />
        Money Transfer
      </Link>
    </div>
  );
};

export default BankingServices;
