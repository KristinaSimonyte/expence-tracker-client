import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import GroupAdd from './pages/Groups/GroupAdd';
import GroupModify from './pages/Groups/GroupModify';
import Groups from './pages/Groups/Groups';

import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import TransactionAdd from './pages/Transactions/TransactionAdd';
import TransactionModify from './pages/Transactions/TransactionModify';
import Transactions from './pages/Transactions/Transactions';
import { AuthContext } from './store/authContext';

const Router = () => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
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
    isUserLoggedIn,
  };
  return (
    <AuthContext.Provider value={ctxValue}>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <ProtectedRoute redirectPage='/login'>
                <Transactions />
              </ProtectedRoute>
            }
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
            path='/transactions/add'
            element={
              <ProtectedRoute redirectPage='/login'>
                <TransactionAdd />
              </ProtectedRoute>
            }
          />

          <Route
            path='/transactions/:id/modify'
            element={
              <ProtectedRoute redirectPage='/login'>
                <TransactionModify />
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

          <Route
            path='/groups/add'
            element={
              <ProtectedRoute redirectPage='/login'>
                <GroupAdd />
              </ProtectedRoute>
            }
          />

          <Route
            path='/groups/:id/modify'
            element={
              <ProtectedRoute redirectPage='/login'>
                <GroupModify />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default Router;
