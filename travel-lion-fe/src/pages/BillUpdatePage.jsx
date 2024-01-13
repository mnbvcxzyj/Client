import React from 'react';
import Header from '../components/NewBillPage/header';
import Btn from '../components/BillUpdate/Btn';
import { useParams } from 'react-router-dom';

export default function BillUpdatePage() {
  const { groupId, planId, categoryId } = useParams();

  return (
    <>
      <Header groupId={groupId} planId={planId} categoryId={categoryId} />
      <Btn groupId={groupId} planId={planId} categoryId={categoryId} />
    </>
  );
}
