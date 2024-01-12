import React from 'react';
import Header from '../components/NewBillPage/header';
import Btn from '../components/NewBillPage/Btn';
import { useParams } from 'react-router-dom';

export default function NewBillPage() {
  const { groupId, planId } = useParams();

  return (
    <>
      <Header groupId={groupId} planId={planId} />
      <Btn groupId={groupId} planId={planId} />
    </>
  );
}
