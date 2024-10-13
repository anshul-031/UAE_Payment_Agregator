import React from 'react';
import { Outlet } from 'react-router-dom';
import BackButton from './BackButton';

const Layout: React.FC = () => {
  return (
    <div>
      <div className="flex justify-end">
        <BackButton />
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
