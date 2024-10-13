import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const PageNotFound: React.FC = () => {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRedirect(true);
    }, 30000); // 30 seconds

    return () => clearTimeout(timer);
  }, []);

  if (redirect) {
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <h1>URL not found</h1>
      <p>Redirecting to home page in 30 seconds...</p>
    </div>
  );
};

export default PageNotFound;
