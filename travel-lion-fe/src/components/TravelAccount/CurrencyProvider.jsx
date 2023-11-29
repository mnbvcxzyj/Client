import React, { createContext, useState, useContext } from 'react';

const CurrencyContext = createContext();

export const useCurrency = () => useContext(CurrencyContext);

export const CurrencyProvider = ({ children }) => {
  const [selectedCurrency, setSelectedCurrency] = useState('KRW');

  const handleCurrencyChange = (currencyCode) => {
    setSelectedCurrency(currencyCode);
  };

  return (
    <CurrencyContext.Provider
      value={{ selectedCurrency, handleCurrencyChange }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};
