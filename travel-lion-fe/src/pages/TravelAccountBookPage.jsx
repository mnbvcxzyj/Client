import React from 'react';
import { styled } from 'styled-components';
import DateContent from '../components/TravelAccount/DateContent';
import Header from '../components/BillList/Header';
import PlusBtn from '../components/TravelAccount/PlusBtn';

const TravelAccountBookPage = () => {
  return (
    <div>
      <Header />
      <DateContent />
      <PlusBtn />
    </div>
  );
};

export default TravelAccountBookPage;
