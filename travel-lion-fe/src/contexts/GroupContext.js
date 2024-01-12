import React, { createContext, useState } from 'react';

export const GroupContext = createContext(null);

export const GroupProvider = ({ children }) => {
  const [group, setGroup] = useState({});

  const handleChangeGroup = (groupData) => {
    setGroup(groupData);
  };

  return (
    <GroupContext.Provider value={{ group, handleChangeGroup }}>
      {children}
    </GroupContext.Provider>
  );
};
