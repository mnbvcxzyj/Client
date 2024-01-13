import React from 'react';
import RenameCategory from '../components/EditCategory/RenameCategory';
import { useParams } from 'react-router-dom';

const RenameCategoryPage = () => {
  const { groupId, planId, categoryId } = useParams();

  return (
    <div>
      <RenameCategory
        groupId={groupId}
        planId={planId}
        categoryId={categoryId}
      />
    </div>
  );
};

export default RenameCategoryPage;
