import { createContext } from 'react';

const AuthContext = createContext({
  isLoggedIn: false,
  login() {},
  logout() {},
  isUserLoggedIn() {},
});
AuthContext.displayName = 'AuthContext';

export { AuthContext };
