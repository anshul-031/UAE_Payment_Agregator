import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import EditProfile from './components/EditProfile';
import Authentication from './components/Authentication';
import CheckBalance from './components/CheckBalance';
import OpenAccount from './components/OpenAccount';
import MoneyTransfer from './components/MoneyTransfer';
import BookFlights from './components/BookFlights';
import PayElectricity from './components/PayElectricity';
import RechargeMobile from './components/RechargeMobile';
import ResetPassword from './components/ResetPassword';
import Signup from './components/Signup';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (username: string, password: string) => {
    if (username === 'demo' && password === 'password') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/authentication" replace />} />
        <Route path="/contact-us" element={isAuthenticated ? <ContactUs /> : <Navigate to="/authentication" replace />} />
        <Route path="/edit-profile" element={isAuthenticated ? <EditProfile /> : <Navigate to="/authentication" replace />} />
        <Route path="/authentication" element={<Authentication onLogin={handleLogin} />} />
        <Route path="/banking/check-balance" element={<CheckBalance />} />
        <Route path="/banking/open-account" element={<OpenAccount />} />
        <Route path="/banking/money-transfer" element={<MoneyTransfer />} />
        <Route path="/bill-payments/book-flights" element={<BookFlights />} />
        <Route path="/bill-payments/pay-electricity" element={<PayElectricity />} />
        <Route path="/bill-payments/recharge-mobile" element={<RechargeMobile />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
