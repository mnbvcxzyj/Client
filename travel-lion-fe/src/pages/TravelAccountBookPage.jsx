import React from 'react';
import DateContent from '../components/TravelAccount/DateContent';
import Header from '../components/TravelAccount/Header';
import { useParams } from 'react-router-dom';
const TravelAccountBookPage = () => {
  const { groupId } = useParams();

  return (
    <div>
      <Header groupId={groupId} />
      <DateContent groupId={groupId} />
    </div>
  );
};

export default TravelAccountBookPage;
