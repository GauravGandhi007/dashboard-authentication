import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const DashboardPage = () => {
  const { auth } = useContext(AuthContext);

  if (!auth) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <h1>Welcome to your Dashboard!</h1>
    </div>
  );
};

export default DashboardPage;
