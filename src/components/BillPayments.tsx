import React from 'react';
import { Link } from 'react-router-dom';
import BookFlightsIcon from './images/BookFlights.svg';
import PayElectricityIcon from './images/PayElectricity.svg';
import RechargeMobileIcon from './images/RechargeMobile.svg';

const BillPayments: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Link to="/bill-payments/book-flights" className="flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <img src={BookFlightsIcon} alt="Book Flights" className="h-6 w-6 mr-2" />
        Book Flights
      </Link>
      <Link to="/bill-payments/pay-electricity" className="flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <img src={PayElectricityIcon} alt="Pay Electricity Bill" className="h-6 w-6 mr-2" />
        Pay Electricity Bill
      </Link>
      <Link to="/bill-payments/recharge-mobile" className="flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <img src={RechargeMobileIcon} alt="Recharge Mobile" className="h-6 w-6 mr-2" />
        Recharge Mobile
      </Link>
    </div>
  );
};

export default BillPayments;
