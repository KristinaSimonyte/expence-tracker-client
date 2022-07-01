import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Groups from './pages/Groups/Groups';

import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Transactions from './pages/Transactions/Transactions';
 import { AuthContext } from './store/authContext';
/*
const links = [
  { title: 'Login', link: '/login' },
  { title: 'Register', link: '/register' },
  { title: 'Groups', link: '/groups', private: true },
  { title: 'Add group', link: '/groups/add', private: true },
  { title: 'Modify group', link: '/groups/modify', private: true },
  { title: 'Transactions', link: '/transactions', private: true },
  { title: 'Add Transactions', link: '/transactions/add', private: true },
  { title: 'Modify Transactions', link: '/transactions/modify', private: true },
];
*/
const Router = () => {
  // const authContext = useContext(AuthContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    isUserLoggedIn();
  }, []);

  function login(userToken) {
    localStorage.setItem('token', userToken);
     setIsLoggedIn(true);
  }
  function logout() {
    localStorage.removeItem('token');
     setIsLoggedIn(false);
  }

  function isUserLoggedIn() {
    if (localStorage.getItem('token')) {
      setIsLoggedIn(true);
    return true;
    } 
    setIsLoggedIn(false);
    return false;
  }
  
  const ctxValue = {
    isLoggedIn,
    login,
    logout,
  };
  return (
    <AuthContext.Provider value={ctxValue}>
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<ProtectedRoute redirectPage='/login'>
            <Transactions />
          </ProtectedRoute>}
        />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route
          path='/transactions'
          element={
            <ProtectedRoute redirectPage='/login'>
              <Transactions />
            </ProtectedRoute>
          }
        />
        <Route
          path='/groups'
          element={
            <ProtectedRoute redirectPage='/login'>
              <Groups />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default Router;
