import React from 'react';
import DateContent from '../components/TravelAccount/DateContent';
import Header from '../components/TravelAccount/Header';
import PlusBtn from '../components/TravelAccount/PlusBtn';
import { useParams } from 'react-router-dom';
const TravelAccountBookPage = () => {
  const { groupId } = useParams();

  return (
    <div>
      <Header groupId={groupId} />
      <DateContent groupId={groupId} />
      <PlusBtn />
    </div>
  );
};

export default TravelAccountBookPage;
