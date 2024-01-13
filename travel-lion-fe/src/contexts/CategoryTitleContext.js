import React, { createContext, useState, useEffect, useContext } from 'react';

export const CategoryTitleContext = createContext(null);

export const CategoryTitleProvider = ({ children }) => {
  const [categoryTitle, setCategoryTitle] = useState([]);

  const handleChangeCategoryTitle = (categoryData) => {
    setCategoryTitle(categoryData);
  };

  return (
    <CategoryTitleContext.Provider
      value={{ categoryTitle, handleChangeCategoryTitle }}
    >
      {children}
    </CategoryTitleContext.Provider>
  );
};
