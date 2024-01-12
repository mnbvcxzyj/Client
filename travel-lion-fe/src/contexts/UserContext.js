import React, { createContext, useState, useEffect, useContext } from 'react';

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const handleChangeUser = (userData) => {
    setUser(userData);
  };

  return (
    <UserContext.Provider value={{ user, handleChangeUser }}>
      {children}
    </UserContext.Provider>
  );
};
