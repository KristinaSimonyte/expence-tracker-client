import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, redirectPage }) => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  useEffect(()=>{
    if (!localStorage.getItem('token')) {
      setIsLoggedIn(false);
    }
  },[]);


  if (isLoggedIn) {
    return children;
  } else {
    return <Navigate to={redirectPage} />;
  }
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  redirectPage: PropTypes.string.isRequired,
};

export default ProtectedRoute;
