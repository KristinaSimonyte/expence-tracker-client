import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext({
    isLoggedIn: false,
    login() {},
    logout() {},
  });
AuthContext.displayName = 'AuthContext';

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState();
  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;