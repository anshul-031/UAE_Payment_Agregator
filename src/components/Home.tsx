import React from 'react';
import BankingServices from './BankingServices';
import BillPayments from './BillPayments';
import Favorites from './Favorites';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-700">AnanPay</h1>
      <section className="mb-8 p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Banking Services</h2>
        <BankingServices />
      </section>
      <section className="mb-8 p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Bill Payments</h2>
        <BillPayments />
      </section>
      <section className="p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Favorites</h2>
        <Favorites />
      </section>
    </div>
  );
};

export default Home;
