import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// creating context
const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [finalResult, setFinalResult] = useState(null);
  const navigate = useNavigate();
  const [isDashboard, setIsDashboard] = useState(false);


  const value = {
    finalResult,
    setFinalResult
  };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
};

export const useStore = () => {
  return useContext(StoreContext);
};