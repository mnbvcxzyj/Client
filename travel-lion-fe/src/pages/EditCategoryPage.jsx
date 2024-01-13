import React from 'react';
import EditCategoey from '../components/EditCategory/EditCategory';
import { useParams } from 'react-router-dom';

const EditCategoryPage = () => {
  const { groupId, planId } = useParams();

  return (
    <>
      <EditCategoey groupId={groupId} planId={planId} />
    </>
  );
};

export default EditCategoryPage;
