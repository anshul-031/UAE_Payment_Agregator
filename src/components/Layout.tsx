import React from 'react';
import { Outlet } from 'react-router-dom';
import BackButton from './BackButton';

interface LayoutProps {
  isAuthenticated: boolean;
  handleLogout: () => void;
}

const Layout: React.FC<LayoutProps> = ({ isAuthenticated, handleLogout }) => {
  return (
    <div>
      <div className="flex justify-between items-center"> {/* Added items-center for vertical alignment */}
        <BackButton />
        {isAuthenticated && (
          <button onClick={handleLogout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Sign Out
          </button>
        )}
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
