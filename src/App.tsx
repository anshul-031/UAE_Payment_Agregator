import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
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

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      const now = new Date();
      if (now < new Date(parsedUser.expiry)) {
        setIsAuthenticated(true);
      } else {
        localStorage.removeItem('user');
      }
    }
  }, []);

  const handleLogin = (username: string, password: string) => {
    if (username === 'demo' && password === 'password') {
      const now = new Date();
      const expiry = new Date();
      expiry.setMinutes(now.getMinutes() + 30);
      localStorage.setItem('user', JSON.stringify({ username, expiry }));
      setIsAuthenticated(true);
      console.log('User logged in:', username);
    } else {
      alert('Invalid credentials');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    console.log('User logged out');
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={isAuthenticated ? (
          <div>
            <Home />
            <button onClick={handleLogout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded fixed top-0 right-0 m-4"> {/* Added fixed positioning */}
              Sign Out
            </button>
          </div>
        ) : <Navigate to="/authentication" replace />} />
        <Route element={<Layout isAuthenticated={isAuthenticated} handleLogout={handleLogout} />}>
          <Route path="/contact-us" element={isAuthenticated ? <ContactUs /> : <Navigate to="/authentication" replace />} />
          <Route path="/edit-profile" element={isAuthenticated ? <EditProfile /> : <Navigate to="/authentication" replace />} />
          <Route path="/banking/check-balance" element={isAuthenticated ? <CheckBalance /> : <Navigate to="/authentication" replace />} />
          <Route path="/banking/open-account" element={isAuthenticated ? <OpenAccount /> : <Navigate to="/authentication" replace />} />
          <Route path="/banking/money-transfer" element={isAuthenticated ? <MoneyTransfer /> : <Navigate to="/authentication" replace />} />
          <Route path="/bill-payments/book-flights" element={isAuthenticated ? <BookFlights /> : <Navigate to="/authentication" replace />} />
          <Route path="/bill-payments/pay-electricity" element={isAuthenticated ? <PayElectricity /> : <Navigate to="/authentication" replace />} />
          <Route path="/bill-payments/recharge-mobile" element={isAuthenticated ? <RechargeMobile /> : <Navigate to="/authentication" replace />} />
          <Route path="*" element={isAuthenticated ? <PageNotFound /> : <Navigate to="/authentication" replace />} />
        </Route>
        <Route path="/authentication" element={isAuthenticated ? <Navigate to="/" replace /> : <Authentication onLogin={handleLogin} />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
