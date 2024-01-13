import React from 'react';
import NewCategory from '../components/NewCategory/NewCategory';
import { useParams } from 'react-router-dom';

const NewCategoryPage = () => {
  const { groupId, planId } = useParams();

  return (
    <div>
      <NewCategory groupId={groupId} planId={planId} />
    </div>
  );
};

export default NewCategoryPage;
