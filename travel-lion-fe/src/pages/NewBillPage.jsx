import React from 'react';
import Header from '../components/NewBillPage/header';
import Btn from '../components/NewBillPage/Btn';
import { useParams } from 'react-router-dom';

export default function NewBillPage() {
  const { groupId, planId } = useParams();
  console.log('뉴빌페이지에넘겨줄플랜아이디', groupId, planId);

  return (
    <>
      <Header groupId={groupId} planId={planId} />
      <Btn groupId={groupId} planId={planId} />
    </>
  );
}
