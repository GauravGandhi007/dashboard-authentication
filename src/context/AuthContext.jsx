import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    const storedAuth = localStorage.getItem('auth');
    return storedAuth ? JSON.parse(storedAuth) : null; // Load from localStorage
  });

  const login = (data) => {
    setAuth(data);
    localStorage.setItem('auth', JSON.stringify(data)); // Save to localStorage
  };

  const logout = () => {
    setAuth(null);
    localStorage.removeItem('auth'); // Clear from localStorage
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
