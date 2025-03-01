// AuthMiddleware.js
import React from 'react';
import { useNavigate } from "react-router-dom";


const AuthMiddleware = ({ children }) => {
    const navigate = useNavigate();
  const token = localStorage.getItem('token');

  if (!token) {
    // If the token doesn't exist, redirect to the login page
    return navigate("/login");
  }

  // If the token exists, allow access to the dashboard
  return children;
};

export default AuthMiddleware;
