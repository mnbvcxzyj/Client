import React, { createContext, useState, useEffect, useContext } from 'react';

export const CategoryContext = createContext(null);

export const CategoryProvider = ({ children }) => {
  const [category, setCategory] = useState({});

  const handleChangeCategory = (categoryData) => {
    setCategory(categoryData);
  };

  return (
    <CategoryContext.Provider value={{ category, handleChangeCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};
