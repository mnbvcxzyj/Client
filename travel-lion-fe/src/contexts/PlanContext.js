import React, { createContext, useState } from 'react';

export const PlanContext = createContext(null);

export const PlanProvider = ({ children }) => {
  const [plan, setPlan] = useState([]);

  const handleChangePlan = (planData) => {
    setPlan(planData);
  };

  return (
    <PlanContext.Provider value={{ plan, handleChangePlan }}>
      {children}
    </PlanContext.Provider>
  );
};
