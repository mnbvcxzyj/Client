import React from 'react';
import Header from '../components/BillList/Header';
import BillListBlock from '../components/BillList/BillListBlock';
import CostPerPerson from '../components/BillList/CostPerPerson';

export default function BillListPage() {
  return (
    <>
      <Header />
      <BillListBlock></BillListBlock>
      <CostPerPerson></CostPerPerson>
    </>
  );
}
