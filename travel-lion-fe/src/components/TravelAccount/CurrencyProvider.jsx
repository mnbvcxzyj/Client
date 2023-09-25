// CurrencyProvider.js
import React, { createContext, useContext, useState } from 'react';

const CurrencyContext = createContext();

export function CurrencyProvider({ children }) {
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
}

export { CurrencyContext };
