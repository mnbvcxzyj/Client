import React from 'react';
import DateContent from '../components/TravelAccount/DateContent';
import Header from '../components/BillList/Header';
import PlusBtn from '../components/TravelAccount/PlusBtn';
import { CurrencyProvider } from '../components/TravelAccount/CurrencyProvider';

const TravelAccountBookPage = () => {
  return (
    <div>
      <CurrencyProvider>
        <Header />
        <DateContent />
        <PlusBtn />
      </CurrencyProvider>
    </div>
  );
};

export default TravelAccountBookPage;
