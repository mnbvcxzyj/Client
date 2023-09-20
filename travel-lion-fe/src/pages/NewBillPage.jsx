import React from 'react';
import { styled } from 'styled-components';
import BillInfo from '../components/NewBillPage/BillInfo';
import NewBillBtn from '../components/NewBillPage/NewBillBtn';
import Header from '../components/NewBillPage/header';
export default function NewBill() {
  return (
    <>
      <Header />
      <BillInfo />
      <NewBillBtn />
    </>
  );
}
