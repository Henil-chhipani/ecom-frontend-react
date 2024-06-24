import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem('accessToken'); 

  const acc = localStorage.getItem('accessToken'); 
  console.log("acc :",acc);
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
