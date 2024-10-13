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
import PageNotFound from './components/PageNotFound';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (username: string, password: string) => {
    if (username === 'demo' && password === 'password') {
      setIsAuthenticated(true);
      const timeoutId = setTimeout(() => {
        setIsAuthenticated(false);
        console.log('Session timed out');
      }, 1800000); // 30 minutes
      console.log('Timeout set:', timeoutId);
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
        <Route path="/banking/check-balance" element={isAuthenticated ? <CheckBalance /> : <Navigate to="/authentication" replace />} />
        <Route path="/banking/open-account" element={isAuthenticated ? <OpenAccount /> : <Navigate to="/authentication" replace />} />
        <Route path="/banking/money-transfer" element={isAuthenticated ? <MoneyTransfer /> : <Navigate to="/authentication" replace />} />
        <Route path="/bill-payments/book-flights" element={isAuthenticated ? <BookFlights /> : <Navigate to="/authentication" replace />} />
        <Route path="/bill-payments/pay-electricity" element={isAuthenticated ? <PayElectricity /> : <Navigate to="/authentication" replace />} />
        <Route path="/bill-payments/recharge-mobile" element={isAuthenticated ? <RechargeMobile /> : <Navigate to="/authentication" replace />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={isAuthenticated ? <PageNotFound /> : <Navigate to="/authentication" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
