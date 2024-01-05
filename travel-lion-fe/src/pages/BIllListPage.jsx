import React from 'react';
import Header from '../components/BillList/Header';
import BillListBlock from '../components/BillList/BillListBlock';
import CostPerPerson from '../components/BillList/CostPerPerson';
import AllowUser from '../components/FollowRequestList/AllowUser';
import IsMember from '../components/FollowRequestList/IsMember';

export default function BillListPage() {
  return (
    <>
      <Header />
      <BillListBlock></BillListBlock>
      <CostPerPerson></CostPerPerson>
    </>
  );
}
