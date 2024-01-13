import React from 'react';
import Header from '../components/BillList/Header';
import BillListBlock from '../components/BillList/BillListBlock';
import CostPerPerson from '../components/BillList/CostPerPerson';
import { useParams } from 'react-router-dom';

export default function BillListPage() {
  const { groupId, planId } = useParams();

  return (
    <>
      <Header groupId={groupId} planId={planId} />
      <BillListBlock groupId={groupId} planId={planId} />
      <CostPerPerson />
    </>
  );
}
