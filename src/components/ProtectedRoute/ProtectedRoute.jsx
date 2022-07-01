import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../store/authContext';

const  ProtectedRoute = ({ children, redirectPage }) => {
  const authCtx = useContext(AuthContext);
  if (authCtx.isLoggedIn) {
    return children;
  } else {
    return <Navigate to={redirectPage} />;
  }
}

ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
    redirectPage: PropTypes.string.isRequired,
  };
  
export default ProtectedRoute;